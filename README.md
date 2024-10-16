# Certifieringsuppgift Del 2: Feedback (WebApp)

Lösningsförslag på del 2, en WebApp som kan spara feedback på den/de sidor den placeras på samt även visa en lista med feedback poster för administratörer.
Ny feedback visas med en röd border till vänster om posten. Kräver att Feedback Backend (RESTApp) är uppstatt och konfigurerad rätt för att kunna posta och lista poster.

At the time of writing this README this WebApp can be tested at [edu-dev10.sitevision-cloud.se](https://edu-dev10.sitevision-cloud.se)

## Installation and running

- `npm install` installs required packages and dependencies
- `npm run setup-dev-properties` creates .dev-properties.json
- `npm run create-addon` creates an addon with the name configured in the setup task
- `npm run dev` watches files for changes and runs `build force-deploy` on save

## WebApp setup on a sitevision site 

The app can be attached to any page but ideally it should be added to a template that is used on each page.
