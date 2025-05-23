import Checkbox from "./Checkbox";
import { useState } from "react";

export default function Categories() {
const [filterChecks, setFilterChecks] = useState({
    dresses: false,
    tops: false,
    lingerie_lounge_wear: false,
    blouse: false,
    vintage: false,
  });

    const handleFilterChange = (event) => {
    const { name, checked } = event.target;
    setFilterChecks(prevState => ({
      ...prevState,
      [name]: checked,
    }));
  };


    return (
<div className="mb-6">
    <p className="font-semibold mb-5">Categories</p>
    <form className="flex flex-col gap-y-4.5 text-sm">
          <Checkbox name={'dresses'} id={'dresses-id'} label={'Dresses'} checked={filterChecks.dresses} onChange={handleFilterChange} />  
          <Checkbox name={'tops'} id={'tops-id'} label={'Tops'} checked={filterChecks.tops} onChange={handleFilterChange} />  
          <Checkbox name={'lingerie_lounge_wear'} id={'lingerie_lounge_wear-id'} label={'Lingerie & Lounge Wear'} checked={filterChecks.lingerie_lounge_wear} onChange={handleFilterChange} />  
          <Checkbox name={'blouse'} id={'blouse-id'} label={'Blouse'} checked={filterChecks.blouse} onChange={handleFilterChange} />  
          <Checkbox name={'vintage'} id={'vintage-id'} label={'Vintage'} checked={filterChecks.vintage} onChange={handleFilterChange} />  
       <p className="text-red-light">+4more</p>
    </form>
</div>
    )
}