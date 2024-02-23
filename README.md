# Drive Wave

This is a car showcase app built in [Next.js](https://nextjs.org/).

### Check it live [here](https://drive-wave.vercel.app/)!

![Alt text](img/catalogue.png?raw=true)

## Table of Contents

1. [Getting Started](#start)
2. [Tech Stacks](#stacks)
3. [Features](#features)
4. [Components](#components)

### <a name="start">Getting Started</a>

Go to the .env file and insert your [RapidAPI](https://rapidapi.com/) key.

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### <a name="stacks">Stacks</a>

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [HeadlessUI](https://headlessui.com/react/)
- [RapidAPI](https://rapidapi.com/)
- [ImaginAPI](https://www.imagin.studio/solutions/api)

### <a name="features">Features</a>

- **Searching and Filtering**: Search and filter system based on the cars and API information.

- **Server-Side Rendering**: Next.js allows react to transition from client-side rendering to server-side rendering, providing better performance and browsing experience.

- **Pagination**: Easy navigation through a large dataset of cars, allowing users to explore multiple pages.

- **Metadata Optimization and SEO**: Optimize metadata for car listing, enhancing search engine optimization (SEO) and ensuring better visibility on search engine results pages.

- **TypeScript Types**: TypeScript provide robust typing for enhanced code quality and type safety.

- **Mobile Responsible Design**: The website is designed to be visually pleasing and responsive, ensuring an optimal user experience across various devices.

### <a name="components">Components</a>

<details>
<summary><code>CarCard.tsx</code></summary>
    Receives the car objects from <a src="app/page.tsx">page</a> and shows the basic information about it in a card with the buy/rental price from <a src="constants/index.ts">constants</a> and an image of the car on the catalogue fetched from <b>ImaginAPI</b>.
</details>
<br />
<details>
<summary><code>CarDetails.tsx</code></summary>
    Button that's called on the <b>CustomButton</b> on <b>CarCard</b> with the car object, opens a modal with images from <b>ImaginAPI</b> and all the selected information about the car.
</details>
<br />
<details>
<summary><code>CustomButton.tsx</code></summary>
    Reusable button component which receives a title, styles and a <b>handleClick</b> function.
</details>
<br />
<details>
<summary><code>CustomFilter.tsx</code></summary>
    Filter that receives a title and an array of <b>Options</b> (which have a title and value) from <a src="constants/index.ts">constants</a> and update the search parameters using an <b>onChange</b> event.
</details>
<br />
<details>
<summary><code>SearchBar.tsx</code></summary>
    Search div that receives and update search parameters using a <b>formEvent</b> passed to <b>handleSearch</b>
</details>
<br />
<details>
<summary><code>SearchManufacturer.tsx</code></summary>
    Search input bar with SEO in the <b>searchBar</b> form that fetches and maps data from <a src="constants/index.ts">constants</a>, and filters the inputs before submitting.
</details>
<br />
<details>
<summary><code>ShowMore.tsx</code></summary>
    <b>CustomButton</b> that's responsible for pagination, it gets the current page and isNext from <a src="app/page.tsx">page</a> and updates 'limit' search parameter, which corresponds to the number of cars showed in total.
</details>
<br />
