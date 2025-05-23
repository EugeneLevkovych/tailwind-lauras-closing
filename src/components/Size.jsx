import { useState } from "react";
import Checkbox from "./Checkbox";

export default function Size() {
const [filterChecks, setFilterChecks] = useState({
    medium: false,
    large: false,
    plus_size: false,
    plus_sexy_size: false,
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
    <p className="font-semibold mb-5">Size</p>
    <form className="flex flex-col gap-y-4.5 text-sm">
        <Checkbox name={'medium'} id={'medium-id'} label={'Medium'} checked={filterChecks.large} onChange={handleFilterChange} />  
        <Checkbox name={'large'} id={'large-id'} label={'Large'} checked={filterChecks.medium} onChange={handleFilterChange} />  
        <Checkbox name={'plus_size'} id={'plus_size-id'} label={'Plus Size'} checked={filterChecks.plus_size} onChange={handleFilterChange} />  
        <Checkbox name={'plus_sexy_size'} id={'plus_sexy_size-id'} label={'Plus Sexy Size'} checked={filterChecks.plus_sexy_size} onChange={handleFilterChange} />         
    </form>
</div>
    )
}