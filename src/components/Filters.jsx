export default function Filters() {
    return (
<div className="mb-6">
    <p className="font-semibold mb-5">Filters</p>
    <form className="flex flex-col gap-y-3.5 text-sm">
        <div className="flex gap-2">
           <input type="checkbox" name="women" value="" id="women-id" />
           <label htmlFor="women-id">Women</label>
       </div>
       <div className="flex gap-2">
           <input type="checkbox" name="ladies" value="" id="ladies-id" />
           <label htmlFor="ladies-id">Ladies</label>
       </div>
       <div className="flex gap-2">
           <input type="checkbox" name="girls" value="" id="girls-id"/>
           <label htmlFor="girls-id">Girls</label>
       </div>
        <div className="flex gap-2">
           <input type="checkbox" name="babies" value="" id="babies-id"/>
           <label htmlFor="babies-id">Babies</label>
       </div>
    </form>
</div>
    )
}