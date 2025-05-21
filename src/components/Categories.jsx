export default function Categories() {
    return (
<div className="mb-6">
    <p className="font-semibold mb-5">Categories</p>
    <form className="flex flex-col gap-y-3.5 text-sm">
      
       <div className="flex gap-2">
           <input type="checkbox" name="dresses" value="" id="dresses-id" />
           <label htmlFor="dresses-id">Dresses</label>
       </div>
       <div className="flex gap-2">
           <input type="checkbox" name="tops" value="" id="tops-id"/>
           <label htmlFor="tops-id">Tops</label>
       </div>
        <div className="flex gap-2">
           <input type="checkbox" name="lingerie" value="" id="lingerie-id"/>
           <label htmlFor="lingerie-id">Lingerie & Lounge Wear</label>
       </div>
         <div className="flex gap-2">
           <input type="checkbox" name="blouse" value="" id="blouse-id" />
           <label htmlFor="blouse-id">Blouse</label>
       </div>
        <div className="flex gap-2">
           <input type="checkbox" name="vintage" value="" id="vintage-id" />
           <label htmlFor="vintage-id">Vintage</label>
       </div>
       <p className="text-red-500">+4more</p>
    </form>
</div>
    )
}