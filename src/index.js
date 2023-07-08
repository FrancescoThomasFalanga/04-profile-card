import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    name: "HTML+CSS",
    level: "advanced",
    bgColor: "#2662EA",
  },
  {
    name: "JavaScript",
    level: "advanced",
    bgColor: "#EFD81D",
  },
  {
    name: "PHP",
    level: "advanced",
    bgColor: "#C3DCAF",
  },
  {
    name: "React",
    level: "beginner",
    bgColor: "#E84F33",
  },
  {
    name: "Redux",
    level: "beginner",
    bgColor: "#60DAFB",
  },
  {
    name: "Vue",
    level: "advanced",
    bgColor: "#AD3A30",
  },
  {
    name: "Laravel",
    level: "intermediate",
    bgColor: "purple",
  },
  {
    name: "Bootstrap",
    level: "advanced",
    bgColor: "grey",
  },
  {
    name: "MySQL",
    level: "intermediate",
    bgColor: "brown",
  },
  {
    name: "Figma",
    level: "beginner",
    bgColor: "#FAAB00",
  },
];

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
      {skills.map((skill) => (
        <Skill
          name={skill.name}
          level={skill.level}
          bgColor={skill.bgColor}
          key={skill.name}
        />
      ))}
    </ul>
  );
}

function Skill({ name, level, bgColor }) {
  return (
    <li className="skill" style={{ backgroundColor: bgColor }}>
      {name}
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
