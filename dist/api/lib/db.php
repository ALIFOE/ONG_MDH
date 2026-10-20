<?php
declare(strict_types=1);

function db(): PDO
{
    static $pdo = null;
    if ($pdo === null) {
        $c = config('db');
        $dsn = sprintf('mysql:host=%s;port=%d;dbname=%s;charset=utf8mb4', $c['host'], (int) ($c['port'] ?? 3306), $c['name']);
        $pdo = new PDO($dsn, $c['user'], $c['pass'], [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ]);
        $pdo->exec("SET time_zone = '+00:00'");
    }
    return $pdo;
}

function db_query(string $sql, array $params = []): PDOStatement
{
    $statement = db()->prepare($sql);
    $statement->execute($params);
    return $statement;
}

function db_all(string $sql, array $params = []): array
{
    return db_query($sql, $params)->fetchAll();
}

function db_one(string $sql, array $params = []): ?array
{
    $row = db_query($sql, $params)->fetch();
    return $row === false ? null : $row;
}

function db_value(string $sql, array $params = [])
{
    $value = db_query($sql, $params)->fetchColumn();
    return $value === false ? null : $value;
}

/** Les noms de table et de colonnes viennent toujours du code, jamais de la requête. */
function db_insert(string $table, array $data): int
{
    $columns = array_keys($data);
    $sql = sprintf(
        'INSERT INTO %s (%s) VALUES (%s)',
        $table,
        implode(', ', $columns),
        implode(', ', array_fill(0, count($columns), '?'))
    );
    db_query($sql, array_values($data));
    return (int) db()->lastInsertId();
}

function db_update(string $table, int $id, array $data): void
{
    if (!$data) {
        return;
    }
    $set = implode(', ', array_map(fn ($column) => "$column = ?", array_keys($data)));
    db_query("UPDATE $table SET $set WHERE id = ?", [...array_values($data), $id]);
}

/** Dates stockées en UTC, renvoyées au format ISO 8601 pour le navigateur. */
function iso_date(?string $value): ?string
{
    return $value ? str_replace(' ', 'T', $value) . 'Z' : null;
}

/** Réordonne une table selon l'ordre des identifiants reçus. */
function db_reorder(string $table, array $ids): void
{
    $pdo = db();
    $pdo->beginTransaction();
    $position = 0;
    foreach ($ids as $id) {
        db_query("UPDATE $table SET sort_order = ? WHERE id = ?", [$position++, (int) $id]);
    }
    $pdo->commit();
}
