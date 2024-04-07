import React from "react";
import Image from "next/image";
import Ens from "./Ensign.png";

export const metadata = {
  title: "Portfolio - Projects",
  description: "The projects page of my portfolio.",
};

export default function IntroProjects() {
  return (
    <>
      <section>
        <div className="text-6xl font-black text-gray-1200 text-left mx-4 md:mx-0">
          Things I’ve made trying to put <br /> my dent in the universe.
        </div>
        <div className="text-xlg text-gray-1200 text-left py-7 mx-4 md:mx-0">
        As a student, I acknowledge that my projects may not yet boast extensive complexity, but I hold each one in high regard. They represent my journey of learning and experimentation, serving as stepping stones toward greater proficiency and creativity. I approach each project with dedication and enthusiasm, eager to expand my skills and explore new avenues of innovation. With time, I am confident that my experiences will lead to more substantial and impactful endeavors..
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mx-4 md:mx-0 space-y-8 md:space-y-0">
          <div class="col-span-1">
            <Image src={Ens} class="w-32 h-32 mx-auto" alt="Left-aligned image" />
                    <div class="py-7">
                      <div class="text-lg font-semibold text-gray-900">Ensign College </div>
                      <div class="text-lg font-normal text-gray-900">
                      My Java project for a candy or dessert shop is designed to make ordering a breeze. Customers can easily browse our selection of treats, customize their orders with toppings and flavors, and see the total price including taxes and any discounts applied. It is all about ensuring a smooth and delightful experience for our customers, from selecting their favorite treats to completing their order hassle-free.<br></br>
                      <div class="w-64 overflow-hidden overflow-ellipsis">
                        <a href="https://company.com">https://github.com/angelicarood/CS115class/tree/main/DessertShop</a>
                      </div>
                      </div>
                    </div>
              </div>
    <div class="col-span-1">
    <Image src={Ens} class="w-32 h-32 mx-auto" alt="Center-aligned image" />
    <div class="py-7">
      <div class="text-lg font-semibold text-gray-900">Ensign College </div>
      <div class="text-lg font-normal text-gray-900">
      My Real Estate project is all about simplifying the property buying and selling process. It is a user-friendly platform where sellers can easily list their properties and buyers can find their dream homes or apartments. I have included features like cost calculation to help users understand the financial aspects, and interactive maps to provide context about property locations. It is designed to be intuitive and informative, making the real estate journey smoother for everyone involved.<br></br>
      <div class="w-64 overflow-hidden overflow-ellipsis">
        <a href="https://company.com">https://github.com/angelicarood/CS115class/tree/main/RealEstate</a>
      </div>
      </div>
    </div>
  </div>
      </div>
    </>
  );
}
