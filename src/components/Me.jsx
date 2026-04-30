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
    e.currentTarget.style.boxShadow =
      "0 0 30px rgba(209, 138, 155, 0.6)";
    e.currentTarget.style.transform = "translateY(-2px)";
  };

  const handlePrimaryLeave = (e) => {
    e.currentTarget.style.boxShadow =
      "0 12px 28px rgba(209, 138, 155, 0.3)";
    e.currentTarget.style.transform = "translateY(0)";
  };

  const handleSecondaryHover = (e) => {
    e.currentTarget.style.boxShadow =
      "0 0 25px rgba(200, 164, 106, 0.45)";
    e.currentTarget.style.transform = "translateY(-2px)";
  };

  const handleSecondaryLeave = (e) => {
    e.currentTarget.style.boxShadow = "none";
    e.currentTarget.style.transform = "translateY(0)";
  };

const handleNavHover = (e) => {
  e.currentTarget.style.background = "rgba(255, 250, 246, 0.28)";
  e.currentTarget.style.boxShadow =
    "0 0 18px rgba(200, 164, 106, 0.75)";
};

const handleNavLeave = (e) => {
  e.currentTarget.style.background = "transparent";
  e.currentTarget.style.boxShadow = "none";
};

  return (
    <section
      id="home"
      style={{
        paddingTop: "clamp(120px, 10vw, 160px)",
        paddingBottom: "clamp(10px, 2vw, 20px)",
        background: "transparent",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          width: "100%",
          maxWidth: "min(92vw, 1600px)",
          margin: "0",
          padding: "14px 22px",
          borderRadius: "0",

          background: "linear-gradient(135deg, #f4b6c2, #d18a9b)",
          border: "1px solid #d18a9b",
          boxShadow: "0 12px 35px rgba(209, 138, 155, 0.35)",

          position: "fixed",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,

          height: "70px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <h2
          style={{
            margin: 0,
            color: "#2b2420",
            fontSize: "clamp(20px, 2vw, 28px)",
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
        >
          Welcome to my page!
        </h2>

        <div
          style={{
            display: "flex",
            gap: "clamp(10px, 1.4vw, 18px)",
            flexWrap: "wrap",
          }}
        >
          <a
            style={linkStyle}
            onMouseEnter={handleNavHover}
            onMouseLeave={handleNavLeave}
            onClick={() =>
              document.getElementById("home")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Home
          </a>

          <a
            style={linkStyle}
            onMouseEnter={handleNavHover}
            onMouseLeave={handleNavLeave}
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            About
          </a>

          <a
            style={linkStyle}
            onMouseEnter={handleNavHover}
            onMouseLeave={handleNavLeave}
            onClick={() =>
              document.getElementById("sourcing")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Sourcing
          </a>

          <a
            style={linkStyle}
            onMouseEnter={handleNavHover}
            onMouseLeave={handleNavLeave}
            onClick={() =>
              document.getElementById("outreach")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Outreach
          </a>

            <a
            style={linkStyle}
            onMouseEnter={handleNavHover}
            onMouseLeave={handleNavLeave}
            onClick={() =>
              document.getElementById("hobbies")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Hobbies
          </a>
        </div>
      </nav>

      {/* HERO CARD */}
      <div
        style={{
          width: "100%",
          maxWidth: "min(92vw, 1600px)",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "clamp(40px, 6vw, 100px)",
          background: "#fdf7f4",
          borderRadius: "clamp(24px, 3vw, 40px)",
          padding: "clamp(48px, 6vw, 96px)",
          border: "1px solid #eadfd6",
          boxShadow: "0 30px 90px rgba(200, 164, 106, 0.18)",
        }}
      >
        {/* LEFT */}
        <div style={{ flex: "1 1 500px" }}>
          <h1 style={title}>Hi, I’m Jia</h1>

          <h2 style={subtitle}>
            A former software engineer pivoting into{" "}
            <span style={{ color: "#d18a9b" }}>
              technical recruiting.
            </span>
          </h2>

          <p style={description}>
            I bring hands-on engineering experience into sourcing, screening,
            and evaluating technical talent — with the ability to understand
            candidates beyond resumes and keywords.
          </p>

          <p style={description}>
            My passion for continual learning and my network of engineering friends allows
            me to continue growing my technical knowledge in this rapidly changing industry.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              alignItems: "flex-start",
            }}
          >
            <button
              style={primaryButton}
              onClick={(e) =>
                handleClick(e, "/Jennifer Zheng Engineer Resume.pdf")
              }
              onMouseEnter={handlePrimaryHover}
              onMouseLeave={handlePrimaryLeave}
            >
              View Engineering Experience
            </button>

            <button
              style={primaryButton}
              onClick={(e) =>
                handleClick(e, "/Jennifer Zheng Recruiter Resume.pdf")
              }
              onMouseEnter={handlePrimaryHover}
              onMouseLeave={handlePrimaryLeave}
            >
              View Recruiter Experience
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
        <div
          style={{
            flex: "1 1 400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "clamp(260px, 30vw, 520px)",
              height: "clamp(260px, 30vw, 520px)",
              borderRadius: "50%",
              padding: "6px",
              background: "linear-gradient(135deg, #ff9ecb, #e6c27a)",
              boxShadow: "0 20px 60px rgba(209, 138, 155, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/portfolio.jpg"
              alt="profile"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                borderRadius: "50%",
                background: "#fdf7f4",
              }}
            />
          </div>

          <p style={tagline}>
            ENGINEERING → TECHNICAL RECRUITING
          </p>
        </div>
      </div>
    </section>
  );
};

/* STYLES */

const title = {
  fontSize: "clamp(40px, 5vw, 72px)",
  margin: "0 0 16px 0",
  color: "#2b2420",
  lineHeight: "1.05",
};

const subtitle = {
  fontSize: "clamp(20px, 2vw, 28px)",
  fontWeight: "600",
  marginBottom: "16px",
  color: "#2b2420",
};

const description = {
  color: "#6b5e57",
  maxWidth: "560px",
  fontSize: "clamp(16px, 1.2vw, 19px)",
  lineHeight: "1.7",
  marginBottom: "28px",
};

const tagline = {
  color: "#c8a46a",
  fontSize: "clamp(16px, 1.2vw, 20px)",
  fontWeight: "700",
  letterSpacing: "2.5px",
  marginTop: "clamp(40px, 3vw, 60px)",
};

const linkStyle = {
  color: "#2b2420",
  textDecoration: "none",
  fontSize: "clamp(16px, 1.3vw, 20px)",
  fontWeight: "700",
  cursor: "pointer",
  padding: "10px 16px",
  borderRadius: "999px",

  // important so glow is visible
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  background: "transparent",

  transition: "background 0.25s ease, box-shadow 0.25s ease",
};

const primaryButton = {
  width: "clamp(260px, 20vw, 360px)",
  padding: "16px 28px",
  borderRadius: "999px",
  border: "none",
  background: "#d18a9b",
  color: "white",
  fontWeight: "700",
  fontSize: "clamp(16px, 1.2vw, 20px)",
  cursor: "pointer",
  boxShadow: "0 12px 28px rgba(209, 138, 155, 0.3)",
};

const secondaryButton = {
  width: "clamp(260px, 20vw, 360px)",
  padding: "16px 28px",
  borderRadius: "999px",
  border: "2px solid #eadfd6",
  background: "#fffaf6",
  color: "#2b2420",
  fontWeight: "700",
  fontSize: "clamp(16px, 1.2vw, 20px)",
  cursor: "pointer",
};

export default Me;