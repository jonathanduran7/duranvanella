export default function Contact() {
  return (
    <div>
      <p className="mt-6 text-lg dark:text-white text-black">Contact</p>
      <div className="flex flex-wrap -mx-3 mb-6 mt-4">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" >
            Name
          </label>
          <input className="block w-full bg-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-black" id="grid-first-name" type="text" placeholder="Jane" />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" >
            Email
          </label>
          <input className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-black" id="grid-last-name" type="text" placeholder="Doe" />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" >
            Message
          </label>
          <textarea className="block w-full bg-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-black" id="grid-password" placeholder="Your message"></textarea>
        </div>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
        Send
      </button>
    </div>
  )
}
