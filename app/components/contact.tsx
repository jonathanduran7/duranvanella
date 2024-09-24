'use client'

import { ChangeEvent, useState } from "react"

export default function Contact() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    const { name, email, message } = form

    if (!name || !email || !message) {
      alert('Please fill all fields')
      return
    }

    const subject = `Contact from Webpage`
    const body = `Hi! Mi name is ${name}.\n\n${message}`
    const recipientEmail = 'jduranev@gmail.com'

    window.open(`mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);

    setForm({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <div>
      <p className="mt-6 text-lg dark:text-white text-black">Contact</p>
      <div className="flex flex-wrap -mx-3 mb-6 mt-4">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">Name</label>
          <input className="block w-full bg-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-black" id="grid-first-name"
            type="text"
            placeholder="Jane"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">Email</label>
          <input className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-black" id="grid-last-name"
            type="email"
            placeholder="your@email.com"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">Message</label>
          <textarea className="block w-full bg-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-black" id="grid-password"
            placeholder="Your message"
            name="message"
            onChange={handleChange}
            value={form.message}></textarea>
        </div>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button" onClick={handleSubmit}>
        Send
      </button>
    </div>
  )
}
