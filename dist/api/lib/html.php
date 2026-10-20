<?php
declare(strict_types=1);

/**
 * Nettoie le HTML produit par l'éditeur d'articles : seules les balises de mise en forme
 * et les attributs listés ci-dessous sont conservés.
 */
const HTML_ALLOWED = [
    'p' => [], 'br' => [], 'hr' => [],
    'h2' => [], 'h3' => [], 'h4' => [],
    'strong' => [], 'b' => [], 'em' => [], 'i' => [], 'u' => [], 's' => [],
    'ul' => [], 'ol' => [], 'li' => [],
    'blockquote' => [],
    'a' => ['href', 'target'],
    'img' => ['src', 'alt'],
];

// Éléments supprimés avec tout leur contenu
const HTML_DROP = ['script', 'style', 'iframe', 'object', 'embed', 'form', 'input', 'button', 'select', 'textarea', 'svg', 'math', 'template', 'noscript'];

function sanitize_html(string $html): string
{
    $html = trim($html);
    if ($html === '') {
        return '';
    }
    $doc = new DOMDocument();
    $previous = libxml_use_internal_errors(true);
    $doc->loadHTML('<?xml encoding="utf-8"?><div id="root">' . $html . '</div>', LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);
    libxml_clear_errors();
    libxml_use_internal_errors($previous);

    $root = $doc->getElementById('root');
    if (!$root) {
        return '';
    }
    sanitize_children($root);

    $out = '';
    foreach ($root->childNodes as $child) {
        $out .= $doc->saveHTML($child);
    }
    return trim($out);
}

function sanitize_children(DOMNode $node): void
{
    // Copie de la liste : on modifie l'arbre pendant le parcours
    foreach (iterator_to_array($node->childNodes) as $child) {
        if ($child instanceof DOMText) {
            continue;
        }
        if (!$child instanceof DOMElement) {
            $node->removeChild($child);
            continue;
        }
        $tag = strtolower($child->tagName);
        if (in_array($tag, HTML_DROP, true)) {
            $node->removeChild($child);
            continue;
        }
        sanitize_children($child);
        if (!array_key_exists($tag, HTML_ALLOWED)) {
            // Balise inconnue : on garde son contenu
            while ($child->firstChild) {
                $node->insertBefore($child->firstChild, $child);
            }
            $node->removeChild($child);
            continue;
        }
        foreach (iterator_to_array($child->attributes) as $attribute) {
            $name = strtolower($attribute->name);
            if (!in_array($name, HTML_ALLOWED[$tag], true)) {
                $child->removeAttribute($attribute->name);
            }
        }
        if ($tag === 'a') {
            $href = safe_url($child->getAttribute('href'), true);
            if ($href === '') {
                $child->removeAttribute('href');
            } else {
                $child->setAttribute('href', $href);
            }
            if ($child->getAttribute('target') === '_blank') {
                $child->setAttribute('rel', 'noopener noreferrer');
            } else {
                $child->removeAttribute('target');
            }
        }
        if ($tag === 'img') {
            $src = safe_url($child->getAttribute('src'));
            if ($src === '') {
                $node->removeChild($child);
                continue;
            }
            $child->setAttribute('src', $src);
        }
    }
}
