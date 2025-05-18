const HEADER_LIST = ["Store", "Account", "Wish List", "Basket"];

export default function Header() {
  return (
    <header className="flex">
      <a href="#">
        <h1 className=" text-xl" >Laura’s Closet</h1>
      </a>
        <input type="text" placeholder="Search for an item..." className="w-70 p-2 border" />
        <ul className="flex space-x-4">
          {HEADER_LIST.map((item)=><li className="" key={item}>{item}</li>)}
        </ul>
    </header>
  )
}