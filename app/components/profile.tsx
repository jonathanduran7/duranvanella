export default function Profile() {
  return (
    <div>
      <div className="bg-white w-[135px] h-[135px] rounded-full mt-4 text-black flex items-center justify-center">
        <img src="/spiderman.jpg" alt="Jonathan Duran" className="w-[125px] h-[125px] rounded-full" />
      </div>

      <div className="mt-4">
        <p className="text-xl text-black dark:text-white">Jonathan Duran Vanella</p>
        <p className="text-base dark:text-gray text-black italic">Full Stack Developer</p>
      </div>
    </div>
  )
}
