import { FaMagnifyingGlass } from "react-icons/fa6";

export default function HeaderInput() {

  return (
    <div className="relative ml-auto mr-auto">
        <div className="absolute bottom-2 left-0">
            <FaMagnifyingGlass className="text-gray-400"/>
        </div>
        <input type="text" id="search" placeholder="Search for an item..." className="lg:max-w-70 pl-8 py-1 text-gray-lighter tracking-wide border-b-1 border-gray-400 focus:border-green-400 outline-none transition-colors" />
    </div>
  )
}