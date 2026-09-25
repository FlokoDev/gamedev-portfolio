# Portfolio de Florian Kotecki

## Contexte

- Ce dépôt contient les sources du portfolio de développeur de jeux de Florian.
- L'application utilise Vue 2, Vue CLI 4 et TypeScript.
- `npm run serve` lance le serveur de développement.
- `npm run lint` vérifie le code.
- `npm run build` génère le site statique dans `dist/`.
- Le dépôt GitHub Pages local publié est `D:\Unity\FlokoDev.github.io`.

## Build et publication

- Ne lance jamais un build ou une copie vers le dépôt GitHub Pages simplement parce que des fichiers ont été modifiés.
- Le build et la synchronisation sont une action distincte, exécutée uniquement lorsque l'utilisateur invoque explicitement `$portfolio-build-publish`.
- Sur cette machine, l'ancien Webpack 4 nécessite `NODE_OPTIONS=--openssl-legacy-provider` avec Node 22.
- La synchronisation remplace les artefacts présents à la racine du dépôt GitHub Pages, mais doit toujours préserver son dossier `.git`.
- Après la synchronisation, montre les changements du dépôt cible avec `git status`.
- Ne crée jamais de commit et ne pousse jamais vers GitHub sans une demande explicite séparée de l'utilisateur.

## Vérification des changements ordinaires

- Pour une modification de code ordinaire, utilise les vérifications ciblées utiles à la tâche.
- N'utilise pas le workflow de publication comme vérification implicite.
