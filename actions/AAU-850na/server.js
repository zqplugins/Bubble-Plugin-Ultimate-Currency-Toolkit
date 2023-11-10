async function(properties, context) {
    const first_currency = properties.first_currency.trim();
    const second_currency = properties.second_currency.trim();
    const time = properties.time.trim();
    
    const request = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${time}/currencies/${first_currency}/${second_currency}.min.json`;
	const response = await fetch(request);
    
	let body
    try {
    	body = await response.json();
    } catch (e) {
     return  { error: e.toString() + " | " + request}
    }
    
    const currencyKey = Object.keys(body)[1];
	
    return { currency_value: body[currencyKey]}

}