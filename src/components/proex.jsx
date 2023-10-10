/* eslint-disable react/prop-types */
import "../styles/info.css";

export default function Proinfo(props) {
  const {
    handlecname,
    cname,
    handleptitle,
    ptitle,
    handlemainres,
    mainres,
    handlefdate,
    fdate,
    handletdate,
    tdate,
  } = props;

  return (
    <div className="idiv">
      <h2>Professional Experince</h2>
      <input
        className="iinput"
        placeholder="Company Name:"
        type="text"
        onChange={handlecname}
        value={cname}
      />
      <input
        className="iinput"
        placeholder="Role Title:"
        type="text"
        onChange={handleptitle}
        value={ptitle}
      />
      <input
        className="iinput"
        placeholder="Main Responsibilty:"
        type="textarea"
        onChange={handlemainres}
        value={mainres}
      />
      <input
        className="iinput"
        placeholder="FROM:"
        type="date"
        onChange={handlefdate}
        value={fdate}
      />
      <input
        className="iinput"
        placeholder="TO:"
        type="date"
        onChange={handletdate}
        value={tdate}
      />
    </div>
  );
}