export default function PricesRange() {
    return (
<div>
    <p className="font-semibold tracking-wide uppercase text-gray1 mb-6">Prices</p>
    <div className="flex flex-col mb-[3.3rem]">
      <div className="flex justify-between mb-[1.6rem]">
         <label className="text-sm tracking-wide text-gray-darker" htmlFor="prices-range-id">Range</label>
         <p className="text-sm font-medium tracking-wide text-gray1">$120-300</p>
      </div>
      <input className="accent-red-light" type="range" id="prices-range-id" name="prices-range" min="0" max="1000"></input>
    </div>
</div>
    )}