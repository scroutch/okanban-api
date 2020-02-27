## Entité Liste

|Champ|Type|Spécificités|
|-|-|-|
|id|INTEGER|PRIMARY KEY, NOT NULL|
|nom|TEXT|NOT NULL|UNIQUE
|position|INTEGER|NOT NULL|DEFAULT 0
|created_at|TIMESTAMP|NOT NULL DEFAULT CURRENT_TIMESTAMP|
|updated_at|TIMESTAMP|NULL|

## Entité Carte

|Champ|Type|Spécificités|
|-|-|-|
|id|INTEGER|PRIMARY KEY, NOT NULL|
|titre|TEXT|NOT NULL|
|position|INTEGER|NOT NULL DEFAULT 0|
|couleur|TEXT|NOT NULL #fff|
|created_at|TIMESTAMP|NOT NULL DEFAULT CURRENT_TIMESTAMP|
|updated_at|TIMESTAMP|NULL|
|liste_id|INTEGER|NOT NULL|

## Entité Label

|Champ|Type|Spécificités|
|-|-|-|
|id|INTEGER|PRIMARY KEY, NOT NULL|
|nom|TEXT|NOT NULL|
|created_at|TIMESTAMP|NOT NULL DEFAULT CURRENT_TIMESTAMP|
|updated_at|TIMESTAMP|NULL|

## Entité carte_has_label

|Champ|Type|Spécificités|
|-|-|-|
|fk_liste_id|INTEGER|FOREIGN KEY, NOT NULL|
|fk_label_id|INTEGER|FOREIGN KEY, NOT NULL|
|created_at|TIMESTAMP|NOT NULL DEFAULT CURRENT_TIMESTAMP|