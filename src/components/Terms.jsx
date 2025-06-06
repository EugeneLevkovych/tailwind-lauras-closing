import {TERMS_ITEMS} from "../data";

export default function Terms() {
    return (
     <div className="flex flex-wrap gap-3.5 mb-2.5">
        {TERMS_ITEMS.map(item =><p key={item} className="font-sm font-medium tracking-wider text-gray-main underline underline-offset-4 sm:whitespace-nowrap cursor-pointer">{item}</p>)}
     </div>
    )
}