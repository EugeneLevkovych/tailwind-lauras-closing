export default function Brands() {
    return (
<div className="mb-6">
    <p className="font-semibold mb-5">Brands</p>
    <form className="flex flex-col gap-y-3.5 text-sm">
        <div className="flex gap-2">
           <input type="checkbox" name="h-m" value="" id="h-m-id" />
           <label htmlFor="h-m-id">H&M</label>
       </div>
       <div className="flex gap-2">
           <input type="checkbox" name="mark-spencer" value="" id="mark-spencer-id" />
           <label htmlFor="mark-spencer-id">Mark & Spencer</label>
       </div>
       <div className="flex gap-2">
           <input type="checkbox" name="victorias-secret" value="" id="victorias-secret-id"/>
           <label htmlFor="victorias-secret-id">Victoria’s Secret</label>
       </div>
        <div className="flex gap-2">
           <input type="checkbox" name="dior" value="" id="dior-id"/>
           <label htmlFor="dior-id">Dior</label>
       </div>
        <div className="flex gap-2">
           <input type="checkbox" name="gucci" value="" id="gucci-id"/>
           <label htmlFor="gucci-id">Gucci</label>
       </div>
        <div className="flex gap-2">
           <input type="checkbox" name="fendi" value="" id="fendi-id"/>
           <label htmlFor="fendi-id">Fendi</label>
       </div>
        <div className="flex gap-2">
           <input type="checkbox" name="prada" value="" id="prada-id"/>
           <label htmlFor="prada-id">Prada</label>
       </div>
        <div className="flex gap-2">
           <input type="checkbox" name="versace" value="" id="versace-id"/>
           <label htmlFor="versace-id">Versace</label>
       </div>
        <div className="flex gap-2">
           <input type="checkbox" name="dolce-gabbana" value="" id="dolce-gabbana-id"/>
           <label htmlFor="dolce-gabbana-id">Dolce & Gabbana</label>
       </div>
        <div className="flex gap-2">
           <input type="checkbox" name="zara" value="" id="zara-id"/>
           <label htmlFor="zara-id">Zara</label>
       </div>
        <div className="flex gap-2">
           <input type="checkbox" name="chanel" value="" id="chanel-id"/>
           <label htmlFor="chanel-id">Chanel</label>
       </div>
       <p className="text-red-500">+234more</p>
    </form>
</div>    
    ) }