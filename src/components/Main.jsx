import Cards from "./Cards";
import SideBar from "./SideBar";
import NumberOfProducts from "./NumberOfProducts";
import PageSelect from "./PageSelect";

export default function Main() {
    return (
    <>
       <NumberOfProducts />
     <div className="flex container mx-auto">
       <SideBar />
       <Cards /> 
     </div>
     <PageSelect />
    </>
     )
}