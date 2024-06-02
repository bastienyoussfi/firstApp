function _layout(content) {
    return (<body>
        { content }
    </body>);
}

export function showCountry(country) {
    return _layout(
    <h2>
        { country.name } { country.continent }
    </h2>
    );
}

export function listCountries(countries) {
    return _layout(
    <ul>
        { countries.map((country) => (
            <li key={country.id}>
                { country.name } { country.continent }
            </li>
        ))}
    </ul>
    );
}

export default listCountries;