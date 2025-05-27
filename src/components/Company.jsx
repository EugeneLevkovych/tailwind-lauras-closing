import CompanyLists from "./CompanyLists";
import Terms from "./Terms";

export default function Company() {
    return (
<>
    <div className="flex flex-wrap lg:flex-nowrap gap-5 sm:gap-20 md:gap:30 lg:gap-10 xl:gap-14 max-w-[36.25rem] w-full mb-5 lg:mb-[7.6rem]">  
        <CompanyLists />
    </div>
    <div>
        <p className="mb-6 font-sm font-medium tracking-wider text-gray-main">©2010-2022 Laura’s Closet All Rights Reserved</p>
        <Terms />
    </div>
</>
)}