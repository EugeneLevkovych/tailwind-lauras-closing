

export default function Card({ productObj }) {
    return (
    <li className="relative h-[30.7rem] w-full sm:w-[calc((100%-20px)/2)] xl:w-[calc((100%-40px)/3)] border border-solid">
     <div className="flex justify-center items-center absolute top-4 right-4 size-12 bg-black/30">
       <svg className="stroke-white fill-transparent size-6">
          <use href="./sprite.svg#icon-heart"></use>
       </svg>
     </div>
        <img className="h-2/3 w-full" src={productObj.photoName} alt="Girl" />
         <div className="p-4 flex flex-col justify-between h-1/3">
          <p className="text-gray-dark">{productObj.name}</p>
          <div className="flex justify-between">
            <div className="flex flex-col">
               <p className="text-lg font-semibold text-price-black">{productObj.price}</p>
               <p className="text-lg font-semibold line-through text-gray-lighter">{productObj.price}</p>
            </div>
            <div className="flex flex-col">
               <p className="text-gray-darker">24 otders</p>
               <p className="text-xs bg-back-arrivals-black text-white px-3">New Arrivals</p>
            </div>
          </div>
         </div>  
    </li>
    )
}