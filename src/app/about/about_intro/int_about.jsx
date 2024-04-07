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
        I&apos;m Angelica. I live in Utah, where I pursuing my baachelors in software engineering.
      </h1>

      <p className="w-full h-42 text-base text-gray-600">
      As a current student pursuing a Bachelor&apos;s degree in Computer Software Engineering at Ensign College in American Fork, Utah,
      I am deeply passionate about leveraging technology to solve complex problems and create innovative solutions. With a strong foundation
      in programming languages such as Java, C#, Python, JavaScript, React, HTML, and CSS, I am well-equipped to tackle challenges in software
      development and web design. My academic journey at Ensign College is a testament to my dedication to mastering the skills necessary for a
      successful career in the tech industry.
      </p>

      <p className="w-full h-42 text-base text-gray-600">
      In addition to my academic pursuits, I bring valuable experience as an ESL teacher, demonstrating my commitment to communication,
      education, and cultural exchange. During my tenure at CoreEnglish and Active English, I developed and implemented dynamic lesson plans
      tailored to students at various proficiency levels, fostering an engaging learning environment and promoting language fluency.
      My time as a Full-Time Volunteer Representative for The Church of Jesus Christ of Latter-day Saints in Taichung City, Taiwan, further
      honed my interpersonal skills and fluency in Mandarin, as I engaged with diverse communities and delivered impactful presentations to large audiences.
      </p>

      <p className="w-full h-42 text-base text-gray-600">
      Outside of my professional endeavors, I am a multifaceted individual with a keen interest in creative expression and artistic pursuits.
      As a poet, writer, and avid reader, I find solace and inspiration in the written word, using my creativity to explore and convey complex emotions
      and ideas. Whether through software engineering, teaching, or artistic endeavors, I am driven by a relentless passion for learning, growth, and making
      a positive impact on the world around me.
      </p>

      <p className="w-full h-42 text-base text-gray-600">
      In summary, I am an energetic, organized, and adaptable individual with a diverse skill set and a thirst for knowledge. With a strong foundation in
      software engineering, extensive experience in education and cultural immersion, and a penchant for creativity and artistic expression, I am poised to
      thrive in any professional setting and contribute meaningfully to the advancement of technology and society.
      </p>
    </div>
  );
}
