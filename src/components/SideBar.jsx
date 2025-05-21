import Brands from "./Brands";
import Categories from "./Categories";
import Filters from "./Filters";
import PricesRange from "./PricesRange";
import Size from "./Size";

export default function SideBar() {
    return (
        <div>
            <PricesRange />
            <Filters />
            <Brands />
            <Categories />
            <Size />
        </div>
    )
}