
## Les limites du projet

- pas d'utilisateurs : tout le monde a accès à tout, sans authentification
- pas de "projets" ou de "tableau" => tout le monde accède au même kanban

## Entités

- Liste
- Carte
- Label


## Relations

- Liste <-> Carte : CONTENIR
- Carte <-> Label : PORTER


## Mocodo
```
Carte: titre, position, couleur
PORTER, 0N Carte, 0N Label
Label: nom, couleur

CONTIENT, 0N Liste, 11 Carte
Liste: nom, position
:
```


