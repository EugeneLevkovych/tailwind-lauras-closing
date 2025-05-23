export default function NumberOfProducts() {
    return (    
    <div className="flex justify-between container mx-auto px-4 py-12">
        <div className="text-gray-dark font-semibold">Showing 1-20 <span className="text-gray-light font-normal">out of 2,356 Products</span></div>
        <div className="space-x-1">
            <label className="text-gray-light font-normal" htmlFor="sort-by">Sort by:</label>
             <select className="text-gray-dark font-semibold" name="sort-by" id="sort-by">
                <option value="New Arrivals">New Arrivals</option>
                <option value="Last Summer">Last Summer</option>
                <option value="Discont">Discont</option>
             </select>
        </div>
    </div>
    )
}