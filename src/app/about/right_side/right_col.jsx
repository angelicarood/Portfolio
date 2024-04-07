import React from 'react';
import mepic from '/workspaces/Portfolio/src/app/about/right_side/Me.png';
import { AiOutlineClose as XIcon, AiFillGithub as GithubIcon, AiFillLinkedin as LinkedinIcon } from 'react-icons/ai';
import Image from 'next/image';

export default function RightSide() {
  return (
    <div className="flex flex-col items-start space-y-6 w-full md:w-1/2 px-6 py-6 md:px-0 md:py-0 max-w-3x4 h-full rounded-lg">
      <Image className="w-full h-1000 object-cover mt-6 mb-6" src={mepic} alt="Your alt text" />
      <ul>
        <li><a href="https://www.example.com" target="_blank" rel="noreferrer"><XIcon />Follow me on X</a></li>
        <li><a href="https://github.com" target="_blank" rel="noreferrer"><GithubIcon />Follow me on Github</a></li>
        <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><LinkedinIcon />Follow me on Linkedin</a></li>
      </ul>

      <a href="mailto:your_email@example.com">angelicaleonrood@gmail.com</a>
    </div>
  );
}
