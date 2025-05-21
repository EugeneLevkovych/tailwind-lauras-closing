export default function Filters() {
    return (
        <div>
    <p className="font-semibold">Filters</p>
    <form className="flex-col gap-y-2.5 text-sm">
       <input type="checkbox" name="women" value="women" />
       <label>Women</label>
       <input type="checkbox" name="hobby" value="sports" />
       <label>Sports</label>
       <input type="checkbox" name="hobby" value="reading" />
       <label>Reading</label>
    </form>

        </div>
    )
}