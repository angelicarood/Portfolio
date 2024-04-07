import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import UsesTable from './UsesTable';
import ThemeSwitcher from '../../components/ThemeSwitcher'; // Import the ThemeSwitcher component

const Uses = () => {
  return (
    <div className="dark:bg-black dark:text-white min-h-screen flex flex-col md:flex-row items-center justify-center">
      <div className="max-w-screen-lg py-8 md:py-12">
        <Header title="My Uses" />
        <main className="max-w-screen-lg py-8 md:py-12 px-4 md:px-0 mx-auto">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl md:text-4xl text-center my-4">Software I use, gadgets I love, and other things I recommend.</h1>
            <p className="text-base md:text-lg text-left">
            In the realm of software engineering, tools are not just aids – they are essential companions that enhance both productivity and enjoyment. From code editors to collaboration platforms, these tools streamline our workflow and empower us to tackle challenges with confidence. Join me as we explore the software engineering tools that make work not just easier, but also more enjoyable.
            </p>
            <div className="overflow-x-auto">
              <UsesTable className="w-full" />
            </div>
          </div>
        </main>
        <Footer />
        <ThemeSwitcher /> {/* Include the ThemeSwitcher component */}
      </div>
    </div>
  );
};

export default Uses;
