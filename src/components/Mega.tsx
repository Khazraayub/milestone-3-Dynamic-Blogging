import React from "react";
import BlogCard from "./BlogCard";
import { title } from "process";

export default function Mega() {
  const posts = [
    {
      id: "1",
      title: "Telecom Innovations",
      description:
        "Explore the latest trends in telecom engineering.A futuristic depiction of telecommunications innovations: a cityscape with 5G-enabled devices, a satellite orbiting the Earth, quantum communication lines represented as glowing streams, and AI-powered towers with solar panels.",
      date: "2024-10-21",
      imageUrl: "/images/blog1.jpg",
    },
    {
      id: "2",
      title: "AI for Beginners",
      description:
        "I’ve created a beginner-friendly blog on Artificial Intelligence and generated an educational illustration that complements the topic. Let me know if there’s anything else you’d like to explore or refine! An educational illustration depicting the concept of Artificial Intelligence (AI) for beginners. ",
      date: "2024-10-29",
      imageUrl: "/images/blog2.jpg",
    },
    {
      id: "3",
      title: "Coding Challenges",
      description:
        "This blog is dedicated to helping developers of all skill levels enhance their coding abilities through exciting and diverse programming challenges.Join the journey of mastering coding concepts, enhancing your problem-solving mindset. Let’s build better, more efficient solutions together!",
      date: "2024-11-01",
      imageUrl: "/images/blog3.jpg",
    },
    {
      id: "4",
      title: "Overcoming Challenges",
      description:
        "Life is full of obstacles, but how we tackle them defines our growth and success. This blog is dedicated to sharing stories, strategies, and insights on overcoming the various challenges we face in life, both personal and professional.",
      date: "2024-11-10",
      imageUrl: "/images/blog4.jpg",
    },
    {
      id: "5",
      title: "Tech in Developing Countries",
      description:
        "This blog explores how technology is reshaping industries, enhancing education, improving healthcare, and fostering innovation in regions that have traditionally faced economic, infrastructure, and social challenges.",
      date: "2024-11-21",
      imageUrl: "/images/blog5.jpg",
    },
    {
      id: "6",
      title: "Cybersecurity Tips",
      description:
        "In today's increasingly connected world, cybersecurity has become more critical than ever. This blog will provide practical cybersecurity tips that anyone can implement to stay safe online.",
      date: "2024-12-01",
      imageUrl: "/images/blog6.jpg",
    },
  ];
  return (
    <div className="py-8 bg-[#b3eff7] min-h-screen">
      <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change ">
        Welcome To My Blog
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
            <div className="fade-in" key={post.id}>
                <div className="blog-card">
                    <BlogCard post={post} isDarkBackground={index % 2 === 0}/>

                </div>
                    

            </div>
        ))}

      </div>
    </div>
  );
}
