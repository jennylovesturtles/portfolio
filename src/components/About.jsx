export default function About() {
  const cards = [
    {
      title: "Retail",
      subtitle: "Customer-facing",
      points: [
        "Kohls: Commission Sales Associate",
        "Cinemark: Assistant Manager",
        "Burger King: Cashier",
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
            My background blends people-facing experience with real engineering
            work — giving me a different perspective on how to evaluate,
            understand, and connect technical talent.
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
              I’m drawn to recruiting because it combines the parts of engineering I enjoyed most:
              communication, mentorship, trust-building, and understanding how people think.
            </p>
          </div>

          <div style={bottomCard}>
            <h3 style={bottomTitle}>Why Now?</h3>
            <p style={bottomText}>
              I’m ready to bring my engineering background into a people-centered role where I can
              help technical talent find the right opportunities and grow alongside strong teams.
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
  padding: "clamp(80px, 8vw, 140px) clamp(24px, 5vw, 70px)",
};

const container = {
  maxWidth: "min(92vw, 1500px)",
  margin: "0 auto",
};

const headerWrap = {
  textAlign: "center",
  marginBottom: "clamp(60px, 7vw, 100px)",
};

const eyebrow = {
  color: "#c8a46a",
  fontSize: "clamp(20px, 1.8vw, 28px)",
  fontWeight: "800",
  letterSpacing: "3px",
  textTransform: "uppercase",
  marginBottom: "20px",
};

const title = {
  fontSize: "clamp(36px, 4.5vw, 70px)",
  lineHeight: "1.1",
  letterSpacing: "-1.5px",
  margin: "0 auto 20px",
  color: "#2b2420",
  maxWidth: "1000px",
};

const intro = {
  color: "#7c6f68",
  maxWidth: "900px",
  margin: "0 auto",
  fontSize: "clamp(18px, 1.4vw, 22px)",
  lineHeight: "1.8",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "clamp(24px, 3vw, 40px)",
  marginBottom: "clamp(70px, 7vw, 110px)",
};

const cardStyle = {
  minHeight: "430px",
  padding: "clamp(34px, 3vw, 50px)",
  borderRadius: "32px",
  background: "linear-gradient(180deg, #fffaf6, #fff6f2)",
  border: "1px solid rgba(209, 138, 155, 0.25)",
  boxShadow: "0 26px 75px rgba(209, 138, 155, 0.16)",
  transition: "transform 0.25s ease, box-shadow 0.25s ease",
};

const cardHeader = {
  color: "#d18a9b",
  fontWeight: "800",
  fontSize: "clamp(34px, 3.2vw, 54px)",
  marginBottom: "12px",
};

const cardTitle = {
  fontSize: "clamp(22px, 2vw, 32px)",
  marginBottom: "12px",
  color: "#2b2420",
};

const accentLine = {
  width: "56px",
  height: "4px",
  borderRadius: "999px",
  background: "linear-gradient(135deg, #d18a9b, #e6c27a)",
  marginBottom: "20px",
};

const listStyle = {
  listStyle: "none",
  padding: 0,
  margin: 0,
};

const listItem = {
  display: "flex",
  alignItems: "flex-start",
  gap: "12px",
  marginBottom: "16px",
  color: "#6b5e57",
  fontSize: "clamp(15px, 1.1vw, 17px)",
  lineHeight: "1.8",
};

const heart = {
  width: "20px",
  textAlign: "center",
  color: "#d18a9b",
  fontSize: "16px",
  marginTop: "4px",
};

const text = {
  flex: 1,
};

const bottomGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
  gap: "clamp(24px, 3vw, 40px)",
};

const bottomCard = {
  padding: "clamp(38px, 4vw, 64px)",
  borderRadius: "34px",
  background: "rgba(255, 250, 246, 0.95)",
  border: "1px solid #eadfd6",
  borderLeft: "6px solid #d18a9b",
  boxShadow: "0 24px 70px rgba(200, 164, 106, 0.15)",
};

const bottomTitle = {
  color: "#2b2420",
  fontSize: "clamp(34px, 3vw, 50px)",
  marginBottom: "12px",
};

const bottomText = {
  color: "#7c6f68",
  fontSize: "clamp(18px, 1.4vw, 22px)",
  lineHeight: "1.8",
};