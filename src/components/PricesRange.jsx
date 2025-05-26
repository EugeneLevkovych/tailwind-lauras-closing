export default function PricesRange() {
    return (
<div>
    <p className="font-semibold tracking-wide uppercase text-gray1 mb-6">Prices</p>
    <div>
      <div className="flex flex-wrap">
         <label className="text-sm tracking-wide text-gray-darker" htmlFor="prices-range-id">Range</label>
         <p className="text-sm font-medium tracking-wide text-gray1 ml-auto">$120-300</p>
        <input className="w-full accent-red-light mt-[1.6rem]" type="range" id="prices-range-id" name="prices-range" min="0" max="1000"></input>
      </div>
    </div>
</div>
)}