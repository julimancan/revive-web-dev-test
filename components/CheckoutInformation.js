
const gridElements = [
  {
    name: "24/7 Customer Support",
    img: "/customerSupport.png"
  },
  {
    name: "Change Your Cups",
    img: "/changeYourCups.png"
  },
  {
    name: "Skip Your Upcoming Delivery",
    img: "/skipDelivery.png"
  },
  {
    name: "Change Your Plan",
    img: "/changeYourPlan.png"
  },
];

const CheckoutInformation = () => {
  return (
    <section>
      <h4>You can skip or pause a delivery any time!</h4>
      <p>*Just be sure to make any changes before 9 AM on Thursdays. For holidays, expect your order to be delivered a day later or earlier. We will email you with tracking information to track your order - no hassles!</p>
      <div className="graphic-grid">
        {gridElements.map((element, index) => (
          <img src={element.img} alt={element.name} key={index}/>
        ))}
      </div>
    </section>
  )
};

export default CheckoutInformation;