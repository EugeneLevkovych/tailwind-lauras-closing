import Card from "./Card";
import { PRODUCTS_DATA } from "../data";

export default function Cards() {
const products = PRODUCTS_DATA;


    return (
        <ul className="flex flex-wrap gap-5 lg:pl-4">
            {products.map((product) => {
            return <Card productObj={product} key={product.id} />})}
        </ul>
    )
}