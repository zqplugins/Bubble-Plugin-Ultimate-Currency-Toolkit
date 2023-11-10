async function(properties, context) { 
    const request = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.min.json`;
	const response = await fetch(request);
    
	let body
    try {
    	body = await response.json();
    } catch (e) {
     return  { error: e.toString() + " | " + request}
    }
    
    const currencyCodeList = Object.keys(body);
    const currencyNameList = Object.values(body);
	
    return { currency_code: currencyCodeList, currency_name: currencyNameList}

}