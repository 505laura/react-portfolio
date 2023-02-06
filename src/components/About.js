import React, { useState, useEffect } from 'react';

const Technologies = [
  ['Javascript', 'Node.js', 'React'],
  ['Javascript', 'Node.js', 'React'],
  ['Javascript', 'Node.js', 'React']
]

const TechLists = Technologies.map((row) => (
  <ul className="list-disc pl-10">
    {row.map((el) => <li className='list-item'>{el}</li>)}
  </ul>
));

function About() {
  return (
    // TODO: Fix repeated code
    <div className='w-2/3 mx-auto flex align-start'>
      <div className='w-2/3 mx-auto flex align-start'>
        <div>
          <div className='flex items-center py-4 align-baseline'>
            <span class="flex-shrink text-4xl text-offWhite pr-4">About Me</span>
            <div class="flex-grow h-[2px] bg-violet"></div>
          </div>
          <p className="flex-shrink text-xl font-light text-offWhite">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p className="flex-shrink text-2xl font-normal pt-5 text-offWhite">Technologies I work with currently:</p>
          <div className="flex text-2xl font-light pt-5 text-offWhite">
          {TechLists}
          </div>
        </div>
        <img src="laura-brancatisano.jpg" alt="placeholder" className='h-80 pl-5 pt-9 w-auto'/>
      </div>
    </div>
  );
}

export default About;