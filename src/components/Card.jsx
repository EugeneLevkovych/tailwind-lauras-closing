import girl1 from "../assets/girl-1.png";
import girl2 from "../assets/girl-2.jpg";

export const PRODUCTS_DATA = [
    {
        name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        price: "$ 120.23",
        id: 1,
        photoName: girl1,
    },
        {
        name: "Striped Flutter Peplum Hem Blouse",
        price: "$ 59.99",
        id: 2,
        photoName: "../assets/girl-2.jpg",
    },
]

export default function Card({ productObj }) {
    console.log(productObj);
    console.log(productObj.photoName)
    
    return (
        <li>
            <img src={productObj.photoName} alt="Girl" />
            <p>{productObj.name}</p>
            <p>{productObj.price}</p>
        </li>
    )
}