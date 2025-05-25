import { FaMagnifyingGlass } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai"; 
import StoreList from "./StoreList";

export default function Header() {

  return (
    <header className="bg-white-dark">
      <div className="flex flex-wrap items-center py-7 container mx-auto px-4">
        <a href="#">
          <h1 className="text-2xl" >Laura’s Closet</h1>
        </a>
      <div className="relative ml-auto mr-auto">
        <div className="absolute bottom-2 left-0">
          <FaMagnifyingGlass className="text-gray-400"/>
        </div>
          <input type="text" id="search" placeholder="Search for an item..." className="lg:max-w-70 pl-8 py-1 text-base border-b-1 border-gray-400 focus:border-red-light outline-none transition-colors" />
      </div>
      <StoreList />
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