import FilterGroup from "./FilterGroup";
import PricesRange from "./PricesRange";
import { categoryFilters } from "../data";
import { categoryBrands } from "../data";
import { categoryCategories } from "../data";
import { categorySize } from "../data";


export default function SideBar() {

    return (
        <div className="hidden lg:flex flex-col gap-[3.3rem] max-w-84 w-full px-6 py-10 bg-white-dark">
           <PricesRange />
           <FilterGroup  name={'Filters'} options={categoryFilters} />
           <FilterGroup  name={'Brands'} options={categoryBrands} />
           <FilterGroup  name={'Categories'} options={categoryCategories} />
           <FilterGroup  name={'Size'} options={categorySize} />
        </div>
    )
}