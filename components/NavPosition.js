
const steps = [
  "Choose your plan",
  "Build Your Box",
  "Checkout"
];

const NavPosition = () => {
  return (
    <section className="nav-position">
      {steps.map((step, index) => (
        <h4 key={index}>{step}</h4>
      ))}
    </section>
  )
}

export default NavPosition
