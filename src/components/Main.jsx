import Cards from "./Cards";
import SideBar from "./SideBar";
import Sort from "./Sort";

export default function Main() {
    return (
    <>
    <Sort />
    <div className="flex container mx-auto px-4 bg-green-700">
    <SideBar />
    <Cards />
    </div>
    </>
     )
}