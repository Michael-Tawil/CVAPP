/* eslint-disable react/prop-types */
import "../styles/info.css";

export default function Eduinfo(props) {
  const {
    handleschoolinput,
    schname,
    handlesubjectinput,
    subject,
    handledateinput,
    Sdate,
  } = props;
  return (
    <div className="idiv">
      <h2>Education Info</h2>
      <input
        className="iinput"
        placeholder="School Name:"
        type="text"
        onChange={handleschoolinput}
        value={schname}
      />
      <input
        className="iinput"
        placeholder="Subject:"
        type="text"
        onChange={handlesubjectinput}
        value={subject}
      />
      <input
        className="iinput"
        placeholder="Date:"
        type="date"
        onChange={handledateinput}
        value={Sdate}
      />
    </div>
  );
}