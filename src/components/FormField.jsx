export function FormField({ id, label, required = false, wide = false, children }) {
  return (
    <div className={'field' + (wide ? ' wide' : '')}>
      <label htmlFor={id}>
        {label}
        {required && <span className="req">*</span>}
      </label>
      {children}
    </div>
  );
}
