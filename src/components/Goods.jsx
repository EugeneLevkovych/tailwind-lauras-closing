const GOODS = ["New Arrivals", "#Fresh", "Dresses", "Tops", "Jackets", "Lingerie & Lounge Wear", "Beach Wear", "Blouse", "Denim", "Vintage", "Shoes", "Sandals", "Bags", "Jevelries"];

export default function Goods() {
    return (
        <>
            <ul className="flex py-5 space-x-3 overflow-x-auto container mx-auto px-4">
                {GOODS.map((item)=><li className="p-1 text-sm font-semibold cursor-pointer rounded whitespace-nowrap hover:bg-red-light hover:text-white" key={item}>{item}</li>)}
            </ul>
        </>
    )
}