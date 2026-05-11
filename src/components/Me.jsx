import React from "react";

const Me = () => {
  const handleClick = (e, link) => {
    const btn = e.currentTarget;

    btn.style.transform = "scale(0.97)";
    btn.style.boxShadow = "0 0 25px rgba(209, 138, 155, 0.6)";

    setTimeout(() => {
      btn.style.transform = "scale(1)";
      btn.style.boxShadow = "0 12px 28px rgba(209, 138, 155, 0.3)";
      window.open(link, "_blank");
    }, 120);
  };

  const handlePrimaryHover = (e) => {
    e.currentTarget.style.boxShadow = "0 0 30px rgba(209, 138, 155, 0.6)";
    e.currentTarget.style.transform = "translateY(-2px)";
  };

  const handlePrimaryLeave = (e) => {
    e.currentTarget.style.boxShadow = "0 12px 28px rgba(209, 138, 155, 0.3)";
    e.currentTarget.style.transform = "translateY(0)";
  };

  const handleSecondaryHover = (e) => {
    e.currentTarget.style.boxShadow = "0 0 25px rgba(200, 164, 106, 0.45)";
    e.currentTarget.style.transform = "translateY(-2px)";
  };

  const handleSecondaryLeave = (e) => {
    e.currentTarget.style.boxShadow = "none";
    e.currentTarget.style.transform = "translateY(0)";
  };

  const handleNavHover = (e) => {
    e.currentTarget.style.background = "rgba(255, 250, 246, 0.28)";
    e.currentTarget.style.boxShadow = "0 0 18px rgba(200, 164, 106, 0.75)";
  };

  const handleNavLeave = (e) => {
    e.currentTarget.style.background = "transparent";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <section id="home" style={section}>
      {/* NAVBAR */}
      <nav style={navbar}>
        <h2 style={navTitle}>Welcome to my page!</h2>

        <div style={navLinks}>
          {[
            ["Home", "home"],
            ["About", "about"],
            ["Sourcing", "sourcing"],
            ["Outreach", "outreach"],
            ["Hobbies", "hobbies"],
          ].map(([label, id]) => (
            <a
              key={id}
              style={linkStyle}
              onMouseEnter={handleNavHover}
              onMouseLeave={handleNavLeave}
              onClick={() =>
                document.getElementById(id)?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO CARD */}
      <div style={heroCard}>
        {/* LEFT */}
        <div style={leftColumn}>
          <h1 style={title}>Hi, I’m Jia</h1>

          <h2 style={subtitle}>
            A former software engineer pivoting into{" "}
            <span style={{ color: "#d18a9b" }}>technical recruiting.</span>
          </h2>

          <p style={description}>
            I identify engineering talent through more than resumes and keywords.
            My background in production systems gives me the ability to evaluate candidates
            the way engineers evaluate each other. I identify strong candidates through
            signal-based sourcing.
          </p>

          <p style={description}>
            I’m transitioning into recruiting because I’ve been on the engineering side of the hiring process. 
            I know what it takes to perform in real systems, and I want to help teams identify 
            candidates who can do the same.
          </p>

          <div style={buttonStack}>
            <button
              style={primaryButton}
              onClick={(e) =>
                handleClick(e, "/Jennifer Zheng Engineer Resume.pdf")
              }
              onMouseEnter={handlePrimaryHover}
              onMouseLeave={handlePrimaryLeave}
            >
              View Engineering Resume
            </button>

            <button
              style={primaryButton}
              onClick={(e) =>
                handleClick(e, "/Jennifer Zheng Recruiter Resume.pdf")
              }
              onMouseEnter={handlePrimaryHover}
              onMouseLeave={handlePrimaryLeave}
            >
              View Recruiter Resume
            </button>

            <button
              style={secondaryButton}
              onMouseEnter={handleSecondaryHover}
              onMouseLeave={handleSecondaryLeave}
              onClick={() => {
                const mailto = "mailto:jennyzfire@gmail.com";
                const gmail =
                  "https://mail.google.com/mail/?view=cm&to=jennyzfire@gmail.com";

                window.location.href = mailto;

                setTimeout(() => {
                  window.open(gmail, "_blank");
                }, 300);
              }}
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div style={rightColumn}>
          <div style={imageRing}>
            <img src="/portfolio.jpg" alt="profile" style={profileImage} />
          </div>

          <p style={tagline}>ENGINEERING → TECHNICAL RECRUITING</p>
        </div>
      </div>
    </section>
  );
};

/* STYLES */

const section = {
  width: "100%",
  padding:
    "clamp(115px, 14vw, 150px) clamp(16px, 4vw, 70px) clamp(24px, 4vw, 50px)",
  background: "transparent",
  overflowX: "hidden",
};

const navbar = {
  width: "100%",
  maxWidth: "1600px",
  margin: "0 auto",
  padding: "12px clamp(12px, 3vw, 28px)",
  background: "linear-gradient(135deg, #f4b6c2, #d18a9b)",
  border: "1px solid #d18a9b",
  boxShadow: "0 12px 35px rgba(209, 138, 155, 0.35)",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "12px",
  flexWrap: "wrap",
  boxSizing: "border-box",
};

const navTitle = {
  margin: 0,
  color: "#2b2420",
  fontSize: "clamp(17px, 3.8vw, 28px)",
  whiteSpace: "nowrap",
};

const navLinks = {
  display: "flex",
  gap: "clamp(6px, 1vw, 14px)",
  flexWrap: "nowrap",
  overflowX: "auto",
  maxWidth: "100%",
  scrollbarWidth: "none",
};

const heroCard = {
  width: "100%",
  maxWidth: "1400px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
  alignItems: "center",
  gap: "clamp(34px, 6vw, 90px)",
  background: "#fdf7f4",
  borderRadius: "clamp(24px, 4vw, 40px)",
  padding: "clamp(28px, 6vw, 88px)",
  border: "1px solid #eadfd6",
  boxShadow: "0 30px 90px rgba(200, 164, 106, 0.18)",
  boxSizing: "border-box",
};

const leftColumn = {
  minWidth: 0,
};

const rightColumn = {
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const title = {
  fontSize: "clamp(42px, 9vw, 72px)",
  margin: "0 0 16px 0",
  color: "#2b2420",
  lineHeight: "1.05",
};

const subtitle = {
  fontSize: "clamp(19px, 4.6vw, 28px)",
  fontWeight: "600",
  marginBottom: "16px",
  color: "#2b2420",
  lineHeight: "1.3",
};

const description = {
  color: "#6b5e57",
  maxWidth: "620px",
  fontSize: "clamp(15px, 3.8vw, 19px)",
  lineHeight: "1.7",
  marginBottom: "24px",
};

const buttonStack = {
  display: "flex",
  flexDirection: "column",
  gap: "14px",
  alignItems: "flex-start",
  width: "100%",
};

const imageRing = {
  width: "clamp(230px, 42vw, 500px)",
  height: "clamp(230px, 42vw, 500px)",
  maxWidth: "100%",
  borderRadius: "50%",
  padding: "6px",
  background: "linear-gradient(135deg, #ff9ecb, #e6c27a)",
  boxShadow: "0 20px 60px rgba(209, 138, 155, 0.25)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
};

const profileImage = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center top",
  borderRadius: "50%",
  background: "#fdf7f4",
};

const tagline = {
  color: "#c8a46a",
  fontSize: "clamp(13px, 3.2vw, 20px)",
  fontWeight: "700",
  letterSpacing: "clamp(1.4px, 0.4vw, 2.5px)",
  marginTop: "clamp(24px, 4vw, 50px)",
  textAlign: "center",
};

const linkStyle = {
  color: "#2b2420",
  textDecoration: "none",
  fontSize: "clamp(14px, 3.2vw, 19px)",
  fontWeight: "700",
  cursor: "pointer",
  padding: "8px 12px",
  borderRadius: "999px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  background: "transparent",
  whiteSpace: "nowrap",
  transition: "background 0.25s ease, box-shadow 0.25s ease",
};

const primaryButton = {
  width: "min(100%, 360px)",
  padding: "15px 24px",
  borderRadius: "999px",
  border: "none",
  background: "#d18a9b",
  color: "white",
  fontWeight: "700",
  fontSize: "clamp(15px, 3.8vw, 20px)",
  cursor: "pointer",
  boxShadow: "0 12px 28px rgba(209, 138, 155, 0.3)",
  transition: "transform 0.25s ease, box-shadow 0.25s ease",
};

const secondaryButton = {
  width: "min(100%, 360px)",
  padding: "15px 24px",
  borderRadius: "999px",
  border: "2px solid #eadfd6",
  background: "#fffaf6",
  color: "#2b2420",
  fontWeight: "700",
  fontSize: "clamp(15px, 3.8vw, 20px)",
  cursor: "pointer",
  transition: "transform 0.25s ease, box-shadow 0.25s ease",
};

export default Me;
