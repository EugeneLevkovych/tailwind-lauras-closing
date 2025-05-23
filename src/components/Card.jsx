export default function Card({ productObj }) {
    return (
    <li className="h-[30.7rem] w-[calc((100%-40px)/3)] border border-solid">
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