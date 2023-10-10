/* eslint-disable react/prop-types */

import "../styles/info.css";
export default function Pinfo(props) {
  const {
    Fullname,
    Pnumber,
    Email,
    handleemailinput,
    handlepnumberinput,
    handlefnameinput,
  } = props;

  return (
    <div className="idiv">
      <h2>Personal Info</h2>
      <input
        className="iinput"
        placeholder="Full Name:"
        type="text"
        onChange={handlefnameinput}
        value={Fullname}
      />
      <input
        className="iinput"
        placeholder="Email:"
        type="text"
        onChange={handleemailinput}
        value={Email}
      />
      <input
        className="iinput"
        placeholder="Phone Number:"
        type="text"
        onChange={handlepnumberinput}
        value={Pnumber}
      />
    </div>
  );
}