@echo off

REM Ouvre une nouvelle console et navigue vers le dossier "rpg-manager"
start cmd /k "cd rpg-manager && npm start"

REM Attend une seconde avant d'ouvrir la deuxième console
timeout /t 1

REM Ouvre une deuxième console et navigue vers le dossier "rpg-manager-bdd"
start cmd /k "cd rpg-manager-bdd && npm run develop"
