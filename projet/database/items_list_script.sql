
DELETE FROM item;

-- Ajouter des éléments à la table ITEM
INSERT INTO item (item_id, item_name, item_description, stat_effect, stat_modifier)
VALUES
    ('Épée en fer', 'Une puissante épée en fer', 'Arme', 50),
    ('Potion de soin', 'Une potion qui restaure la santé', 'Potion', 20);

-- Commitez les changements
COMMIT;
