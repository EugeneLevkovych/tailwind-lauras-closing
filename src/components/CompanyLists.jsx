import { COMPANY_INFO } from "../data";
import { HELP_SUPPORT } from "../data";
import { CUSTOMER_CARE } from "../data";

export default function CompanyLists() {
    return (
<>
        <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase text-black1 pb-4">Company Info</h3>
            {COMPANY_INFO.map(item => <p key={item} className="font-sm font-medium tracking-wider text-gray-main space-y-2 whitespace-nowrap">{item}</p>)}
        </div>
         <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase text-black1 pb-4">Help & Support</h3>
            {HELP_SUPPORT.map(item => <p key={item} className="font-sm font-medium tracking-wider text-gray-main space-y-2 whitespace-nowrap">{item}</p>)}
        </div>
         <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase text-black1 pb-4">Customer Care</h3>
            {CUSTOMER_CARE.map(item => <p key={item} className="font-sm font-medium tracking-wider text-gray-main space-y-2 whitespace-nowrap">{item}</p>)}
        </div>
 </>
    )}