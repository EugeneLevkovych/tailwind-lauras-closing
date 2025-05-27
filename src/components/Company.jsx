import CompanyLists from "./CompanyLists";

export default function Company() {
    return (
<>
    <div className="flex flex-wrap lg:flex-nowrap gap-5 sm:gap-20 md:gap:30 lg:gap-10 xl:gap-14 max-w-[36.25rem] w-full mb-5 lg:mb-[7.6rem]">  
        <CompanyLists />
    </div>
    <div>
        <p className="mb-6 font-sm font-medium tracking-wider text-gray-main">©2010-2022 Laura’s Closet All Rights Reserved</p>
        <div className="flex gap-3.5 mb-4">
            <p className="font-sm font-medium tracking-wider text-gray-main underline underline-offset-4 sm:whitespace-nowrap">Privacy Center</p>
            <p className="font-sm font-medium tracking-wider text-gray-main underline underline-offset-4 sm:whitespace-nowrap">Privacy & Cookie Policy</p>
            <p className="font-sm font-medium tracking-wider text-gray-main underline underline-offset-4 sm:whitespace-nowrap">Manage Cookies</p>
            </div>
        <div className="flex gap-3.5">
            <p className="font-sm font-medium tracking-wider text-gray-main underline underline-offset-4 sm:whitespace-nowrap">Terms & Conditions</p>
            <p className="font-sm font-medium tracking-wider text-gray-main underline underline-offset-4 sm:whitespace-nowrap">Copyright Notice</p>
            <p className="font-sm font-medium tracking-wider text-gray-main underline underline-offset-4 sm:whitespace-nowrap">Imprint</p>
        </div>
    </div>
</>
)}