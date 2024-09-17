import Navbar from "./ui/navbar";
import Profile from "./components/profile";
import Description from "./components/description";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Profile />

      <Description />
    </div>
  );
}
