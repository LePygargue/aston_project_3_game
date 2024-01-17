CREATE DATABASE projet_3;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    user_username VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_first_name VARCHAR(255) NOT NULL,
    user_last_name VARCHAR(255) NOT NULL,
    user_is_admin BOOLEAN NOT NULL DEFAULT false,
    user_is_active BOOLEAN NOT NULL DEFAULT true
);

CREATE TABLE locations (
    location_id SERIAL PRIMARY KEY,
    location_name VARCHAR(255) NOT NULL
);

CREATE TABLE characters (
    character_id SERIAL PRIMARY KEY,
    character_name VARCHAR(255) NOT NULL,
    character_level INTEGER NOT NULL DEFAULT 1,
    character_hp INTEGER NOT NULL DEFAULT 100,
    character_sanity INTEGER NOT NULL DEFAULT 100,
    character_coin INTEGER NOT NULL DEFAULT 20,
    location_id INTEGER REFERENCES locations(location_id) ON DELETE SET NULL,
    inventory_id INTEGER REFERENCES inventory(inventory_id) ON DELETE SET NULL,
    user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE stats (
    stat_id SERIAL PRIMARY KEY,
    stat_name VARCHAR(255) NOT NULL,
    stat_value INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE character_stats (
    character_stat_id SERIAL PRIMARY KEY,
    character_id INTEGER REFERENCES characters(character_id) ON DELETE CASCADE,
    stat_id INTEGER REFERENCES stats(stat_id) ON DELETE CASCADE
);

CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(255) NOT NULL,
    item_description VARCHAR(255) NOT NULL,
    item_stat_effect VARCHAR(255),
    item_stat_modifier INTEGER,
    item_image_url VARCHAR(255)
);

CREATE TABLE inventory (
    inventory_id SERIAL PRIMARY KEY,
);

CREATE TABLE inventory_items (
    inventory_item_id SERIAL PRIMARY KEY,
    inventory_id INTEGER REFERENCES inventory(inventory_id) ON DELETE CASCADE,
    item_id INTEGER REFERENCES items(item_id) ON DELETE CASCADE
);

CREATE TABLE locations (
    location_id SERIAL PRIMARY KEY,
    location_name VARCHAR(255) NOT NULL
);

CREATE TABLE events (
    event_id SERIAL PRIMARY KEY,
    event_name VARCHAR(255) NOT NULL,
    event_json JSONB NOT NULL
    -- Ajoutez d'autres colonnes nécessaires pour décrire l'événement
);

CREATE TABLE pnj (
    pnj_id SERIAL PRIMARY KEY,
    -- Ajoutez d'autres colonnes pour décrire le PNJ si nécessaire
);

CREATE TABLE dialogues (
    dialogue_id SERIAL PRIMARY KEY,
    pnj_id INTEGER REFERENCES pnj(pnj_id) ON DELETE CASCADE,
    dialogue_data JSONB NOT NULL
);
