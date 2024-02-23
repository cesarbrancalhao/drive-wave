import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
	
	const { manufacturer, year, model, limit, fuel } = filters;

	const headers = {
		'X-RapidAPI-Key': process.env.RAPID_API_KEY || '', // Replace with your RapidAPI key, I deactivated the old one
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

	const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?
																				make=${manufacturer}
																				&year=${year}
																				&model=${model}
																				&limit=${limit}
																				&fuel_type=${fuel}`,
									{ headers: headers, });

	const result = await response.json();
	return result;
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
	const url = new URL('https://cdn.imagin.studio/getimage');

	const { make, year, model } = car;

	url.searchParams.append('customer', 'hrjavascript-mastery');
	url.searchParams.append('make', make);
	url.searchParams.append('modelFamily', model.split(' ')[0]);
	url.searchParams.append('zoomType', 'fullscreen');
	url.searchParams.append('modelYear', `${year}`);
	url.searchParams.append('angle', `${angle}`);

	return `${url}`;
}


export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value);

	if (window.location.search !== searchParams.toString() && type !== 'limit')
		searchParams.set('limit', '8');

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
    
    return newPathName;
};