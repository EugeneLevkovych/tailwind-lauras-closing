export default function Card({ productObj }) {
    return (
    <li className="relative h-[30.8rem] w-[18.5rem] xl:w-[calc((100%-40px)/3)] border border-solid border-gray2">
     <div className="flex justify-center items-center absolute top-4 right-4 size-12 bg-black/30 cursor-pointer">
       <svg className="stroke-white fill-transparent size-6">
          <use href="./sprite.svg#icon-heart"></use>
       </svg>
     </div>
        <img className="h-[21.4rem] max-w-[18.7rem] w-full" src={productObj.photoName} alt="Girl" />
         <div className="p-4">
          <p className="text-sm font-medium tracking-wide leading-[1.5] text-gray1 mb-2">{productObj.name}</p>
          <div className="flex justify-between">
            <div className="space-y-3">
               <p className="text-lg font-semibold leading-[1.7] text-black1">{productObj.price}</p>
               <p className="text-lg line-through text-gray-lighter">{productObj.price}</p>
            </div>
            <div className="flex flex-col gap-2">
               <p className="text-gray-darker">24 otders</p>
               <p className="h-5 w-[5.9rem] text-xs bg-black2 text-white2 px-3 py-[3px] cursor-pointer">New Arrivals</p>
            </div>
          </div>
         </div>  
    </li>
    )
}