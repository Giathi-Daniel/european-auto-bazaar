
import React, { useState } from 'react';
import CarCard from '@/components/CarCard';
import SearchFilters from '@/components/SearchFilters';

// Sample data - in a real app, this would come from an API
const SAMPLE_CARS = [
  {
    id: "1",
    make: "BMW",
    model: "X5",
    year: 2020,
    price: 4500000,
    mileage: 45000,
    imageUrl: "https://hips.hearstapps.com/hmg-prod/images/2020-bmw-x5-mmp-1-1579125510.jpg?crop=0.940xw:0.945xh;0.0603xw,0.0552xh&resize=1200",
    whatsappNumber: "254700000000"
  },
  {
    id: "2",
    make: "Mercedes-Benz",
    model: "C200",
    year: 2019,
    price: 3800000,
    mileage: 52000,
    imageUrl: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1200:675:1/driveau/upload/cms/uploads/rsTx4FhcSIQVYOcS6qwf",
    whatsappNumber: "254700000000"
  },
  {
    id: "3",
    make: "Audi",
    model: "Q7",
    year: 2021,
    price: 6200000,
    mileage: 28000,
    imageUrl: "https://hips.hearstapps.com/hmg-prod/images/2021-audi-q7-mmp-1-1591218923.jpg?crop=0.798xw:0.673xh;0.0417xw,0.327xh&resize=1200",
    whatsappNumber: "254700000000"
  }
];

const Index = () => {
  const [filteredCars, setFilteredCars] = useState(SAMPLE_CARS);

  const handleMakeChange = (make: string) => {
    setFilteredCars(
      SAMPLE_CARS.filter(car => car.make.toLowerCase() === make.toLowerCase())
    );
  };

  const handlePriceRangeChange = (range: string) => {
    const [min, max] = range.split('-').map(Number);
    setFilteredCars(
      SAMPLE_CARS.filter(car => {
        if (range === '5000000+') return car.price >= 5000000;
        return car.price >= min && car.price <= max;
      })
    );
  };

  const handleYearChange = (yearRange: string) => {
    if (yearRange === '2020+') {
      setFilteredCars(SAMPLE_CARS.filter(car => car.year >= 2020));
    } else {
      const [min, max] = yearRange.split('-').map(Number);
      setFilteredCars(SAMPLE_CARS.filter(car => car.year >= min && car.year <= max));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">Sleys Auto Bazaar</h1>
          <p className="mt-2 text-gray-600">Premium European & Japanese Cars</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4">
        <SearchFilters
          onMakeChange={handleMakeChange}
          onPriceRangeChange={handlePriceRangeChange}
          onYearChange={handleYearChange}
        />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map((car) => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
