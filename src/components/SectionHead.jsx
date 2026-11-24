export default function SectionHead({ label, title, children }) {
  return (
    <div className="sec-head">
      <div>
        <span className="label">{label}</span>
        <h2>{title}</h2>
      </div>
      {children && <p>{children}</p>}
    </div>
  )
}
