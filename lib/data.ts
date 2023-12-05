import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import snapgram from "@/public/snapgram.png";
import dallasville from "@/public/dallasville.png";
import tojays from "@/public/tojays.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [

  {
    title: "Software Developer",
    location: "Skillz Systems Ltd, Nigeria",
    description:
      "I'm now working with the following stack: React, Nodejs, Laravel and Docker to build microservices. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },

  {
    title: "Fullstack Developer",
    location: "Ullwebs, FCT, Nigeria",
    description:
      "I worked as a fullstack developer for a year under contract. I also upskilled to by  learning React Native",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Software Developer",
    location: "Swaptify Solutions ltd, FCT, Nigeria",
    description:
      "Designed and developed websites based on client requirements. I also learnt using laravel, react here",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2022",
  }
] as const;

export const projectsData = [
  {
    title: "Dallasvile",
    description:
      "Dallasville is a leading real estate company dedicated to helping individuals and families find their perfect homes in Nigeria",
    tags: ["React", "Typescript", "MongoDB", "Tailwind", "Nodejs"],
    imageUrl: dallasville,
    link: 'https://dallasville.vercel.app/',
  },
  {
    title: "Torjays",
    description:
      "Tojay Chemical is a paint production company offering reliable, efficient and quality paint production, sales and delivery services, alongside other related services",
    tags: ["React", "TypeScript", "Vercel", "Tailwind", "Redux"],
    imageUrl: tojays,
    link: 'https://tojays.vercel.app/',
  },
  {
    title: "SnapGram",
    description:
      "A public social web app, to share, link and post images ",
    tags: ["React", "Typescript", "Appwrite", "Tailwind", "React Query"],
    imageUrl: snapgram,
    link: 'https://social-app-sand.vercel.app/',
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SCSS",
  "PHP",
  "Laravel",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "MySQL",
] as const;
