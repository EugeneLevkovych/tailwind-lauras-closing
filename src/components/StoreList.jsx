import { STORE_LIST_DATA } from "../data";

export default function StoreList() {
  return  (
    <>
        <ul className="hidden lg:flex space-x-4">
            {STORE_LIST_DATA.map((item, index)=><li className={`font-medium tracking-wide cursor-pointer hover:text-gray1 hover:font-semibold ${index===3 ? "text-gray1 font-semibold tracking-wide" : "text-gray-main"}`} key={item}>{item}</li>)}
        </ul>
    </>
    )
}