# Certifieringsuppgift Del 2: Feedback (WebApp)

Lösningsförslag på del 2, en WebApp som kan spara feedback på den/de sidor den placeras på samt även en lista med feedback poster för administratörer.
Ny feedback visas med en röd border till vänster om posten. Kräver att Feedback Backend (RESTApp) är uppstatt och konfigurerad rätt för att kunna posta och lista poster.

## Building

- `npm run create-addon` creates an addon with the name configured in the setup task
- `npm run build` compresses `/src` into `/dist`. If you use babel to transpile your code, this target will compress a transpiled version of your `/src`
- `npm run build deploy` runs the build step and deploys to the addon configured in the setup task
- `npm run build force-deploy` runs the build step and deploys with the possibility to overwrite an existing WebApp
- `npm run dev` watches files for changes and runs `build force-deploy` on save
- `npm run sign` invokes the signing endpoint of the Sitevision developer REST API. A signed version of the WebApp will be created in the `/dist` folder
- `npm run deploy-prod` deploys the signed WebApp to a production environment
- `npm run setup-dev-properties` creates .dev-properties.json with information about the development environment

[Visit developer.sitevision.se for more information](https://developer.sitevision.se)
