
'use client';
import React, { useEffect, useState } from "react";

type Product = {
  name: string;
  description: string;
  image: string;
  price: string;
  link: string;
};

const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6OULG4UMN6IXW1SV2qWq64NjQHc2jHhcIEvIv2R6Fl7MHPOK8ucy85xGam1K0eZ9P5gsM7cElpQYG/pub?output=csv";

export default function Brosn76() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(SHEET_CSV_URL)
      .then((res) => res.text())
      .then((csv) => {
        const lines = csv.split('\n').filter(Boolean);
        const headers = lines[0].split(',');
        const rows = lines.slice(1).map((line) => {
          const values = line.split(',');
          const product: Product = {
            name: values[0],
            description: values[1],
            image: values[2],
            price: values[3],
            link: values[4],
          };
          return product;
        });
        setProducts(rows);
      });
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Brosn76 Shop Tech Now</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{product.description}</p>
              <p className="text-lg font-bold mb-4">{product.price}</p>
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700"
              >
                Buy Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
