import { useState } from 'react';

import Checkbox from "./Checkbox";

export default function Filters() {
  const [filterChecks, setFilterChecks] = useState({
    women: false,
    ladies: false,
    girls: false,
    babies: false,
  });

    const handleFilterChange = (event) => {
    const { name, checked } = event.target;
    setFilterChecks(prevState => ({
      ...prevState,
      [name]: checked,
    }));
  };

    return (
<div className="mb-14">
    <p className="font-semibold mb-8">Filters</p>
    <form className="flex flex-col gap-y-4.5 text-sm">  
     <Checkbox name={'women'} id={'women-id'} label={'Women'} checked={filterChecks.women} onChange={handleFilterChange} />   
     <Checkbox name={'ladies'} id={'ladies-id'} label={'Ladies'} checked={filterChecks.ladies} onChange={handleFilterChange} />  
     <Checkbox name={'girls'} id={'girls-id'} label={'Girls'} checked={filterChecks.girls} onChange={handleFilterChange} />  
     <Checkbox name={'babies'} id={'babies-id'} label={'Babies'} checked={filterChecks.babies} onChange={handleFilterChange} />  
    </form>
</div>
    );
}