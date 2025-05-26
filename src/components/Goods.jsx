import { GOODS } from "../data";

export default function Goods() {
    return (
        <>
            <ul className="flex py-5 space-x-3 overflow-x-auto container mx-auto px-4">
                {GOODS.map((item, index)=><li className={`p-1 text-sm font-semibold tracking-wider text-black1 rounded whitespace-nowrap hover:bg-red-light hover:text-white ${index===1 && "bg-red-light text-white"}`} key={item}>{item}</li>)}
            </ul>
        </>
    )
}