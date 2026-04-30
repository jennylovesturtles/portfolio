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

          <p style={softNote}>Less spam. More context. Better conversations.</p>
        </div>

        <div style={rightPanel}>
          <div style={letterCard}>
            <div style={letterTop}>
              <span style={stamp}>✦</span>
              <p style={letterLabel}>Example outreach</p>
            </div>

            <p style={letterText}>
              Hi — I came across your work on distributed caching and really
              liked how you approached the consistency vs latency tradeoffs.
            </p>

            <p style={letterText}>
              I’m currently recruiting for a team tackling similar problems at
              scale, and your background stood out right away as a strong match.
            </p>

            <p style={letterText}>
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
  padding:
    "clamp(70px, 8vw, 140px) clamp(16px, 4vw, 70px) clamp(50px, 6vw, 80px)",
  background: "transparent",
  overflowX: "hidden",
};

const container = {
  width: "100%",
  maxWidth: "1400px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
  gap: "clamp(28px, 5vw, 80px)",
  alignItems: "center",
};

const leftPanel = {
  minWidth: 0,
  padding: "clamp(8px, 3vw, 60px)",
};

const eyebrow = {
  color: "#d18a9b",
  fontSize: "clamp(14px, 3vw, 20px)",
  fontWeight: "800",
  letterSpacing: "3px",
  textTransform: "uppercase",
  marginBottom: "16px",
};

const title = {
  color: "#2b2420",
  fontSize: "clamp(32px, 7.5vw, 74px)",
  lineHeight: "1.08",
  letterSpacing: "-1px",
  margin: "0 0 24px",
};

const description = {
  color: "#6b5e57",
  fontSize: "clamp(15px, 3.8vw, 21px)",
  lineHeight: "1.7",
  maxWidth: "680px",
  marginBottom: "26px",
};

const goldLine = {
  width: "clamp(70px, 14vw, 90px)",
  height: "5px",
  borderRadius: "999px",
  background: "linear-gradient(135deg, #d18a9b, #e6c27a)",
  marginBottom: "20px",
};

const softNote = {
  color: "#c8a46a",
  fontSize: "clamp(17px, 4vw, 24px)",
  fontWeight: "800",
  letterSpacing: "0.8px",
  margin: 0,
};

const rightPanel = {
  minWidth: 0,
  position: "relative",
};

const letterCard = {
  width: "100%",
  boxSizing: "border-box",
  position: "relative",
  background: "#fffaf6",
  border: "1px solid #eadfd6",
  borderRadius: "clamp(26px, 4vw, 34px)",
  padding: "clamp(24px, 5vw, 56px)",
  boxShadow: "0 24px 70px rgba(209, 138, 155, 0.16)",
  transform: "rotate(-0.6deg)",
  transformOrigin: "center",
};

const letterTop = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "14px",
  marginBottom: "clamp(20px, 4vw, 28px)",
};

const stamp = {
  width: "clamp(46px, 11vw, 58px)",
  height: "clamp(46px, 11vw, 58px)",
  flex: "0 0 auto",
  borderRadius: "16px",
  background: "linear-gradient(135deg, #f4b6c2, #e6c27a)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#2b2420",
  fontSize: "clamp(22px, 5vw, 28px)",
  boxShadow: "0 12px 32px rgba(200, 164, 106, 0.25)",
};

const letterLabel = {
  color: "#d18a9b",
  fontSize: "clamp(12px, 2.8vw, 14px)",
  fontWeight: "800",
  letterSpacing: "1.6px",
  textTransform: "uppercase",
  margin: 0,
  textAlign: "right",
};

const letterText = {
  color: "#4f443e",
  fontSize: "clamp(15px, 3.8vw, 20px)",
  lineHeight: "1.7",
  marginBottom: "16px",
};

const signature = {
  color: "#d18a9b",
  fontSize: "clamp(20px, 5vw, 24px)",
  fontWeight: "800",
  marginTop: "26px",
};

const principleGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
  gap: "clamp(14px, 3vw, 18px)",
  marginTop: "clamp(24px, 4vw, 30px)",
};

const principleCard = {
  minWidth: 0,
  background: "rgba(255, 250, 246, 0.85)",
  border: "1px solid #eadfd6",
  borderRadius: "24px",
  padding: "clamp(18px, 4vw, 24px)",
  boxShadow: "0 18px 45px rgba(200, 164, 106, 0.12)",
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
  fontSize: "clamp(18px, 4vw, 20px)",
  margin: "0 0 8px",
};

const principleText = {
  color: "#6b5e57",
  fontSize: "clamp(14px, 3.5vw, 15px)",
  lineHeight: "1.55",
  margin: 0,
};