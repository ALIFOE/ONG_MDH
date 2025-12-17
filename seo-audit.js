#!/usr/bin/env node

/**
 * Audit SEO Avancé - Vérification de tous les éléments
 * Donne un score complet du SEO du site
 */

const fs = require('fs');
const path = require('path');

class SEOAudit {
  constructor() {
    this.mainDir = process.cwd();
    this.score = 0;
    this.maxScore = 100;
    this.checks = [];
  }

  check(name, condition, points = 10) {
    const passed = condition();
    this.checks.push({
      name,
      passed,
      points: passed ? points : 0
    });
    if (passed) {
      this.score += points;
    }
  }

  fileExists(filePath) {
    return fs.existsSync(path.join(this.mainDir, filePath));
  }

  fileContains(filePath, text) {
    try {
      const content = fs.readFileSync(path.join(this.mainDir, filePath), 'utf8');
      return content.includes(text);
    } catch {
      return false;
    }
  }

  countOccurrences(filePath, text) {
    try {
      const content = fs.readFileSync(path.join(this.mainDir, filePath), 'utf8');
      return (content.match(new RegExp(text, 'g')) || []).length;
    } catch {
      return 0;
    }
  }

  run() {
    console.log('\n📊 AUDIT SEO AVANCÉ - MDH International Togo\n');
    console.log('='.repeat(60));

    // Configuration de base
    console.log('\n✅ CONFIGURATION DE BASE');
    this.check('Sitemap.xml existe', () => this.fileExists('sitemap.xml'), 10);
    this.check('Robots.txt existe', () => this.fileExists('robots.txt'), 10);
    this.check('Manifest.json existe', () => this.fileExists('manifest.json'), 5);
    this.check('.htaccess existe', () => this.fileExists('.htaccess'), 5);

    // Meta tags
    console.log('\n✅ META TAGS');
    this.check('Meta descriptions dans 50%+ pages', () => {
      let count = 0;
      const files = ['index.html', 'association.html', 'contact.html', 'actions.html', 'donation.html'];
      files.forEach(f => {
        if (this.fileContains(f, 'meta name="description"')) count++;
      });
      return count >= files.length * 0.5;
    }, 10);

    this.check('Canonical URLs configurées', () => {
      return this.fileContains('index.html', 'rel="canonical"');
    }, 10);

    this.check('Open Graph tags présents', () => {
      return this.fileContains('index.html', 'property="og:');
    }, 8);

    this.check('Twitter Card tags présents', () => {
      return this.fileContains('index.html', 'twitter:');
    }, 5);

    // Structured Data
    console.log('\n✅ STRUCTURED DATA (JSON-LD)');
    this.check('Schema Organization', () => {
      return this.fileContains('index.html', '@type": "Organization');
    }, 10);

    this.check('Schema ContactPoint', () => {
      return this.fileContains('index.html', '"@type": "ContactPoint"');
    }, 8);

    this.check('Schema LocalBusiness', () => {
      return this.fileContains('contact.html', '"@type": "ContactPage"');
    }, 8);

    this.check('Schemas avancés disponibles', () => {
      return this.fileExists('advanced-seo-schemas.js');
    }, 5);

    // Performance et PWA
    console.log('\n✅ PERFORMANCE ET PWA');
    this.check('PWA meta tags ajoutés', () => {
      return this.fileContains('index.html', 'manifest.json');
    }, 10);

    this.check('Service Worker', () => {
      return this.fileExists('js/service-worker.js');
    }, 8);

    this.check('Preconnect tags', () => {
      return this.fileContains('index.html', 'rel="preconnect"');
    }, 5);

    this.check('Favicon configuré', () => {
      return this.fileContains('index.html', 'favicon-mdh.png');
    }, 3);

    // Sécurité
    console.log('\n✅ SÉCURITÉ');
    this.check('Headers de sécurité (.htaccess)', () => {
      return this.fileContains('.htaccess', 'X-Frame-Options');
    }, 8);

    this.check('CSP configuré', () => {
      return this.fileContains('.htaccess', 'Content-Security-Policy');
    }, 7);

    this.check('Compression gzip', () => {
      return this.fileContains('.htaccess', 'mod_deflate');
    }, 5);

    // Optimisations
    console.log('\n✅ OPTIMISATIONS');
    this.check('Cache configuré', () => {
      return this.fileContains('.htaccess', 'mod_expires');
    }, 8);

    this.check('Redirections 301', () => {
      return this.fileContains('.htaccess', 'RewriteEngine On');
    }, 5);

    this.check('Script SEO avancé', () => {
      return this.fileExists('seo-config.js');
    }, 5);

    // Affichage des résultats
    console.log('\n' + '='.repeat(60));
    console.log('\n📈 RÉSULTATS DÉTAILLÉS:\n');

    let category = '';
    this.checks.forEach(check => {
      const status = check.passed ? '✅' : '❌';
      const points = check.passed ? `+${check.points}` : '0';
      console.log(`${status} ${check.name.padEnd(40)} ${points.padStart(5)}`);
    });

    console.log('\n' + '='.repeat(60));
    console.log(`\n📊 SCORE TOTAL: ${this.score}/${this.maxScore} (${Math.round(this.score / this.maxScore * 100)}%)\n`);

    // Recommandations
    this.printRecommendations();

    console.log('='.repeat(60) + '\n');
  }

  printRecommendations() {
    const failedChecks = this.checks.filter(c => !c.passed);
    
    if (failedChecks.length === 0) {
      console.log('🎉 EXCELLENT! Tous les éléments SEO avancés sont configurés!\n');
      return;
    }

    console.log('💡 RECOMMANDATIONS:\n');
    failedChecks.forEach((check, i) => {
      console.log(`${i + 1}. ${check.name}`);
    });
    console.log();
  }
}

// Lancer l'audit
const audit = new SEOAudit();
audit.run();
