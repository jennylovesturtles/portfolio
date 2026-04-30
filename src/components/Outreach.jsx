import React from "react";

const Outreach = () => {
  return (
    <section id="outreach" style={section}>
      <div style={container}>
        <div style={leftPanel}>
          <p style={eyebrow}>Outreach</p>

          <h2 style={title}>
            Outreach should feel researched, relevant, and human.
          </h2>

          <p style={description}>
            I don’t want candidates to feel like they were dropped into a mass
            sequence. Strong outreach should show that I actually looked at
            their work, understood the signal, and had a reason for reaching out.
          </p>

          <div style={goldLine}></div>

          <p style={softNote}>
            Less spam. More context. Better conversations.
          </p>
        </div>

        <div style={rightPanel}>
          <div style={letterCard}>
            <div style={letterTop}>
              <span style={stamp}>✦</span>
              <p style={letterLabel}>Example outreach</p>
            </div>

            <p style={letterText}>
              Hi — I came across your work on distributed caching and really liked how you approached the consistency vs latency tradeoffs.
            </p>

            <p style={letterText}>
              I’m currently recruiting for a team tackling similar problems at scale, and your background stood out right away as a strong match.

              Would you be open to a quick intro conversation?
            </p>

            <p style={signature}>— Jia</p>
          </div>

          <div style={principleGrid}>
            {principles.map((item) => (
              <div key={item.title} style={principleCard}>
                <div style={heartCircle}>♥</div>
                <h3 style={principleTitle}>{item.title}</h3>
                <p style={principleText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outreach;

const principles = [
  {
    title: "Personalized",
    text: "References real work, not just a title.",
  },
  {
    title: "Clear",
    text: "Short enough to respect their time.",
  },
  {
    title: "Relevant",
    text: "Connects their background to the role.",
  },
];

const section = {
  minHeight: "100vh",
  padding: "clamp(90px, 8vw, 140px) clamp(24px, 5vw, 70px) clamp(40px, 4vw, 70px)",
  background: "transparent",
};

const container = {
  maxWidth: "min(92vw, 1500px)",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "0.95fr 1.05fr",
  gap: "clamp(40px, 5vw, 80px)",
  alignItems: "center",
};

const leftPanel = {
  padding: "clamp(42px, 5vw, 76px)",
};

const eyebrow = {
  color: "#d18a9b",
  fontSize: "clamp(16px, 1.2vw, 20px)",
  fontWeight: "800",
  letterSpacing: "4px",
  textTransform: "uppercase",
  marginBottom: "18px",
};

const title = {
  color: "#2b2420",
  fontSize: "clamp(42px, 5vw, 74px)",
  lineHeight: "1.02",
  letterSpacing: "-2px",
  margin: "0 0 28px",
};

const description = {
  color: "#6b5e57",
  fontSize: "clamp(17px, 1.25vw, 21px)",
  lineHeight: "1.75",
  maxWidth: "640px",
  marginBottom: "30px",
};

const goldLine = {
  width: "90px",
  height: "5px",
  borderRadius: "999px",
  background: "linear-gradient(135deg, #d18a9b, #e6c27a)",
  marginBottom: "22px",
};

const softNote = {
  color: "#c8a46a",
  fontSize: "clamp(18px, 1.4vw, 24px)",
  fontWeight: "800",
  letterSpacing: "1px",
};

const rightPanel = {
  position: "relative",
};

const letterCard = {
  position: "relative",
  background: "#fffaf6",
  border: "1px solid #eadfd6",
  borderRadius: "34px",
  padding: "clamp(34px, 4vw, 56px)",
  boxShadow: "0 30px 90px rgba(209, 138, 155, 0.18)",
  transform: "rotate(-1.2deg)",
};

const letterTop = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "28px",
};

const stamp = {
  width: "58px",
  height: "58px",
  borderRadius: "18px",
  background: "linear-gradient(135deg, #f4b6c2, #e6c27a)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#2b2420",
  fontSize: "28px",
  boxShadow: "0 12px 32px rgba(200, 164, 106, 0.25)",
};

const letterLabel = {
  color: "#d18a9b",
  fontSize: "14px",
  fontWeight: "800",
  letterSpacing: "2px",
  textTransform: "uppercase",
  margin: 0,
};

const letterText = {
  color: "#4f443e",
  fontSize: "clamp(17px, 1.2vw, 20px)",
  lineHeight: "1.75",
  marginBottom: "18px",
};

const signature = {
  color: "#d18a9b",
  fontSize: "22px",
  fontWeight: "800",
  marginTop: "30px",
};

const principleGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "18px",
  marginTop: "30px",
};

const principleCard = {
  background: "rgba(255, 250, 246, 0.85)",
  border: "1px solid #eadfd6",
  borderRadius: "26px",
  padding: "24px",
  boxShadow: "0 20px 50px rgba(200, 164, 106, 0.12)",
};

const heartCircle = {
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  background: "rgba(209, 138, 155, 0.16)",
  color: "#d18a9b",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "14px",
};

const principleTitle = {
  color: "#2b2420",
  fontSize: "20px",
  margin: "0 0 8px",
};

const principleText = {
  color: "#6b5e57",
  fontSize: "15px",
  lineHeight: "1.55",
  margin: 0,
};