import React from "react";
import Image from "next/image";
import logo from "./logo.png";

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
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit <br /> amet consectetur
          adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur <br />adipiscing elit Ut et massa mi Lorem
          ipsum dolor sit amet consectetur adipiscing elit <br />Ut et massa mi..
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-4 md:mx-0">
        <div class="col-span-1">
    <Image src={logo} class="mx-auto" alt="Left-aligned image" />
    <div class="py-7">
      <div class="text-lg font-semibold text-gray-900">Company </div>
      <div class="text-lg font-normal text-gray-900">
        Creating technology to empower civilians to explore space on their own terms.<br></br>
        <a href="https://company.com">https://company.com</a>
      </div>
    </div>
  </div>
  <div class="col-span-1">
    <Image src={logo} class="mx-auto" alt="Center-aligned image" />
    <div class="py-7">
      <div class="text-lg font-semibold text-gray-900">Company </div>
      <div class="text-lg font-normal text-gray-900">
        Creating technology to empower civilians to explore space on their own terms.<br></br>
        <a href="https://company.com">https://company.com</a>
      </div>
    </div>
  </div>
  <div class="col-span-1">
    <Image src={logo} class="mx-auto" alt="Right-aligned image" />
    <div class="py-7">
      <div class="text-lg font-semibold text-gray-900">Company </div>
      <div class="text-lg font-normal text-gray-900">
        Creating technology to empower civilians to explore space on their own terms.<br></br>
        <a href="https://company.com">https://company.com</a>
      </div>
    </div>
  </div>
  <div class="col-span-1">
    <Image src={logo} class="mx-auto" alt="Left-aligned image" />
    <div class="py-7">
      <div class="text-lg font-semibold text-gray-900">Company </div>
      <div class="text-lg font-normal text-gray-900">
        Creating technology to empower civilians to explore space on their own terms.<br></br>
        <a href="https://company.com">https://company.com</a>
      </div>
    </div>
  </div>
  <div class="col-span-1">
    <Image src={logo} class="mx-auto" alt="Center-aligned image" />
    <div class="py-7">
      <div class="text-lg font-semibold text-gray-900">Company </div>
      <div class="text-lg font-normal text-gray-900">
        Creating technology to empower civilians to explore space on their own terms.<br></br>
        <a href="https://company.com">https://company.com</a>
      </div>
    </div>
  </div>
  <div class="col-span-1">
    <Image src={logo} class="mx-auto" alt="Right-aligned image" />
    <div class="py-7">
      <div class="text-lg font-semibold text-gray-900">Company </div>
      <div class="text-lg font-normal text-gray-900">
        Creating technology to empower civilians to explore space on their own terms.<br></br>
        <a href="https://company.com">https://company.com</a>
      </div>
    </div>
  </div>
</div>
    </>
  );
}
