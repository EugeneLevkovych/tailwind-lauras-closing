import Checkbox from "./Checkbox";

export default function FilterGroup({name, options}) {
 return   (
        <div>
            <p className="font-semibold tracking-wide uppercase text-gray1 mb-8">{name}</p>
            <form className="space-y-5">  
               {options.map(item => <Checkbox  key={item.name} name={options.name} id={item.id} label={item.label} />) }   
            </form>
        </div>
    )
}