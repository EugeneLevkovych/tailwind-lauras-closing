import girl1 from "../assets/girl-1.png";
import girl2 from "../assets/girl-2.jpg";
import girl3 from "../assets/girl-3.jpg";
import girl4 from "../assets/girl-4.jpg";
import girl5 from "../assets/girl-5.jpg";
import girl6 from "../assets/girl-6.jpg";

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
        photoName: girl2,
    },
        {
        name: "Striped Flutter Peplum Hem Blouse",
        price: "$ 79.99",
        id: 3,
        photoName: girl3,
    },
        {
        name: "Striped Flutter Peplum Hem Blouse",
        price: "$ 79.99",
        id: 4,
        photoName: girl4,
    },
           {
        name: "Striped Flutter Peplum Hem Blouse",
        price: "$ 79.99",
        id: 5,
        photoName: girl5,
    },
          {
        name: "Striped Flutter Peplum Hem Blouse",
        price: "$ 79.99",
        id: 6,
        photoName: girl6,
    },
]

export default function Card({ productObj }) {
  
    return (
        // <li className="w-[calc((100%-40px)/2)]">
        <li className="w-2xs h-80 mx-2">
            <img className="h-full w-full" src={productObj.photoName} alt="Girl" />
            <p>{productObj.name}</p>
            <p>{productObj.price}</p>
        </li>
    )
}