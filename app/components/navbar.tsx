export default function Navbar() {
  return (
    <div className="w-full flex justify-between">
      <ul className="flex gap-4">
        <li className="cursor-pointer">
          home
        </li>
        <li className="cursor-pointer">
          projects
        </li>
        <li className="cursor-pointer">
          contact
        </li>
      </ul>

      <div>
        right
      </div>
    </div >
  );
}
