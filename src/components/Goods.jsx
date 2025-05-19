const GOODS = ["New Arrivals", "#Fresh", "Dresses", "Tops", "Jackets", "Lingerie & Lounge Wear", "Beach Wear", "Blouse", "Denim", "Vintage", "Shoes", "Sandals", "Bags", "Jevelries"];

export default function Goods() {
    return (
        <>
            <ul className="flex space-x-3">
                {GOODS.map((item)=><li key={item}>{item}</li>)}
            </ul>
        </>
    )
}