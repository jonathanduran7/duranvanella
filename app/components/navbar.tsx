import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function Navbar() {
  return (
    <div className="w-full flex justify-between">
      <ul className="flex gap-4">
        <li className="cursor-pointer underline font-bold">
          home
        </li>
        <li className="cursor-pointer">
          projects
        </li>
        <li className="cursor-pointer">
          contact
        </li>
      </ul>

      <div className='flex gap-3'>
        <div className='cursor-pointer'>
          <p>es/en</p>
        </div>
        <div className='cursor-pointer'>
          <WbSunnyIcon />
        </div>
      </div>
    </div >
  );
}
