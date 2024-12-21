import React from "react";

export default function AuthorCard() {
  return (
    <div className="bg-[#b3eff7] text-black shadow-lg rounded-lg p-6 mt-12">
      <div className="flex items-center animation-fadeIn">
        <img
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-blue-500"
          src="/images/myprofile.jpg"
          alt="author-image"
        />
        <div>
          <h3 className="text-xl font-bold text-teal-800 ">Khazra Ayub</h3>
          <p className="text-[#238794]">Telecom Engineer & Web Developer</p>
        </div>
      </div>

      <p className="mt-4 text-slate-500 leading-relaxed">
        I’m a Khazra Shaikh Telecom Engineer and a love for crafting efficient
        and visually compelling digital experiences. I specialize in building
        responsive, user-centered websites and applications that look great on
        any device, and I'm currently exploring advanced tools like Next.js and
        Tailwind CSS to take my projects to the next level.
      </p>

      <div className="mt-4 flex space-x-3">
        <a
          href="#"
          className="px-4 py-2 text-[#b3eff7] bg-blue-700 rounded-md hover:bg-red-700 transition duration-300"
        >
          Twitter
        </a>
        <a
          href="https://www.linkedin.com/in/khazra-ayub-99b762260/"
        target="blank"
          className="px-4 py-2 text-[#b3eff7] bg-blue-700 rounded-md hover:bg-red-700 transition duration-300"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Khazraayub"
        target="blank"
          className="px-4 py-2 text-[#b3eff7] bg-blue-700 rounded-md shadow-md hover:bg-red-700 transition duration-300"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
