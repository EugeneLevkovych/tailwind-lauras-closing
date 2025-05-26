export default function Checkbox({ name, id, label, value = "", checked, onChange }) {
    return (
  <div>
    <input className="accent-red-light text-sm tracking-wide gray1" type="checkbox" name={name} value={value} id={id} checked={checked} onChange={onChange}/>
    <label className="ml-4" htmlFor={id}>{label}</label>
  </div>     
)
}