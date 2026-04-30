import React from "react";

const Hobbies = () => {
  return (
    <section id="hobbies" style={section}>
      <div style={container}>
        <div style={header}>
          <p style={eyebrow}>Hobbies</p>
          <h2 style={title}>The creative side of how I think.</h2>
          <p style={intro}>
            Outside of work, I’m drawn to curiosity, craft, and bringing ideas
            to life.
          </p>
        </div>

        <div style={categoryStack}>
          {categories.map((category) => (
            <div key={category.title} style={categoryCard}>
              {category.title === "Cosplay" ? (
                <div style={cosplayLayout}>
                  <div style={cosplayHero}>
                    <img
                      src={category.images[0].src}
                      alt={category.title}
                      style={{
                        ...photo,
                        objectFit: "cover",
                        objectPosition: category.images[0].position,
                      }}
                    />
                  </div>

                  <div style={cosplayBottomGrid}>
                    {category.images.slice(1).map((image) => (
                      <div key={image.src} style={imageTile}>
                        <img
                          src={image.src}
                          alt={category.title}
                          style={{
                            ...photo,
                            objectFit: "cover",
                            objectPosition: image.position || "center",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div style={collage}>
                  {category.images.map((image) => (
                    <div key={image.src} style={imageTile}>
                      <img
                        src={image.src}
                        alt={category.title}
                        style={{
                          ...photo,
                          objectFit: "cover",
                          objectPosition: image.position || "center",
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}

              <div style={textPanel}>
                <p style={categoryNumber}>{category.number}</p>
                <h3 style={categoryTitle}>{category.title}</h3>
                <p style={categorySubtitle}>{category.subtitle}</p>
                <div style={accentLine}></div>
                <p style={categoryText}>{category.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;

const categories = [
  {
    number: "01",
    title: "Travel",
    subtitle: "Curiosity & perspective",
    text: "Travel keeps me curious and adaptable. I love seeing how different places, people, and environments shape the way we experience the world.",
    images: [
      { src: "/Travel Oasis.jpeg", position: "center" },
      { src: "/Travel Rivers.jpeg", position: "center" },
      { src: "/Travel Rainbow Stairs.JPG", position: "center" },
      { src: "/Travel Parrot.jpeg", position: "center top" },
    ],
  },
  {
    number: "02",
    title: "Sewing",
    subtitle: "Craft & patience",
    text: "Sewing gives me a space to slow down, work through details, and build something by hand. It’s creative, iterative, and very satisfying. I mostly make things for my dog!",
    images: [
      { src: "/Hobby Sewing Dog Sweater.jpeg", position: "center" },
      { src: "/Hobby Sewing Dog Sweater 2.jpeg", position: "center" },
      { src: "/Hobby Sewing Dog Bed.jpeg", position: "center" },
      { src: "/Hobby Sewing Dog Jacket.JPG", position: "center 30%" },
    ],
  },
  {
    number: "03",
    title: "Cosplay",
    subtitle: "Storytelling & execution",
    text: "Cosplay lets me combine design, character, and creativity. I love turning a concept into something visual, expressive, and real.",
    images: [
      { src: "/Cosplay Guzheng.jpg", position: "center 38%" },
      { src: "/Cosplay.jpeg", position: "center top" },
      { src: "/Cosplay Kimono.jpeg", position: "center" },
    ],
  },
];

const section = {
  minHeight: "100vh",
  padding: "clamp(40px, 4vw, 70px) clamp(24px, 5vw, 70px) clamp(120px, 9vw, 160px)",
  background: "transparent",
};

const container = {
  maxWidth: "min(92vw, 1500px)",
  margin: "0 auto",
};

const header = {
  textAlign: "center",
  marginBottom: "clamp(50px, 6vw, 80px)",
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
  fontSize: "clamp(42px, 5vw, 76px)",
  lineHeight: "1.05",
  letterSpacing: "-2px",
  margin: "0 0 18px",
};

const intro = {
  color: "#6b5e57",
  fontSize: "clamp(17px, 1.3vw, 22px)",
  lineHeight: "1.7",
  maxWidth: "760px",
  margin: "0 auto",
};

const categoryStack = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
  gap: "clamp(28px, 4vw, 48px)",
};

const categoryCard = {
  background: "rgba(255, 250, 246, 0.94)",
  border: "1px solid #eadfd6",
  borderRadius: "34px",
  padding: "28px",
  boxShadow: "0 24px 70px rgba(209, 138, 155, 0.14)",
};

const collage = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "220px 220px",
  gap: "14px",
  marginBottom: "28px",
};

const cosplayLayout = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "220px 220px",
  gap: "14px",
  marginBottom: "28px",
};

const cosplayHero = {
  borderRadius: "22px",
  overflow: "hidden",
  border: "1px solid #eadfd6",
  boxShadow: "0 14px 35px rgba(200, 164, 106, 0.12)",
  background: "#fffaf6",
  minHeight: 0,
};

const cosplayBottomGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "14px",
  minHeight: 0,
};

const imageTile = {
  borderRadius: "22px",
  overflow: "hidden",
  border: "1px solid #eadfd6",
  boxShadow: "0 14px 35px rgba(200, 164, 106, 0.12)",
  background: "#fffaf6",
  minHeight: 0,
};

const photo = {
  width: "100%",
  height: "100%",
  display: "block",
};

const textPanel = {
  padding: "4px 6px 6px",
};

const categoryNumber = {
  color: "#c8a46a",
  fontWeight: "800",
  letterSpacing: "2px",
  margin: "0 0 8px",
};

const categoryTitle = {
  color: "#d18a9b",
  fontSize: "clamp(34px, 3.2vw, 52px)",
  lineHeight: "1",
  margin: "0 0 10px",
};

const categorySubtitle = {
  color: "#2b2420",
  fontSize: "clamp(20px, 1.6vw, 26px)",
  fontWeight: "800",
  margin: "0 0 12px",
};

const accentLine = {
  width: "58px",
  height: "4px",
  borderRadius: "999px",
  background: "linear-gradient(135deg, #d18a9b, #e6c27a)",
  marginBottom: "16px",
};

const categoryText = {
  color: "#6b5e57",
  fontSize: "clamp(15px, 1.05vw, 17px)",
  lineHeight: "1.65",
  margin: 0,
};