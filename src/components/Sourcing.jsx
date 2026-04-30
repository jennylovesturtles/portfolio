import React from "react";
import { FaGithub, FaRedditAlien, FaDev } from "react-icons/fa";
import { SiYcombinator, SiSubstack } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const Sourcing = () => {
  return (
    <section id="sourcing" style={section}>
      <div style={container}>
        <div style={introBlock}>
          <p style={eyebrow}>Sourcing</p>

          <h2 style={sectionTitle}>
            I source through strong signals, not just keywords.
          </h2>

          <div style={accentLine}></div>

          <p style={sectionDescription}>
            My engineering background helps me look beyond resumes and job
            titles.
          </p>

          <p style={sectionDescription}>
            There is a whole world outside of LinkedIn where engineers gather,
            build, and share ideas. I pay attention to how candidates solve
            problems across code, writing, projects, and community activity.
          </p>

          <p style={sectionDescription}>
            Instead of relying on keyword matches, I look for curiosity,
            consistency, and real technical depth.
          </p>
        </div>

        <div style={signalBoard}>
          {sources.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                style={card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 30px 80px rgba(209, 138, 155, 0.22)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 18px 45px rgba(200, 164, 106, 0.13)";
                }}
              >
                <div style={iconCircle}>
                  <Icon style={iconStyle} />
                </div>

                <div>
                  <span style={tag}>{item.tag}</span>
                  <h3 style={cardTitle}>{item.title}</h3>
                  <p style={cardText}>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Sourcing;

/* DATA */

const sources = [
  {
    title: "GitHub",
    icon: FaGithub,
    tag: "Code signal",
    text: "Open-source work, project history, consistency, and real engineering curiosity.",
  },
  {
    title: "Reddit",
    icon: FaRedditAlien,
    tag: "Community signal",
    text: "Authentic technical discussions, niche communities, and emerging talent signals.",
  },
  {
    title: "X / Twitter",
    icon: FaXTwitter,
    tag: "Builder signal",
    text: "Engineers sharing projects, technical threads, launches, and startup activity.",
  },
  {
    title: "Hacker News",
    icon: SiYcombinator,
    tag: "Startup signal",
    text: "Founder-minded engineers, technical opinions, and public project launches.",
  },
  {
    title: "Dev.to",
    icon: FaDev,
    tag: "Writing signal",
    text: "Technical blogs, project writeups, learning notes, and communication style.",
  },
  {
    title: "Substack",
    icon: SiSubstack,
    tag: "Depth signal",
    text: "Long-form thinking, niche expertise, technical judgment, and perspective.",
  },
];

/* STYLES */

const section = {
  minHeight: "100vh",
  padding:
    "clamp(90px, 8vw, 130px) clamp(24px, 5vw, 70px) clamp(40px, 4vw, 70px)",
  background: "transparent",
};

const container = {
  maxWidth: "min(92vw, 1600px)",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "0.8fr 1.2fr",
  gap: "clamp(48px, 6vw, 100px)",
  alignItems: "center",
};

const introBlock = {
  padding: "clamp(24px, 4vw, 52px)",
};

const signalBoard = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "26px",
};

const card = {
  background: "linear-gradient(180deg, #fffaf6, #fff6f2)",
  border: "none",
  borderRadius: "28px",
  padding: "26px",
  boxShadow: "0 20px 55px rgba(200, 164, 106, 0.16)",
  transition: "transform 0.25s ease, box-shadow 0.25s ease",
  display: "flex",
  gap: "18px",
  alignItems: "flex-start",
};

const iconCircle = {
  width: "52px",
  height: "52px",
  minWidth: "52px",
  borderRadius: "18px",
  background: "linear-gradient(135deg, #f4b6c2, #e6c27a)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 12px 28px rgba(209, 138, 155, 0.22)",
};

const iconStyle = {
  color: "#2b2420",
  fontSize: "25px",
};

const tag = {
  color: "#c8a46a",
  fontSize: "12px",
  fontWeight: "800",
  letterSpacing: "1.4px",
  textTransform: "uppercase",
};

const cardTitle = {
  color: "#d18a9b",
  fontSize: "clamp(22px, 2vw, 30px)",
  margin: "6px 0 8px",
};

const cardText = {
  color: "#6b5e57",
  fontSize: "clamp(14px, 1.05vw, 16px)",
  lineHeight: "1.6",
  margin: 0,
};

const eyebrow = {
  color: "#d18a9b",
  fontSize: "clamp(16px, 1.2vw, 20px)",
  fontWeight: "800",
  letterSpacing: "4px",
  textTransform: "uppercase",
  marginBottom: "18px",
};

const sectionTitle = {
  color: "#2b2420",
  fontSize: "clamp(38px, 5vw, 72px)",
  lineHeight: "1.05",
  letterSpacing: "-2px",
  margin: "0 0 22px",
};

const accentLine = {
  width: "70px",
  height: "5px",
  borderRadius: "999px",
  background: "linear-gradient(135deg, #d18a9b, #e6c27a)",
  marginBottom: "30px",
};

const sectionDescription = {
  color: "#6b5e57",
  fontSize: "clamp(16px, 1.2vw, 20px)",
  lineHeight: "1.75",
  marginBottom: "18px",
};