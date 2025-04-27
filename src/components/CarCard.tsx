
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface CarCardProps {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  imageUrl: string;
  whatsappNumber: string;
}

const CarCard = ({ make, model, year, price, mileage, imageUrl, whatsappNumber }: CarCardProps) => {
  const handleWhatsAppClick = () => {
    const message = `Hello, I'm interested in your ${year} ${make} ${model} listed on Sleys Auto Bazaar.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={imageUrl}
          alt={`${year} ${make} ${model}`}
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">{`${year} ${make} ${model}`}</h3>
        <div className="text-lg font-bold text-primary mb-2">
          KES {price.toLocaleString()}
        </div>
        <div className="text-sm text-gray-600">
          Mileage: {mileage.toLocaleString()} km
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleWhatsAppClick}
          className="w-full bg-green-600 hover:bg-green-700"
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          Contact via WhatsApp
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
