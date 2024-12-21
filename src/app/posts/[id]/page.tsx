"use client";
import React from "react";
import CommentSection from "@/components/CommentSection";
import AuthorCard from "@/components/AuthorCard";

const posts = [
  {
    id: "1",
    title: "Telecom Innovations",
    description:
      "Explore the latest trends in telecom engineering.A futuristic depiction of telecommunications innovations: a cityscape with 5G-enabled devices, a satellite orbiting the Earth, quantum communication lines represented as glowing streams, and AI-powered towers with solar panels.The rollout of 5G is arguably the most revolutionary innovation in telecommunications. Promising lightning-fast speeds, ultra-low latency, and massive device connectivity, 5G is unlocking new possibilities across industries.Edge computing is revolutionizing how data is processed by bringing computation closer to the source of data generation. This reduces latency and enhances real-time decision-making capabilities.Satellite-based internet services, such as Starlink and OneWeb, aim to provide high-speed internet access to remote and underserved regions. These low-earth orbit (LEO) satellites offer several advantages over traditional satellite systems.NFV and SDN are transforming traditional telecom networks into more flexible, efficient, and scalable systems by virtualizing network functions and decoupling hardware from software.Quantum communication is set to redefine data security and encryption. Using quantum key distribution (QKD), it ensures secure data transmission by leveraging the principles of quantum mechanics.Artificial intelligence is enhancing telecom operations by optimizing networks, improving customer experiences, and driving efficiency.As the world shifts toward sustainability, the telecom industry is adopting green technologies and practices.Telecom is no longer just about making calls or sending messages; it is about transforming lives and enabling progress on a global scale.",
    date: "2024-10-21",
    image: "/images/blog1.jpg",
  },
  {
    id: "2",
    title: "AI for Beginners",
    description:
      "I’ve created a beginner-friendly blog on Artificial Intelligence and generated an educational illustration that complements the topic. Let me know if there’s anything else you’d like to explore or refine! An educational illustration depicting the concept of Artificial Intelligence (AI) for beginners.Artificial Intelligence (AI) refers to the creation of systems or machines that can perform tasks requiring human intelligence. These tasks include problem-solving, learning, reasoning, understanding natural language, and even recognizing patterns like images and sounds.AI is poised to revolutionize industries, improve quality of life, and solve complex global challenges. However, it’s crucial to approach its development responsibly, ensuring it benefits humanity as a whole.Artificial Intelligence isn’t just for experts; anyone can learn and leverage its potential. With the right tools and knowledge, you can be part of this exciting journey! ",
    date: "2024-10-29",
    image: "/images/blog2.jpg",
  },
  {
    id: "3",
    title: "Coding Challenges",
    description:
      "This blog is dedicated to helping developers of all skill levels enhance their coding abilities through exciting and diverse programming challenges. Whether you're a beginner looking to build your foundation or an experienced coder aiming to fine-tune your algorithms, this space provides problems, solutions, and valuable tips for continuous learning.Explore various coding challenges ranging from data structures, algorithms, and problem-solving techniques to real-world applications. Each post breaks down challenges step-by-step, offers detailed explanations, and provides insight into best practices.Join the journey of mastering coding concepts, enhancing your problem-solving mindset, and preparing for coding interviews with ease. Let’s build better, more efficient solutions together!",
    date: "2024-11-01",
    image: "/images/blog3.jpg",
  },
  {
    id: "4",
    title: "Overcoming Challenges",
    description:
      "Life is full of obstacles, but how we tackle them defines our growth and success. This blog is dedicated to sharing stories, strategies, and insights on overcoming the various challenges we face in life, both personal and professional. From building resilience and navigating tough situations to embracing change and finding motivation, we explore the mindset and tools that can help you thrive.Each post offers practical advice, personal experiences, and inspiration to help you face adversity with confidence and emerge stronger. Whether you're tackling career challenges, personal struggles, or striving to break through limiting beliefs, you’ll find resources and support here.Join us on a journey of self-improvement, where every challenge is an opportunity for growth and transformation.",
    date: "2024-11-10",
    image: "/images/blog4.jpg",
  },
  {
    id: "5",
    title: "Tech in Developing Countries",
    description:
      "Technology is revolutionizing the world, and in developing countries, it plays a crucial role in addressing challenges and driving economic growth. This article explores how technology is reshaping industries, enhancing education, improving healthcare, and fostering innovation in regions that have traditionally faced economic, infrastructure, and social challenges.The digital divide, a gap between those with access to technology and those without, is narrowing thanks to affordable smartphones, the growth of internet connectivity, and government initiatives. With more people gaining access to the internet, individuals can now connect with the global economy, access information, and create new opportunities for themselves and their communities.Technology is also being used to tackle environmental challenges such as climate change, deforestation, and water scarcity. Solar-powered technologies, sustainable farming techniques, and data-driven systems for managing water resources are transforming how developing nations address these pressing issues.Technology in developing countries is not just a tool; it’s a transformative force that’s breaking down barriers and creating new opportunities. While challenges remain, the power of technology offers immense potential for creating a more equitable, sustainable, and prosperous future for millions around the world.",
    date: "2024-11-21",
    image: "/images/blog5.jpg",
  },
  {
    id: "6",
    title: "Cybersecurity Tips",
    description:
      "In today's increasingly connected world, cybersecurity has become more critical than ever. With threats like hacking, identity theft, and ransomware lurking at every corner of the internet, it's essential to take proactive steps to protect your personal and professional data. This blog will provide practical cybersecurity tips that anyone can implement to stay safe online.A weak password is an easy target for attackers. Ensure your passwords are long, complex, and unique for each account.Adding an extra layer of security can make a big difference. Multi-factor authentication (MFA) requires more than just a password to access your accounts.Public Wi-Fi networks, such as those in coffee shops or airports, are not secure. Avoid conducting sensitive activities like banking or shopping when connected to public Wi-Fi.Cybersecurity is everyone’s responsibility, and by following these simple yet effective tips, you can significantly reduce your risk of falling victim to cyberattacks. Whether you're a casual internet user or a professional handling sensitive data, practicing good cybersecurity hygiene is essential to safeguarding your online presence and personal information.",
    date: "2024-12-01",
    image: "/images/blog6.jpg",
  },
];

export default function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <h2 className="text-2xl font-bold text-center mt-10">Post Not Found</h2>
    );
  }
  const renderParagraphs = (description: string) => {
    return description.split("/n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };
  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center animate-color-change">
        {post.title}
      </h1>
      {post.image && (
        <img
        src={post.image}
        alt={post.title}
        className="w-full h-auto rounded-md mt-4"/>
      )}
      <div className="mt-6 text-lg text-slate-600 ">
        {renderParagraphs(post.description)}
      </div>
      <CommentSection postId={post.id} />
      <AuthorCard />
    </div>
  );
}
