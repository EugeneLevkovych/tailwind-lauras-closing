import StoreList from "./StoreList";
import HeaderInput from "./HeaderInput";
import HeaderButton from "./HeaderButton";
import Logo from "./Logo";

export default function Header() {

  return (
    <header className="bg-white-dark">
      <div className="flex flex-wrap  sm:items-center py-7 container mx-auto px-4">
        <Logo />
        <HeaderInput /> 
        <StoreList />
        <HeaderButton />    
      </div>
    </header>
  )
}