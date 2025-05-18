const HEADER_LIST = ["Store", "Account", "Wish List", "Basket"];
import { CiShoppingBasket } from "react-icons/ci";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="flex">
      <a href="#">
        <h1 className="text-xl" >Laura’s Closet</h1>
      </a>
      <div className="relative ml-auto mr-auto">
        <div className="absolute bottom-2 left-0">
      <FaMagnifyingGlass className="text-gray-400"/>
        </div>
        <input type="text" placeholder="Search for an item..." className="w-70 pl-8  border-b-2 border-gray-500 focus:border-blue-500 outline-none transition-colors" />
        </div>
        <ul className="flex space-x-4">
          {HEADER_LIST.map((item)=><li className="hover:text-blue-500"   key={item}>{item}</li>)}
        </ul>
        <CiShoppingBasket className="h-6 w-6"/>
    </header>
  )
}