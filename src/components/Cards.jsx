import Card from "./Card";
import { PRODUCTS_DATA } from "./Card";

export default function Cards() {
const products = PRODUCTS_DATA;


    return (
        <ul className="flex">
            {products.map((product) => {
            return <Card productObj={product} key={product.id} />})}
        </ul>
    )
}