import {TERMS_ITEMS1} from "../data";
import {TERMS_ITEMS2} from "../data";

export default function Terms() {
    return (
    <>
        <div className="flex gap-3.5 mb-4">
            {TERMS_ITEMS1.map(item =><p key={item} className="font-sm font-medium tracking-wider text-gray-main underline underline-offset-4 sm:whitespace-nowrap">{item}</p>)}
            </div>
        <div className="flex gap-3.5">
            {TERMS_ITEMS2.map(item =><p key={item} className="font-sm font-medium tracking-wider text-gray-main underline underline-offset-4 sm:whitespace-nowrap">{item}</p>)}
        </div>
     </>
    )
}