import Brands from "./Brands";
import Categories from "./Categories";
import Filters from "./Filters";
import PricesRange from "./PricesRange";
import Size from "./Size";


export default function SideBar() {

    return (
        <div className="max-w-84 w-full px-6 py-10 bg-white-dark">
           <PricesRange />
           <Filters />
           <Brands />
           <Categories />
           <Size />
        </div>
    )
}