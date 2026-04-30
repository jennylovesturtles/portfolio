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
  padding:
    "clamp(40px, 6vw, 70px) clamp(16px, 4vw, 70px) clamp(80px, 10vw, 160px)",
  background: "transparent",
};

const container = {
  width: "100%",
  maxWidth: "1400px", 
  margin: "0 auto",
};

const header = {
  textAlign: "center",
  marginBottom: "clamp(40px, 7vw, 80px)",
};

const eyebrow = {
  color: "#d18a9b",
  fontSize: "clamp(14px, 3vw, 20px)",
  fontWeight: "800",
  letterSpacing: "3px",
  textTransform: "uppercase",
  marginBottom: "14px",
};

const title = {
  color: "#2b2420",
  fontSize: "clamp(30px, 8vw, 76px)",
  lineHeight: "1.12",
  letterSpacing: "-1px",
  margin: "0 0 16px",
};

const intro = {
  color: "#6b5e57",
  fontSize: "clamp(15px, 4vw, 22px)",
  lineHeight: "1.65",
  maxWidth: "720px",
  margin: "0 auto",
};

const categoryStack = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
  gap: "clamp(20px, 5vw, 48px)",
};

const categoryCard = {
  width: "100%",
  minWidth: 0,
  background: "rgba(255, 250, 246, 0.94)",
  border: "1px solid #eadfd6",
  borderRadius: "28px",
  padding: "clamp(16px, 4vw, 28px)",
  boxShadow: "0 20px 55px rgba(209, 138, 155, 0.12)",
};

const collage = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridAutoRows: "clamp(130px, 32vw, 220px)",
  gap: "clamp(8px, 2.5vw, 14px)",
  marginBottom: "clamp(20px, 5vw, 28px)",
};

const cosplayLayout = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "clamp(8px, 2.5vw, 14px)",
  marginBottom: "clamp(20px, 5vw, 28px)",
};

const cosplayHero = {
  height: "clamp(180px, 48vw, 260px)",
  borderRadius: "20px",
  overflow: "hidden",
  border: "1px solid #eadfd6",
  boxShadow: "0 12px 28px rgba(200, 164, 106, 0.12)",
  background: "#fffaf6",
  minWidth: 0,
};

const cosplayBottomGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "clamp(8px, 2.5vw, 14px)",
  minWidth: 0,
};

const imageTile = {
  height: "100%",
  minHeight: "clamp(130px, 32vw, 220px)",
  borderRadius: "20px",
  overflow: "hidden",
  border: "1px solid #eadfd6",
  boxShadow: "0 12px 28px rgba(200, 164, 106, 0.12)",
  background: "#fffaf6",
  minWidth: 0,
};

const photo = {
  width: "100%",
  height: "100%",
  display: "block",
};

const textPanel = {
  padding: "2px 2px 4px",
};

const categoryNumber = {
  color: "#c8a46a",
  fontWeight: "800",
  letterSpacing: "2px",
  margin: "0 0 8px",
};

const categoryTitle = {
  color: "#d18a9b",
  fontSize: "clamp(28px, 7vw, 52px)",
  lineHeight: "1",
  margin: "0 0 10px",
};

const categorySubtitle = {
  color: "#2b2420",
  fontSize: "clamp(18px, 4.5vw, 26px)",
  fontWeight: "800",
  margin: "0 0 12px",
};

const accentLine = {
  width: "54px",
  height: "4px",
  borderRadius: "999px",
  background: "linear-gradient(135deg, #d18a9b, #e6c27a)",
  marginBottom: "14px",
};

const categoryText = {
  color: "#6b5e57",
  fontSize: "clamp(14px, 3.7vw, 17px)",
  lineHeight: "1.65",
  margin: 0,
};