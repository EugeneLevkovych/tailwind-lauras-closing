import StoreList from "./StoreList";
import HeaderInput from "./HeaderInput";
import HeaderButton from "./HeaderButton";

export default function Header() {

  return (
    <header className="bg-white-dark">
      <div className="sm:flex sm:flex-wrap sm:items-center py-7 container mx-auto px-4">
        <a href="#">
           <h1 className="text-2xl font-medium tracking-wide text-black1" >Laura’s Closet</h1>
        </a>
        <HeaderInput /> 
        <StoreList />
        <HeaderButton />
      </div>
    </header>
  )
}