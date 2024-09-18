import Navbar from "./ui/navbar";
import Profile from "./components/profile";
import Description from "./components/description";
import WorkExperience from "./components/work-experience";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Profile />
      <Description />
      <WorkExperience />
    </div>
  );
}
