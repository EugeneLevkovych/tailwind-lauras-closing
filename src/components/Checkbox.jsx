export default function Checkbox({ name, id, label, value = "", checked, onChange }) {
    return (
  <div className="flex gap-2">
    <input className="accent-red-light" type="checkbox" name={name} value={value} id={id} checked={checked} onChange={onChange}/>
    <label htmlFor={id}>{label}</label>
  </div>     
)
}