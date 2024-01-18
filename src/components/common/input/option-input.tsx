import React from "react";

export default function Option() {
  return (
    <div className="flex flex-row gap-2 items-center">
      <p className="text-link font-link text-black">Sort By</p>
      <select className="cursor-pointer">
        <option defaultValue={"true"}>Best Seller</option>
        <option>New Arrivals</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
        <option>Top Rated</option>
        <option>Most Viewed</option>
      </select>
    </div>
  );
}
