# Certifieringsuppgift Del 2: Feedback (WebApp)

Lösningsförslag på del 2, en WebApp som kan spara feedback på den/de sidor den placeras på samt även visa en lista med feedback poster för administratörer.
Ny feedback visas med en röd border till vänster om posten. Kräver att Feedback Backend (RESTApp) är uppstatt och konfigurerad rätt för att kunna posta och lista poster.

Vid tidpunkten denna README skrevs kan denna WebApp testas på [edu-dev10.sitevision-cloud.se](https://edu-dev10.sitevision-cloud.se)

## Installation and running

- `npm install` installs required packages and dependencies
- `npm run setup-dev-properties` creates .dev-properties.json
- `npm run create-addon` creates an addon with the name configured in the setup task
- `npm run dev` watches files for changes and runs `build force-deploy` on save

## WebApp setup on a sitevision site

Appen kan bifogas till vilken sida som helst men bör helst läggas till i en mall som används på varje sida.
