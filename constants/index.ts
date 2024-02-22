export const writeValueNames = (key: string, value: any) => {
    let reName = (value: string) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();

    if (key === "model" || key === "make" || key === "class" || key === "fuel_type")
        return reName(value);

    if (key === "drive")
        return value.toUpperCase();

    if (key === "transmission")
        return value === "a" ? "Automatic" : "Manual";

    return value;
}


export const calculateCarRent = (combination_mpg: number, year: number, transmission: string) => {
	const basePricePerDay = 50;
	const mileageFactor = 0.5;
	const ageFactor = 0.05;
	const transmissionRate = transmission === 'a' ? 10 : 0;

	const mileageRate = combination_mpg * mileageFactor;
	const ageRate = (new Date().getFullYear() - year) * ageFactor;

	const rentalRatePerDay = basePricePerDay * 0.5 + mileageRate + transmissionRate - ageRate;

	return rentalRatePerDay.toFixed(0);
};

export const calculateCarPrice = (city_mpg: number, year: number, combination_mpg: number, displacement: number, transmission: string, cylinders: number) => {
	const loanInterestRate =  1.99;

	const displacementRate = (displacement || 0) / 10;

	const ageFactor = 0.05;
	const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
	const mileageFactor = 0.1;
	const mileageRate = city_mpg * mileageFactor;

	const combinationRate = combination_mpg / 100;
	

	const transmissionRate = transmission === 'a' ? 0.3 : 0;

	const cylindersRate = (cylinders || 0) / 10;

	const carTotalPrice = (2750) * (ageRate + 
									mileageRate +
									loanInterestRate +
									combinationRate +
									displacementRate + 
									transmissionRate +
									cylindersRate);

  return carTotalPrice.toFixed(0);
}

export const manufacturers = [
    "Acura",
    "Alfa Romeo",
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",
    "Buick",
    "Cadillac",
    "Chevrolet",
    "Chrysler",
    "Citroen",
    "Dodge",
    "Ferrari",
    "Fiat",
    "Ford",
    "GMC",
    "Honda",
    "Hyundai",
    "Infiniti",
    "Jaguar",
    "Jeep",
    "Kia",
    "Lamborghini",
    "Land Rover",
    "Lexus",
    "Lincoln",
    "Maserati",
    "Mazda",
    "McLaren",
    "Mercedes-Benz",
    "MINI",
    "Mitsubishi",
    "Nissan",
    "Porsche",
    "Ram",
    "Rolls-Royce",
    "Subaru",
    "Tesla",
    "Toyota",
    "Volkswagen",
    "Volvo",
];

export const yearsOfProduction = [
    { title: "Year", value: "" },
    { title: "2015", value: "2015" },
    { title: "2016", value: "2016" },
    { title: "2017", value: "2017" },
    { title: "2018", value: "2018" },
    { title: "2019", value: "2019" },
    { title: "2020", value: "2020" },
    { title: "2021", value: "2021" },
    { title: "2022", value: "2022" },
    { title: "2023", value: "2023" },
];
  
export const fuels = [
    {
      title: "Fuel",
      value: "",
    },
    {
      title: "Gas",
      value: "Gas",
    },
    {
      title: "Electricity",
      value: "Electricity",
    },
];
  
export const footerLinks = [
    {
		title: "About",
		links: [
			{ title: "How it works", url: "/" },
			{ title: "Featured", url: "/" },
			{ title: "Partnership", url: "/" },
			{ title: "Bussiness Relation", url: "/" },
		],
    },
    {
		title: "Company",
		links: [
			{ title: "Events", url: "/" },
			{ title: "Blog", url: "/" },
			{ title: "Podcast", url: "/" },
			{ title: "Invite a friend", url: "/" },
		],
    },
    {
		title: "Socials",
		links: [
			{ title: "Discord", url: "/" },
			{ title: "Instagram", url: "/" },
			{ title: "Twitter", url: "/" },
			{ title: "Facebook", url: "/" },
		],
    },
];