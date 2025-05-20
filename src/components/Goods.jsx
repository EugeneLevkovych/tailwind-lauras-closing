const GOODS = ["New Arrivals", "#Fresh", "Dresses", "Tops", "Jackets", "Lingerie & Lounge Wear", "Beach Wear", "Blouse", "Denim", "Vintage", "Shoes", "Sandals", "Bags", "Jevelries"];

export default function Goods() {
    return (
        <>
            <ul className="flex py-5 space-x-3 overflow-x-auto max-w-7xl mx-auto">
                {GOODS.map((item)=><li className="p-1 text-sm font-semibold cursor-pointer rounded whitespace-nowrap hover:bg-red-400 hover:text-white" key={item}>{item}</li>)}
            </ul>
        </>
    )
}