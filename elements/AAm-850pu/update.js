function(instance, properties, context) {
	fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${properties.time}/v1/currencies/${properties.currency}.json`)
		.then(res => res.json())
		.then(response => {
			console.log(response)

			const stateObject = {
				_p_date: response.date,
			};

			const rates = response[properties.currency];
			const ratesKeys = Object.keys(rates);

			for (let i = 0; i < ratesKeys.length; i += 1) {
				const key = ratesKeys[i];
				stateObject["_p_" + key] = rates[key];
			}

			console.log(stateObject);

			instance.publishState("response", stateObject);
			instance.publishState("error", "");
		})
		.catch((error) => {
			instance.publishState("error", "currency was not found");
		});


}

