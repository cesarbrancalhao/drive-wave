export async function fetchCars() {
	const headers = {
		'X-RapidAPI-Key': '8059afd549msh33c8ab101ef9139p181870jsnd9ccb6ae2203',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

	const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', { headers: headers, });

	const result = await response.json();
	return result;
}