import Navbar from "./components/navbar";
import Profile from "./components/profile";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Profile />

      <div className="mt-[40px] text-[#d1d5db]">
        <p>
          I’m a fullstack developer specializing in building scalable applications with Node.js and TypeScript. Throughout my career, I’ve worked on projects at various stages, from the ground up to production, as well as maintaining existing projects, always aiming for efficient and robust solutions.
        </p>

        <p className="mt-5">
          Currently, I’m studying engineering and I enjoy constantly learning new technologies and strengthening my knowledge. My focus is on improving both my technical skills and contributing to the success of the projects I’m involved in.
        </p>

        <p className="mt-5">
          If you’d like to collaborate or just connect, feel free to reach out via email or any of my social platforms.
        </p>
      </div>
    </div>
  );
}
