export default function Footer() {
  return (
    <footer className="bg-gray-900 p-10 mt-20">

      <p className="text-center mb-5">
        Thanks for visiting ❤️
      </p>

      <form className="flex flex-col gap-3 max-w-md mx-auto">
        <input placeholder="Name" className="p-2 bg-gray-800" />
        <input placeholder="Email" className="p-2 bg-gray-800" />
        <textarea placeholder="Message" className="p-2 bg-gray-800" />
        <button className="bg-purple-600 p-2">Send</button>
      </form>

    </footer>
  )
}