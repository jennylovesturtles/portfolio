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
            I don’t rely on LinkedIn alone. I actively look at where engineers
            build, share, and think — using those signals to identify candidates
            who demonstrate real depth and consistency.
          </p>

          <p style={sectionDescription}>
            Each platform gives a different lens into how someone works. I use
            that context to evaluate candidates beyond resumes and surface
            stronger matches.
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

                <div style={cardBody}>
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
    text: "I use GitHub to evaluate consistency over time — looking at commit history, project depth, and how engineers structure real systems beyond one-off projects.",
  },
  {
    title: "Reddit",
    icon: FaRedditAlien,
    tag: "Community signal",
    text: "I use Reddit to find engineers engaged in real technical discussions — paying attention to how they explain concepts, ask questions, and think through problems.",
  },
  {
    title: "X / Twitter",
    icon: FaXTwitter,
    tag: "Builder signal",
    text: "I use X to identify builders who consistently ship and share their work — especially engineers actively participating in the broader technical ecosystem.",
  },
  {
    title: "Hacker News",
    icon: SiYcombinator,
    tag: "Startup signal",
    text: "I use Hacker News to find engineers who think critically about systems and tradeoffs — often surfacing candidates with strong product and startup instincts.",
  },
  {
    title: "Dev.to",
    icon: FaDev,
    tag: "Writing signal",
    text: "I use Dev.to to evaluate how clearly engineers communicate technical ideas — a strong signal for depth of understanding and senior-level thinking.",
  },
  {
    title: "Substack",
    icon: SiSubstack,
    tag: "Depth signal",
    text: "I use Substack to identify engineers with deep, long-form thinking — looking for technical judgment, perspective, and how they reason through complex problems.",
  },
];

/* STYLES (unchanged from your last version) */

const section = {
  minHeight: "100vh",
  padding:
    "clamp(70px, 8vw, 130px) clamp(16px, 4vw, 70px) clamp(50px, 6vw, 80px)",
  background: "transparent",
  overflowX: "hidden",
};

const container = {
  width: "100%",
  maxWidth: "1400px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
  gap: "clamp(30px, 6vw, 90px)",
  alignItems: "center",
};

const introBlock = {
  minWidth: 0,
  padding: "clamp(8px, 3vw, 48px)",
};

const signalBoard = {
  minWidth: 0,
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
  gap: "clamp(16px, 3vw, 26px)",
};

const card = {
  minWidth: 0,
  width: "100%",
  boxSizing: "border-box",
  background: "linear-gradient(180deg, #fffaf6, #fff6f2)",
  borderRadius: "26px",
  padding: "clamp(20px, 4vw, 26px)",
  boxShadow: "0 20px 55px rgba(200, 164, 106, 0.16)",
  transition: "transform 0.25s ease, box-shadow 0.25s ease",
  display: "flex",
  gap: "clamp(14px, 3vw, 18px)",
  alignItems: "flex-start",
};

const cardBody = {
  minWidth: 0,
};

const iconCircle = {
  width: "clamp(46px, 10vw, 52px)",
  height: "clamp(46px, 10vw, 52px)",
  minWidth: "clamp(46px, 10vw, 52px)",
  borderRadius: "17px",
  background: "linear-gradient(135deg, #f4b6c2, #e6c27a)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 12px 28px rgba(209, 138, 155, 0.22)",
};

const iconStyle = {
  color: "#2b2420",
  fontSize: "clamp(22px, 5vw, 25px)",
};

const tag = {
  color: "#c8a46a",
  fontSize: "clamp(11px, 2.7vw, 12px)",
  fontWeight: "800",
  letterSpacing: "1.3px",
  textTransform: "uppercase",
};

const cardTitle = {
  color: "#d18a9b",
  fontSize: "clamp(22px, 5vw, 30px)",
  margin: "6px 0 8px",
};

const cardText = {
  color: "#6b5e57",
  fontSize: "clamp(14px, 3.5vw, 16px)",
  lineHeight: "1.6",
  margin: 0,
};

const eyebrow = {
  color: "#d18a9b",
  fontSize: "clamp(14px, 3vw, 20px)",
  fontWeight: "800",
  letterSpacing: "3px",
  textTransform: "uppercase",
  marginBottom: "16px",
};

const sectionTitle = {
  color: "#2b2420",
  fontSize: "clamp(32px, 7.5vw, 72px)",
  lineHeight: "1.08",
  letterSpacing: "-1px",
  margin: "0 0 22px",
};

const accentLine = {
  width: "70px",
  height: "5px",
  borderRadius: "999px",
  background: "linear-gradient(135deg, #d18a9b, #e6c27a)",
  marginBottom: "26px",
};

const sectionDescription = {
  color: "#6b5e57",
  fontSize: "clamp(15px, 3.8vw, 20px)",
  lineHeight: "1.7",
  marginBottom: "18px",
};