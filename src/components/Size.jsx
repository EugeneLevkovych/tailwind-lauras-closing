export default function Size() {
    return (
<div className="mb-6">
    <p className="font-semibold mb-5">Size</p>
    <form className="flex flex-col gap-y-3.5 text-sm">
        <Checkbox name={'medium'} id={'medium-id'} label={'Medium'} checked={false}/>  
        <Checkbox name={'large'} id={'large-id'} label={'Large'} checked={false}/>  
        <Checkbox name={'plus-size'} id={'plus-size-id'} label={'Plus Size'} checked={false}/>  
        <Checkbox name={'sexy-plus-size'} id={'plussexy--size-id'} label={'Sexy Plus Size'} checked={false}/>  
       
    </form>
</div>
    )
}