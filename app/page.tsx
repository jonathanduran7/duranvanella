'use client'

import { useRef } from 'react'
import Navbar from "./ui/navbar";
import Profile from "./components/profile";
import Description from "./components/description";
import WorkExperience from "./components/work-experience";
import Footer from "./components/footer";
import Contact from "./components/contact";

export default function Home() {

  const contactRef = useRef<HTMLElement | null>(null)

  const scrollToContact = () => {
    if (contactRef) {
      contactRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-background text-dark dark:bg-darkBackground dark:text-darkForeground paddingPage min-h-screen">
      <Navbar />
      <Profile />
      <Description scroll={scrollToContact} />
      <WorkExperience />
      <Contact refElement={contactRef} />
      <Footer />
    </div>
  );
}
