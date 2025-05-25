import { STORE_LIST_DATA } from "../data";

export default function StoreList() {
  return  (
    <>
        <ul className="hidden lg:flex space-x-4">
            {STORE_LIST_DATA.map((item)=><li className="text-base font-medium text-gray-main hover:text-gray-dark hover:font-semibold" key={item}>{item}</li>)}
        </ul>
    </>
    )
}