<?php
declare(strict_types=1);

/*
 * Mises à jour de la base, appliquées une seule fois chacune par api/install.php.
 * Ajouter une migration : nouvelle entrée à la fin de la liste, avec un nom daté jamais réutilisé.
 */

function migrations(): array
{
    return [
        // Encadré d'appel à l'action en fin d'article
        '2026-10-20-articles-encadre' => function () {
            $columns = [
                'cta_title' => "VARCHAR(190) NOT NULL DEFAULT '' AFTER content",
                'cta_text' => "VARCHAR(500) NOT NULL DEFAULT '' AFTER cta_title",
                'cta_label' => "VARCHAR(80) NOT NULL DEFAULT '' AFTER cta_text",
                'cta_url' => "VARCHAR(500) NOT NULL DEFAULT '' AFTER cta_label",
            ];
            foreach ($columns as $column => $definition) {
                if (!column_exists('articles', $column)) {
                    db()->exec("ALTER TABLE articles ADD COLUMN $column $definition");
                }
            }
        },

        // Articles écrits jusqu'ici directement dans le code du site
        '2026-10-20-articles-historiques' => function () {
            foreach (require __DIR__ . '/../seeds/articles-historiques.php' as $article) {
                if (db_value('SELECT id FROM articles WHERE slug = ?', [$article['slug']])) {
                    continue;
                }
                $article['content'] = sanitize_html($article['content']);
                db_insert('articles', $article + ['status' => 'published']);
            }
        },

        // Photos de la galerie écrites jusqu'ici dans le code du site, placées après celles ajoutées depuis l'admin
        '2026-10-20-galerie-historique' => function () {
            $position = (int) db_value('SELECT COALESCE(MAX(sort_order), 0) FROM gallery_items') + 1;
            foreach (require __DIR__ . '/../seeds/galerie-historique.php' as $photo) {
                if (db_value('SELECT id FROM gallery_items WHERE image = ?', [$photo['image']])) {
                    continue;
                }
                db_insert('gallery_items', $photo + ['sort_order' => $position++]);
            }
        },

        // Plusieurs photos par article, affichées sous le texte
        '2026-10-20-articles-photos' => function () {
            if (!column_exists('articles', 'photos')) {
                db()->exec('ALTER TABLE articles ADD COLUMN photos LONGTEXT NULL AFTER image');
            }
        },
    ];
}

/** Applique les migrations manquantes ; renvoie le nom de celles appliquées. */
function run_migrations(): array
{
    $done = array_column(db_all('SELECT name FROM migrations'), 'name');
    $applied = [];
    foreach (migrations() as $name => $migration) {
        if (in_array($name, $done, true)) {
            continue;
        }
        $migration();
        db_insert('migrations', ['name' => $name]);
        $applied[] = $name;
    }
    return $applied;
}

function column_exists(string $table, string $column): bool
{
    return (bool) db_value(
        'SELECT COUNT(*) FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ? AND COLUMN_NAME = ?',
        [$table, $column]
    );
}
