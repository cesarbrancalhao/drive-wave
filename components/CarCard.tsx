"use client";

import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import { calculateCarPrice, calculateCarRent } from "@/constants";

interface CarCardProps {
    car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {

    const { city_mpg, year, make, model, transmission, drive, combination_mpg, displacement, cylinders } = car;

    const carPrice = calculateCarPrice(city_mpg, year, combination_mpg, displacement, transmission, cylinders);
    const carRent = calculateCarRent(city_mpg, year, transmission);

  return (
    <div className="car-card group">
        <div className="car-card__content">
            <h2 className="car-card__content-title">
                {make} {model}
            </h2>
        </div>

        <p className="flex mt-4 text-[32px] font-extrabold">
            <span className="self-start text-[14px] font-semibold">
                $
            </span>
            {carPrice}
        </p>

        <div className="relative w-full h-40 my-3 object-contain">
            <Image src="/hero.png" alt="Car model" fill priority />
        </div>

        <p className="self-start text-[13px] font-medium">
                or $ {carRent} / day
            </p>
    </div>
  )
}

export default CarCard