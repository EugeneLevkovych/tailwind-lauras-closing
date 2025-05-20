const HEADER_LIST = ["Store", "Account", "Wish List", "Basket"];
import { CiShoppingBasket } from "react-icons/ci";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="bg-white-dark">
      <div className="flex items-center py-7 max-w-7xl mx-auto">
      <a href="#">
        <h1 className="text-2xl" >Laura’s Closet</h1>
      </a>
      <div className="relative ml-auto mr-auto">
        <div className="absolute bottom-2 left-0">
          <FaMagnifyingGlass className="text-gray-400"/>
        </div>
        <input type="text" placeholder="Search for an item..." className="w-70 pl-8 py-1 text-base border-b-1 border-gray-400 focus:border-blue-500 outline-none transition-colors" />
      </div>
      <ul className="flex space-x-4">
          {HEADER_LIST.map((item)=><li className="text-base font-medium text-grey-main hover:text-grey-dark hover:font-semibold" key={item}>{item}</li>)}
      </ul>
      <CiShoppingBasket className="h-6 w-6 ml-0.5"/>
      </div>
    </header>
  )
}