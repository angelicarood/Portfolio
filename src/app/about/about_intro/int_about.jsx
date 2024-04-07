import React from 'react';

export const metadata = {
  title: 'Portfolio - About',
  description: 'The about page of my portfolio.',
}
export default function IntroAbout() {
  return (
    <div className="flex flex-col justify-start items-start space-y-6 w-1/2 max-w-1380 h-1412 px-6 py-6 md:px-0 md:py-0">

      <div className="hidden w-full h-112 bg-white bg-opacity-90 rounded-full"></div>

      <h1 className="w-full h-30 text-4xl tracking-tight font-bold text-gray-800">
        I&apos;m jane. I live in New York city, where I develop the future.
      </h1>

      <p className="w-full h-42 text-base text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet
        consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing
        elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..
      </p>

      <p className="w-full h-42 text-base text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor
        sit amet consectetur adipiscing elit Ut et massa mi
        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet
        consectetur adipiscing elit Ut et massa mi..
      </p>

      <p className="w-full h-42 text-base text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur
        adipiscing elit Ut et massa mi Lorem ipsum dolor sit
        amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor
        sit amet consectetur adipiscing elit Ut et massa mi..
      </p>

      <p className="w-full h-42 text-base text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et mas
        sa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut
        et massa mi..
      </p>
    </div>
  );
}
