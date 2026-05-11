export default function About() {
  const cards = [
    {
      title: "Retail",
      subtitle: "Customer-facing",
      points: [
        "Kohls: Commission Sales Associate",
        "Cinemark: Assistant Manager",
        "A-Plus Prep School: Tutor",
      ],
    },
    {
      title: "Educator",
      subtitle: "Clinical Teaching",
      points: [
        "Taught students in real classroom environments",
        "Guided hands-on learning and engagement",
        "Developed communication and mentorship skills",
      ],
    },
    {
      title: "Bootcamp",
      subtitle: "Technical Skills Foundation",
      points: [
        "Completed full-stack engineering program",
        "Built projects using modern technologies",
        "Developed strong problem-solving skills",
      ],
    },
    {
      title: "Engineer",
      subtitle: "Production Systems",
      points: [
        "Worked on production systems at JPMorgan Chase",
        "Collaborated across engineering teams",
        "Contributed to real-world backend systems",
      ],
    },
  ];

  return (
    <section id="about" style={section}>
      <div style={container}>
        {/* HEADER */}
        <div style={headerWrap}>
          <p style={eyebrow}>About</p>

          <h2 style={title}>
            A nontraditional path into technical recruiting
          </h2>

          <p style={intro}>
            <p style={intro}>
                <p style={intro}>
                    My path into recruiting has been shaped by a mix of people-facing roles and hands-on engineering work.
                    Each step has helped me build a different way of understanding how people think.
                </p>
            </p>
          </p>
        </div>

        {/* TOP CARDS */}
        <div style={grid}>
          {cards.map((card) => (
            <div
              key={card.title}
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 34px 95px rgba(209, 138, 155, 0.22)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 26px 75px rgba(209, 138, 155, 0.16)";
              }}
            >
              <p style={cardHeader}>{card.title}</p>
              <h3 style={cardTitle}>{card.subtitle}</h3>

              <div style={accentLine}></div>

              <ul style={listStyle}>
                {card.points.map((item) => (
                  <li key={item} style={listItem}>
                    <span style={heart}>♥</span>
                    <span style={text}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM CARDS */}
        <div style={bottomGrid}>
          <div style={bottomCard}>
            <h3 style={bottomTitle}>Why Recruiting?</h3>
            <p style={bottomText}>
                I became interested in recruiting after seeing how hard it is to evaluate engineers well. 
                I want to bring an engineering perspective into hiring and identify candidates who can truly perform beyond the interview.
            </p>
          </div>

          <div style={bottomCard}>
            <h3 style={bottomTitle}>Why Now?</h3>
            <p style={bottomText}>
              After working on production systems, I realized I was most drawn to how engineers grow and find their place within teams.

              Recruiting lets me stay close to the technical space while helping people find roles where they can truly thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* STYLES */

const section = {
  minHeight: "100vh",
  padding: "clamp(60px, 6vw, 120px) clamp(16px, 4vw, 60px)", // tighter on mobile
};

const container = {
  width: "100%",
  maxWidth: "1400px",
  margin: "0 auto",
};

const headerWrap = {
  textAlign: "center",
  marginBottom: "clamp(50px, 6vw, 90px)",
};

const eyebrow = {
  color: "#c8a46a",
  fontSize: "clamp(16px, 3vw, 26px)",
  fontWeight: "800",
  letterSpacing: "2px",
  textTransform: "uppercase",
  marginBottom: "16px",
};

const title = {
  fontSize: "clamp(28px, 6vw, 64px)",
  lineHeight: "1.2",
  margin: "0 auto 16px",
  color: "#2b2420",
  maxWidth: "900px",
};

const intro = {
  color: "#7c6f68",
  maxWidth: "700px",
  margin: "0 auto",
  fontSize: "clamp(16px, 4vw, 20px)",
  lineHeight: "1.6",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", 
  gap: "clamp(16px, 4vw, 32px)",
  marginBottom: "clamp(50px, 6vw, 100px)",
};

const cardStyle = {
  width: "100%",
  padding: "clamp(20px, 4vw, 40px)",
  borderRadius: "24px",
  background: "linear-gradient(180deg, #fffaf6, #fff6f2)",
  border: "1px solid rgba(209, 138, 155, 0.25)",
  boxShadow: "0 20px 50px rgba(209, 138, 155, 0.12)",
  transition: "transform 0.25s ease, box-shadow 0.25s ease",
};

const cardHeader = {
  color: "#d18a9b",
  fontWeight: "800",
  fontSize: "clamp(26px, 4vw, 46px)",
  lineHeight: "1.05",
  whiteSpace: "nowrap",
  marginBottom: "10px",
};

const cardTitle = {
  fontSize: "clamp(18px, 4vw, 28px)",
  marginBottom: "10px",
  color: "#2b2420",
};

const accentLine = {
  width: "50px",
  height: "4px",
  borderRadius: "999px",
  background: "linear-gradient(135deg, #d18a9b, #e6c27a)",
  marginBottom: "16px",
};

const listStyle = {
  listStyle: "none",
  padding: 0,
  margin: 0,
};

const listItem = {
  display: "flex",
  alignItems: "flex-start",
  gap: "10px",
  marginBottom: "12px",
  color: "#6b5e57",
  fontSize: "clamp(14px, 3.5vw, 16px)",
  lineHeight: "1.6",
};

const heart = {
  color: "#d18a9b",
  fontSize: "14px",
  marginTop: "2px",
};

const text = {
  flex: 1,
};

const bottomGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", // FIXED
  gap: "clamp(16px, 4vw, 32px)",
};

const bottomCard = {
  padding: "clamp(20px, 5vw, 50px)",
  borderRadius: "24px",
  background: "rgba(255, 250, 246, 0.95)",
  border: "1px solid #eadfd6",
  borderLeft: "5px solid #d18a9b",
  boxShadow: "0 18px 50px rgba(200, 164, 106, 0.12)",
};

const bottomTitle = {
  color: "#2b2420",
  fontSize: "clamp(24px, 5vw, 42px)",
  marginBottom: "10px",
};

const bottomText = {
  color: "#7c6f68",
  fontSize: "clamp(15px, 4vw, 20px)",
  lineHeight: "1.6",
};
