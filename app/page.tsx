import Navbar from "./ui/navbar";
import Profile from "./components/profile";
import Description from "./components/description";
import WorkExperience from "./components/work-experience";

export default function Home() {
  return (
    <div className="bg-background text-dark dark:bg-darkBackground dark:text-darkForeground paddingPage">
      <Navbar />
      <Profile />
      <Description />
      <WorkExperience />
    </div>
  );
}
