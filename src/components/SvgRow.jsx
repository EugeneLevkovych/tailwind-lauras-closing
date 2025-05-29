export default function SvgRow({href}) {
    return (
         <svg className="size-8 fill-gray1 cursor-pointer">
             <use href={href}></use>
        </svg>
    )
}