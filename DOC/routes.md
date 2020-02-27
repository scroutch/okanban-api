# Routes

Définitions des routes en respectant l'architecture REST

(rappelez vous de CRUD : Create Read Update Delete)

| But | url | méthode HTTP |
|---|---|---|
|récupérer toutes les listes | /list | GET |
|récupérer une seule liste | /list/:id | GET |
|créer une liste | /list | POST |
|modifier une liste | /list/:id | PATCH |
|supprimer une liste | /list/:id | DELETE |
|récupérer toutes les cartes | /card | GET |
|récupérer une seule carte | /card/:id | GET |
|créer une carte | /card | POST |
|modifier une carte | /card/:id | PATCH |
|supprimer une carte | /card/:id | DELETE |
|récupérer toutes les labels | /label | GET |
|récupérer un seul label | /label/:id | GET |
|créer un label | /label | POST |
|modifier un label | /label/:id | PATCH |
|supprimer un label | /label/:id | DELETE |
|associer un label à une carte | /card/:id/label | POST (le body contiendra "label_id") |
|dissocier un label d'une carte | /card/:card_id/label/:label_id | DELETE |


