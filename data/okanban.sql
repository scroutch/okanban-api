-- -----------------------------------------------------
-- Schema okanban
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table "listes"
-- -----------------------------------------------------

DROP TABLE IF EXISTS "listes";

CREATE TABLE IF NOT EXISTS "listes" (
  "id" SERIAL NOT NULL,
  "nom" TEXT NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NULL,
  PRIMARY KEY ("id"));

-- -----------------------------------------------------
-- Table "cartes"
-- -----------------------------------------------------

DROP TABLE IF EXISTS "cartes";

CREATE TABLE IF NOT EXISTS "cartes" (
  "id" SERIAL NOT NULL,
  "titre" TEXT NOT NULL,
  "position" INT NOT NULL DEFAULT 0,
  "couleur" TEXT,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NULL,
  "liste_id" INT NOT NULL,
  PRIMARY KEY ("id"));

-- -----------------------------------------------------
-- Table "labels"
-- -----------------------------------------------------

DROP TABLE IF EXISTS "labels";

CREATE TABLE IF NOT EXISTS "labels" (
  "id" SERIAL NOT NULL,
  "nom" TEXT NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NULL,
  PRIMARY KEY ("id"));

-- -----------------------------------------------------
-- Table "cartes_has_labels"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "cartes_has_labels" ;

CREATE TABLE IF NOT EXISTS "cartes_has_labels" (
  "liste_id" INT NOT NULL,
  "label_id_id" INT NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY ("liste_id", "label_id"));



BEGIN;

--
-- Déchargement des données de la table "Listes"
--

INSERT INTO "listes" ("id", "nom", "created_at", "updated_at") VALUES
(1, 'node', '2018-10-04 12:15:33', NULL),
(2, 'javascript', '2018-10-04 12:15:33', NULL);

--
-- Déchargement des données de la table "Cartes"
--

INSERT INTO "cartes" ("id", "titre", "position", "couleur", "created_at", "updated_at", "liste_id") VALUES
(1, 'Faire les models', 1, NULL, '2018-10-04 12:15:33', NULL, 1),
(2, 'Finir le controller', 2, NULL, '2018-10-04 12:15:33', NULL, 1),
(3, 'Faire un slider sur la homepage', 3, NULL, '2018-10-04 12:15:33', NULL, 2);

--
-- Déchargement des données de la table "Labels"
--

INSERT INTO "labels" ("id", "nom", "created_at", "updated_at") VALUES
(1, 'frontend', '2018-10-04 12:15:33', NULL),
(2, 'backend', '2018-10-04 12:15:33', NULL),
(2, 'urgent', '2018-10-04 12:15:33', NULL);

--
-- Déchargement des données de la table "carte_has_label"
--

INSERT INTO "cartes_has_labels" ("liste_id", "label_id", "created_at") VALUES
(1, 2, '2018-10-04 12:15:33'),
(2, 1 , '2018-10-04 12:15:33');

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

/* PostGres DOES NOT INCREMENT when inserting with explicit id values ! */