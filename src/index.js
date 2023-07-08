import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="ciccio.jpeg" alt="" />;
}

function Intro() {
  return (
    <div>
      <h1>Francesco Falanga</h1>
      <p>
        Sono un neo sviluppatore web con una grande passione per la creazione di
        siti web e applicazioni intuitive. Lavoro duramente per migliorare le
        mie abilità tecniche e per creare soluzioni innovative che soddisfino le
        esigenze dei clienti e offrano un'esperienza utente straordinaria.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      <Skill name="HTML+CSS" bgColor="blue" />
      <Skill name="JavaScript" bgColor="pink" />
      <Skill name="PHP" bgColor="purple" />
      <Skill name="React" bgColor="yellow" />
      <Skill name="Redux" bgColor="green" />
      <Skill name="Vue" bgColor="lightgrey" />
      <Skill name="Laravel" bgColor="grey" />
      <Skill name="Bootstrap" bgColor="orange" />
      <Skill name="MySQL" bgColor="brown" />
      <Skill name="Figma" bgColor="red" />
    </ul>
  );
}

function Skill(props) {
  return (
    <li className="skill" style={{ backgroundColor: props.bgColor }}>
      {props.name}
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
