import { useState } from "react";
import Pinfo from "../components/info";
import Eduinfo from "../components/eduex";
import Proinfo from "../components/proex";
export default function Cvpanel() {
  const [fullname, setFullname] = useState("");
  const [Email, setEmail] = useState("");
  const [Pnumber, setPnumber] = useState("");
  const [schname, setschname] = useState("");
  const [subject, setsubject] = useState("");
  const [Sdate, setsdate] = useState("");
  const [cname, setcname] = useState("");
  const [ptitle, setptitle] = useState("");
  const [mainres, setmainres] = useState("");
  const [fdate, setfdate] = useState("");
  const [tdate, settdate] = useState("");
  const [newcv, setnewcv] = useState("");

  function savecv() {
    setnewcv({
      name: fullname,
      email: Email,
      phonenumber: Pnumber,
      School: schname,
      subj: subject,
      schdate: Sdate,
      Company: cname,
      title: ptitle,
      mres: mainres,
      fromd: fdate,
      todate: tdate,
    });
  }

  function handlefnameinput(e) {
    setFullname(e.target.value);
  }
  function handleemailinput(e) {
    setEmail(e.target.value);
  }
  function handlepnumberinput(e) {
    setPnumber(e.target.value);
  }
  function handleschoolinput(e) {
    setschname(e.target.value);
  }
  function handlesubjectinput(e) {
    setsubject(e.target.value);
  }
  function handledateinput(e) {
    setsdate(e.target.value);
  }
  function handlecname(e) {
    setcname(e.target.value);
  }
  function handleptitle(e) {
    setptitle(e.target.value);
  }
  function handlemainres(e) {
    setmainres(e.target.value);
  }
  function handlefdate(e) {
    setfdate(e.target.value);
  }
  function handletdate(e) {
    settdate(e.target.value);
  }
  function clrinput() {
    setFullname("");
    setEmail("");
    setPnumber("");
    setschname("");
    setsubject("");
    setsdate("");
    setcname("");
    setptitle("");
    setmainres("");
    setfdate("");
    settdate("");
    setnewcv("");
  }
  return (
    <div className="maindiv">
      <div className="inputdiv">
        <h1 style={{ margin: 0, color: "#0D8DFD"}}>CV Generator</h1>
        <Pinfo
          Fullname={fullname}
          handlefnameinput={handlefnameinput}
          handleemailinput={handleemailinput}
          Email={Email}
          handlepnumberinput={handlepnumberinput}
          Pnumber={Pnumber}
        />
        <Eduinfo
          handleschoolinput={handleschoolinput}
          schname={schname}
          handlesubjectinput={handlesubjectinput}
          subject={subject}
          handledateinput={handledateinput}
          Sdate={Sdate}
        />
        <Proinfo
          handlecname={handlecname}
          cname={cname}
          handleptitle={handleptitle}
          ptitle={ptitle}
          handlemainres={handlemainres}
          mainres={mainres}
          handlefdate={handlefdate}
          fdate={fdate}
          handletdate={handletdate}
          tdate={tdate}
        />
      </div>
      {newcv == "" ? (
        <div className="cview">
          <div className="pinfoview">
            <h1>{fullname}</h1>
            <p>{Email}</p>
            <p>{Pnumber}</p>
          </div>
          <div className="eduinfoview">
          <h1>Education</h1>
          <p>{schname}</p>
          <p>{subject}</p>
          <p>{Sdate}</p>
          </div>
          <div className="pexinfoview">
          <h1>Experience</h1>
          <p>{cname}</p>
          <p>{ptitle}</p>
          <p>{mainres}</p>
          <p>{fdate}</p>
          <p>{tdate}</p>
          </div>
          <div className="btnd">
            <button className="ibtn" onClick={clrinput}>
              Clear
            </button>
            <button className="ibtn" onClick={savecv}>
              Save
            </button>
          </div>
        </div>
      ) : (
        <div className="cview">
          <h1>{newcv.name}</h1>
          <p>{newcv.email}</p>
          <p>{newcv.phonenumber}</p>
          <h2>Education</h2>
          <p>{newcv.School}</p>
          <p>{newcv.subj}</p>
          <p>{newcv.schdate}</p>
          <h3>Experience</h3>
          <p>{newcv.Company}</p>
          <p>{newcv.title}</p>
          <p>{newcv.mres}</p>
          <p>{newcv.fromd}</p>
          <p>{newcv.todate}</p>
          <div className="btnd">
            <button className="ibtn" onClick={clrinput}>
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
}