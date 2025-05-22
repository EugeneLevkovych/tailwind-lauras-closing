export default function PricesRange() {
    return (
<div>
    <p className="font-semibold mb-5">Prices</p>
    <div className="flex flex-col mb-5">
      <label className="mb-4" htmlFor="prices-range-id">Range</label>
      <input type="range" id="prices-range-id" name="prices-range" min="0" max="1000"></input>
    </div>
</div>
    )}