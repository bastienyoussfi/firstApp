function _layout(content) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Countries</title>
        <link rel="stylesheet" href="/assets/css/style.css" />
    </head>
    <body>
        ${ content }
    </body>
    </html>`;
}

export function showCountry(country) {
    return this._layout(`
    <h2>
        ${country.continent} ${country.name}
    </h2>
    `);
}