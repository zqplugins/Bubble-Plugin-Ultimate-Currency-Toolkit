async function(properties, context) {
	const first_currency = properties.first_currency.trim();
	const second_currency = properties.second_currency.trim();
	const time = properties.time.trim();

	const request = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${time}/v1/currencies/${first_currency}.json`;
	const response = await fetch(request);

	let body;
	try {
		body = await response.json();
	} catch (e) {
		return { error: e.toString() + " | " + request };
	}

	const rate = body[first_currency][second_currency];

	return { currency_value: rate };
}
