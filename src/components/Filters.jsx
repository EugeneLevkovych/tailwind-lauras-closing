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
<div>
    <p className="font-semibold tracking-wide uppercase text-gray1 mb-8">Filters</p>
    <form className="space-y-5">  
     <Checkbox name={'women'} id={'women-id'} label={'Women'} checked={filterChecks.women} onChange={handleFilterChange} />   
     <Checkbox name={'ladies'} id={'ladies-id'} label={'Ladies'} checked={filterChecks.ladies} onChange={handleFilterChange} />  
     <Checkbox name={'girls'} id={'girls-id'} label={'Girls'} checked={filterChecks.girls} onChange={handleFilterChange} />  
     <Checkbox name={'babies'} id={'babies-id'} label={'Babies'} checked={filterChecks.babies} onChange={handleFilterChange} />  
    </form>
</div>
    );
}