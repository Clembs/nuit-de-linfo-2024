# Nuit de l'info 2024 - SAE Fromage

Manuel pour les développeurs

## Installation du projet

Le projet est un projet SvelteKit qui utilise Node.js et Bun. Pour l'installer, il suffit de :

- Installer [Node.js](https://nodejs.org/)
- Installer [Bun](https://bun.sh) pour la gestion des dépendences
- Cloner le projet avec `git clone https://github.com/Clembs/nuit-de-linfo-2024`
- Installer les dépendences avec `bun install`
- Lancer le serveur web avec `bun dev`

## Structure du projet

- `src/routes/` : Les pages du site
- `src/lib/` : Les fonctions utilitaires (référencer avec `$lib/`)
- `src/components/` : Les composants réutilisables (référencer avec `$components/`)

## Conventions de nommage

- Branches : `kebab-case` (ex: `creer-un-composant`)
- Commits : `feat/fix/refactor: un message` (ex: `feat: Ajout d'un composant`, `fix: Correction d'un bug`)
- Variables et fonctions : `camelCase` (ex: `const maConstante`, `let maVariable`, `function maFonction()`)
- Nom de fichiers Svelte : `PascalCase` (ex: `MonComposant.svelte`)
- Nom de fichiers TypeScript : `kebab-case` (ex: `mon-fichier.ts`)
- Classes et IDs CSS : `kebab-case` (ex: `.ma-classe-css`)
