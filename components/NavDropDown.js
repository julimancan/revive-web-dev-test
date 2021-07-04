const NavDropDown = ({ dropdownItems }) => {
  return (
    <div className="dropdown">
      {dropdownItems.list.map((item, index) => (
        <h6 key={index}>{item}</h6>
      ))}
    </div>
  )
};

export default NavDropDown;