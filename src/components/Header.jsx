import { FaMagnifyingGlass } from "react-icons/fa6";
import { STORE_LIST_DATA } from "../data";
import { AiOutlineMenu } from "react-icons/ai";
export default function Header() {

  return (
    <header className="bg-white-dark">
      <div className="flex flex-wrap  sm:items-center py-7 container mx-auto px-4">
        <a href="#">
          <h1 className="text-2xl font-medium tracking-wide text-black1" >Laura’s Closet</h1>
        </a>
          <div className="relative ml-auto mr-auto">
        <div className="absolute bottom-2 left-0">
            <FaMagnifyingGlass className="text-gray-400"/>
        </div>
        <input type="text" id="search" placeholder="Search for an item..." className="max-w-45 lg:max-w-70 pl-8 py-1 text-gray-lighter tracking-wide border-b-1 border-gray-400 focus:border-green-400 outline-none transition-colors" />
    </div> 
          <ul className="hidden lg:flex space-x-4">
            {STORE_LIST_DATA.map((item, index)=><li className={`font-medium tracking-wide cursor-pointer hover:text-gray1 hover:font-semibold ${index===3 ? "text-gray1 font-semibold tracking-wide" : "text-gray-main"}`} key={item}>{item}</li>)}
        </ul>
         <svg className="hidden lg:block h-6 w-6 ml-2 fill-black1">
          <use href="./sprite.svg#icon-shopping-basket"></use>
        </svg>
        <button className="lg:hidden">
          <AiOutlineMenu size={23} />
        </button>   
      </div>
    </header>
  )
}