import Checkbox from "./Checkbox";
import { useState } from "react";

export default function Brands() {
  const [filterChecks, setFilterChecks] = useState({
    hm: false,
    mark_spencer: false,
    victorias_secret: false,
    dior: false,
    gucci: false,
    fendi: false,
    prada: false,
    versaci: false,
    dolce_gabbana: false,
    zara: false,
    shanel: false,
  });


    const handleFilterChange = (event) => {
    const { name, checked } = event.target;
    setFilterChecks(prevState => ({
      ...prevState,
      [name]: checked,
    }));
  };

    return (
<div>
    <p className="font-semibold tracking-wide uppercase text-gray1 mb-8">Brands</p>
    <form className="flex flex-col gap-y-4.5 text-sm">
       <Checkbox name={'hm'} id={'hm-id'} label={'H&M'} checked={filterChecks.hm} onChange={handleFilterChange} />
       <Checkbox name={'mark_spencer'} id={'mark_spencer-id'} label={'Mark & Spencer'} checked={filterChecks.mark_spencer} onChange={handleFilterChange} />
       <Checkbox name={'victorias_secret'} id={'victorias_secret-id'} label={'Victoria’s Secret'} checked={filterChecks.victorias_secret} onChange={handleFilterChange} />
       <Checkbox name={'dior'} id={'dior-id'} label={'Dior'} checked={filterChecks.dior} onChange={handleFilterChange} />
       <Checkbox name={'gucci'} id={'gucci-id'} label={'Gucci'} checked={filterChecks.gucci} onChange={handleFilterChange} />
       <Checkbox name={'fendi'} id={'fendi-id'} label={'Fendi'} checked={filterChecks.fendi} onChange={handleFilterChange} />
       <Checkbox name={'prada'} id={'prada-id'} label={'Prada'} checked={filterChecks.prada} onChange={handleFilterChange} />
       <Checkbox name={'versaci'} id={'versaci-id'} label={'Versaci'} checked={filterChecks.versaci} onChange={handleFilterChange} />
       <Checkbox name={'dolce_gabbana'} id={'dolce_gabbana-id'} label={'Dolce & Gabbana'} checked={filterChecks.dolce_gabbana} onChange={handleFilterChange} />
       <Checkbox name={'zara'} id={'zara-id'} label={'Zara'} checked={filterChecks.zara} onChange={handleFilterChange} />
       <Checkbox name={'shanel'} id={'shanel-id'} label={'Shanel'} checked={filterChecks.shanel} onChange={handleFilterChange} />   
       <p className="pl-[2.1rem] text-red-light">+234more</p>
    </form>
</div>    
    ) }