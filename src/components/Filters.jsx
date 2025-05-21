export default function Filters() {
    return (
        <div>
    <p className="font-semibold">Filters</p>
    <form className="flex flex-col gap-y-3.5 text-sm">
        <div className="flex gap-2">
       <input type="checkbox" name="women" value="women" />
       <label>Women</label>
       </div>
       <div className="flex gap-2">
       <input type="checkbox" name="ladies" value="ladies" />
       <label>Ladies</label>
       </div>
       <div className="flex gap-2">
       <input type="checkbox" name="girls" value="girls" />
       <label>Girls</label>
       </div>
        <div className="flex gap-2">
       <input type="checkbox" name="babies" value="babies" />
       <label>Babies</label>
       </div>
    </form>
    </div>
    )
}