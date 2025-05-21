import Cards from "./Cards";
import SideBar from "./SideBar";
import Sort from "./Sort";

export default function Main() {
    return (
    <>
    <Sort />
    <div className="container mx-auto px-4">
    <SideBar />
    <Cards />
    </div>
    </>
     )
}