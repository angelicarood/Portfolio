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
    <div className="min-h-screen flex justify-center items-center  dark:bg-black dark:text-white">
      <div className="max-w-screen-lg py-8 md:py-12">
        <Header/>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <Int_about/>
          </div>
          <div className="w-full md:w-1/2">
            <Right_col/>
          </div>
        </div>
        <Footer/>
        <ThemeSwitcher/>
      </div>
    </div>
  );
}
