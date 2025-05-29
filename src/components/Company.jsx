import { COMPANY_INFO } from "../data";
import { HELP_SUPPORT } from "../data";
import { CUSTOMER_CARE } from "../data";
import CompanyList from "./CompanyList";
import Terms from "./Terms";

export default function Company() {
    return (
<div>
    <div className="flex flex-wrap lg:flex-nowrap justify-between mb-5 lg:mb-[7.7rem]"> 
        <CompanyList title="Company info" options={COMPANY_INFO} /> 
        <CompanyList title="Help & Support" options={HELP_SUPPORT} />
        <CompanyList title="Customer Care" options={CUSTOMER_CARE} />
    </div>
    <div>
        <p className="font-sm font-medium tracking-wider text-gray-main mb-6">©2010-2022 Laura’s Closet All Rights Reserved</p>
        <Terms />
    </div>
</div>
)}

