import Cards from "./Cards";
import SideBar from "./SideBar";
import Sort from "./Sort";

export default function Main() {
    return (
    <>
    <Sort />
    <div className="flex container mx-auto pl-4 bg-amber-200">
    <SideBar />
    <Cards />
    </div>
    </>
     )
}