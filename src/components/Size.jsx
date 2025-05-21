export default function Size() {
    return (
<div className="mb-6">
    <p className="font-semibold mb-5">Size</p>
    <form className="flex flex-col gap-y-3.5 text-sm">
        <div className="flex gap-2">
           <input type="checkbox" name="medium" value="" id="medium-id" />
           <label htmlFor="medium-id">Medium</label>
       </div>
       <div className="flex gap-2">
           <input type="checkbox" name="large" value="" id="large-id" />
           <label htmlFor="large-id">Large</label>
       </div>
       <div className="flex gap-2">
           <input type="checkbox" name="plus-size" value="" id="plus-size-id"/>
           <label htmlFor="plus-size-id">Plus size</label>
       </div>
        <div className="flex gap-2">
           <input type="checkbox" name="sexy-plus-size" value="" id="sexy-plus-size-id"/>
           <label htmlFor="sexy-plus-size-id">Sexy Plus Size</label>
       </div>
    </form>
</div>
    )
}