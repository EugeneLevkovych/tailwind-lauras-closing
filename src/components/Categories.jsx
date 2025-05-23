import Checkbox from "./Checkbox";

export default function Categories() {
    return (
<div className="mb-6">
    <p className="font-semibold mb-5">Categories</p>
    <form className="flex flex-col gap-y-3.5 text-sm">
          <Checkbox name={'dresses'} id={'dresses-id'} label={'Dresses'} checked={false}/>  
          <Checkbox name={'tops'} id={'tops-id'} label={'Tops'} checked={false}/>  
          <Checkbox name={'lingerie-&-lounge-wear'} id={'lingerie-&-lounge-wear-id'} label={'Lingerie & Lounge Wear'} checked={false}/>  
          <Checkbox name={'blouse'} id={'blouse-id'} label={'Vlouse'} checked={false}/>  
          <Checkbox name={'Vintage'} id={'Vintage-id'} label={'Vintage'} checked={false}/>  
       <p className="text-red-500">+4more</p>
    </form>
</div>
    )
}