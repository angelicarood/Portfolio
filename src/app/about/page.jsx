import "tailwindcss/tailwind.css";
import React from "react";
import Header from '../../components/Header';
import Int_about from "./about_intro/int_about";
import Right_col from "./right_side/right_col";
import Footer from '../../components/Footer';
import ThemeSwitcher from '../../components/ThemeSwitcher';

export const metadata = {
  title: 'Portfolio - About',
  description: 'The about page of my portfolio.',
}

export default function About() {
  return (
    <div className="min-h-screen flex justify-center items-center dark:bg-black dark:text-white">
      <div className="max-w-screen-lg py-8 md:py-12">
        <Header/>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-start">
          <div className="col-span-2 md:col-span-2 flex justify-center">
            <Int_about/>
          </div>
          <div className="col-span-1 md:col-span-1">
            <Right_col/>
          </div>
        </div>
        <Footer/>
        <ThemeSwitcher/>
      </div>
    </div>
  );
}
