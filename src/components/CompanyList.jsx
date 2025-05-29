export default function CompanyList({options, title}) {
    return (
    <div>
        <h3 className="text-sm font-semibold tracking-wide uppercase text-black1 mb-4">{title}</h3>
        {options.map(item => <p key={item} className="font-sm font-medium tracking-wider text-gray-main whitespace-nowrap not-last:mb-2 cursor-pointer">{item}</p>)}
    </div>
)
}