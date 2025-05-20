export default function Advertisement() {
    return (
    <div className="flex max-w-(--my-break-xl) mx-auto px-4">
      <div className="flex text-white w-full bg-stone-800">
          <div className="p-5 mr-auto">
            <h3 className="font-bold">Ladies Top</h3>
            <p className="font-light">Slash Sales begins in April.Get up to 80% Discount on all products.<span className="font-bold">Read More</span></p>
          </div>
            
          <div className="bg-blue-300 w-14 -skew-x-30 -translate-x-6.5"></div>
          <div className="bg-red-300 w-14 -skew-x-30 -translate-x-6.5"></div>
      </div>
    </div> 
    )
}