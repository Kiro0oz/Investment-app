export default function Input({
  type = "number",
  label,
  name,
  onChange,
  value,
}) {
  return (
    <p>
      <label htmlFor={name}>{label}</label>
      <input type={type} value={value} id={name} onChange={onChange} required />
    </p>
  );
}
