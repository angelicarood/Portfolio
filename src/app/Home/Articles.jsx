import React from "react";
import PropTypes from "prop-types";

const ArticleCard = () => {
  const articles = [
    {
      date: "2022-01-01",
      title: "Teaching English as a Second Language (ESL)",
      content:
      "Teaching English as a Second Language is a high-demand subject of instruction that continues to experience growth in schools across the country. As children from foreign countries continue to immigrate to the United States and enroll in schools here, the number of students whose native language is not English continues to grow",
      link: "https://teach.com/careers/become-a-teacher/what-can-i-teach/tesol/",
    },
    {
      date: "2024-03-05",
      title: "How to Become a Software Engineer from Scratch in 2024?",
      content:
        "Software engineering is a cornerstone of technological progress in an era where software is seamlessly integrated into every aspect of our lives. It encompasses the art and science of designing, developing, testing, and maintaining software systems. From small utility applications to complex, mission-critical systems, software engineering is the discipline that transforms concepts into functional, reliable, and user-friendly software.",
      link: "https://www.simplilearn.com/how-to-become-a-software-engineer-article",
    },
    {
      date: "2022-21-01",
      title: "How To Be A More Creative Developer",
      content:
        "While poets, screenwriters, painters, and other artists are often praised for their creativity, too often, programmers are left out of the spotlight.",
      link: "https://www.codecademy.com/resources/blog/how-to-be-a-more-creative-developer/",
    },
  ];

  if (!articles.length) {
    return <div>No article data</div>;
  }

  return (
    <div>
      {articles.map((article, index) => (
        <article
          key={index}
          data-testid={"articleCard"}
          className="flex flex-col p-6 border border-gray-300 rounded-lg w-full shadow-md mb-5  "
        >
          <div className="text-xs uppercase text-gray-600 dark:text-gray-300 border-l-4 border-gray-300 pl-2">
            <time data-testid={"articleCardDate"}>{article.date}</time>
            <h2 className="text-2xl capitalize my-4 font-bold" data-testid={"articleCardTitle"}>
              {article.title}
            </h2>
          </div>
          <p
            className="text-base text-gray-700 dark:text-white leading-relaxed mb-4"
            data-testid={"articleCardContent"}
          >
            {article.content}
          </p>
          <a
            className="text-base font-bold text-teal-400 hover:underline"
            data-testid={"articleCardLink"}
            href={article.link}
          >
            Read More
          </a>
        </article>
      ))}
    </div>
  );
};

export default ArticleCard;
