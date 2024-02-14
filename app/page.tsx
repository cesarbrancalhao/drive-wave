import { Hero, CustomFilter, SearchBar, CarCard } from "@/components";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home() {

	const allCars = await fetchCars();

	const isDataEmpty = !Array.isArray(allCars) || allCars.length <1 || !allCars;

	return (
		<main className="overflow-hidden">
		<Hero />
		
		<div className="mt-12 padding-x padding-y max-width" id="discover">
			<div className="home__text-container">
				<h1 className="text-4xl font-extrabold">Our catalogue</h1>
				<p>
					Find your perfect match
				</p>
			</div>

			<div className="home__filters">
			<SearchBar />

				<div className="home__filter-container">
					<CustomFilter />
					{/* title="fuel" */}
					<CustomFilter />
					{/* title="year" */}
				</div>

			</div>

			{!isDataEmpty ? (
				<section>
					<div className="home__cars-wrapper">
						{allCars?.map((car) => (
						<CarCard car={car} />
						))}
					</div>
				</section>
			) : (
				<div className="home__error-container">
				<h2 className="home__cars-not-found">
					Oops, no results
					<p>{allCars?.message}</p>
				</h2>
				</div>
			)}
		</div>
		</main>
	);
}
