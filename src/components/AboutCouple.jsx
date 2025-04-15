import React, { useEffect, useRef } from "react";
import couple1 from "../assets/couple1.jpeg";
import couple2 from "../assets/couple2.jpeg";
import couple3 from "../assets/couple3.jpeg";
import couple4 from "../assets/couple4.jpeg";
import ranaSmile from "../assets/rana_daa_smile.jpeg";
import ankitaSmile from "../assets/ankita_smile.jpeg";

export default function AboutCouple() {
  const couplePhotos = [couple1, couple2, couple3, couple4];
  const duplicatedPhotos = [...couplePhotos, ...couplePhotos];
  const isDarkMode = false;
  const galleryRef = useRef(null);

  const styles = {
    aboutCoupleSection: {
      padding: "2.5rem 1.5rem",
      backgroundColor: "#fff",
      color: "#4a5568",
      textAlign: "center",
      marginTop: "2rem",
      marginBottom: "2rem",
    },
    darkAboutCoupleSection: {
      backgroundColor: "#2d3748",
      color: "#e5e7eb",
    },
    sectionTitle: {
      fontSize: "1.875rem",
      fontWeight: 700,
      color: "#c05621",
      marginBottom: "1.5rem",
    },
    darkSectionTitle: {
      color: "#f6ad55",
    },
    couplePhotosContainer: {
      maxWidth: "415px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: "2rem",
      marginBottom: "1.5rem",
    },
    coupleInfo: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    profileImage: {
      width: "8rem",
      height: "8rem",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "0.5rem",
    },
    ranaImage: {
      border: "0.25rem solid #90cdf4",
    },
    ankitaImage: {
      border: "0.25rem solid #fbb6ce",
    },
    profileName: {
      fontSize: "1.125rem",
      fontWeight: 600,
    },
    ranaName: {
      color: "#90cdf4",
    },
    darkRanaName: {
      color: "#f6ad55",
    },
    ankitaName: {
      color: "#fbb6ce",
    },
    darkAnkitaName: {
      color: "#90cdf4",
    },
    aboutText: {
      maxWidth: "36rem",
      margin: "0 auto 1.5rem auto",
      fontSize: "1.125rem",
      lineHeight: 1.625,
    },
    highlightYellow: {
      fontWeight: 600,
      color: "#c05621",
    },
    darkHighlightYellow: {
      color: "#f6ad55",
    },
    highlightBlue: {
      fontWeight: 600,
      color: "#4299e1",
    },
    darkHighlightBlue: {
      color: "#90cdf4",
    },
    italicQuote: {
      fontStyle: "italic",
      fontWeight: 500,
      color: "#9e7839",
    },
    darkItalicQuote: {
      color: "#fde047",
    },
    photoGallery: {
      maxWidth: "415px",
      overflow: "hidden",
      display: "flex",
      gap: "1rem",
      paddingLeft: "0.5rem",
      paddingBottom: "1rem",
      position: "relative",
      height: "260px",
    },
    photoCard: {
      minWidth: "min(15.625rem, 80vw)",
      borderRadius: "0.375rem",
      overflow: "hidden",
      border: "0.25rem solid #fbb6ce",
      flexShrink: 0,
    },
    darkPhotoCard: {
      borderColor: "#f6ad55",
    },
    photo: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.3s ease-in-out",
    },
  };

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    let animationId;
    const scrollSpeed = 0.5;

    const animateScroll = () => {
      gallery.scrollLeft += scrollSpeed;
      if (gallery.scrollLeft >= gallery.scrollWidth / 2) {
        gallery.scrollLeft = 0;
      }
      animationId = requestAnimationFrame(animateScroll);
    };

    animateScroll();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section
      style={
        isDarkMode
          ? { ...styles.aboutCoupleSection, ...styles.darkAboutCoupleSection }
          : styles.aboutCoupleSection
      }
    >
      <h2
        style={
          isDarkMode
            ? { ...styles.sectionTitle, ...styles.darkSectionTitle }
            : styles.sectionTitle
        }
      >
        About the Couple 💞
      </h2>

      <div style={styles.couplePhotosContainer}>
        <div style={styles.coupleInfo}>
          <img
            src={ranaSmile}
            alt="Rana Daa"
            style={{ ...styles.profileImage, ...styles.ranaImage }}
          />
          <h3
            style={
              isDarkMode
                ? { ...styles.profileName, ...styles.darkRanaName }
                : { ...styles.profileName, ...styles.ranaName }
            }
          >
            महानामा वाघमारे
          </h3>
        </div>
        <div style={styles.coupleInfo}>
          <img
            src={ankitaSmile}
            alt="Ankita"
            style={{ ...styles.profileImage, ...styles.ankitaImage }}
          />
          <h3
            style={
              isDarkMode
                ? { ...styles.profileName, ...styles.darkAnkitaName }
                : { ...styles.profileName, ...styles.ankitaName }
            }
          >
            अंकिता लगाडे 
          </h3>
        </div>
      </div>

      <div style={styles.aboutText}>
        <p>
          आमचा लाडका{" "}
          <span
            style={isDarkMode ? styles.darkHighlightYellow : styles.highlightYellow}
          >
            Rana Daa
          </span>{" "}
          ❤️ – नावातच दमदारपणा आहे! स्वभावाने प्रेमळ, वागण्यात मोकळा आणि
          प्रत्येकाच्या मनाचा राजा...
        </p>
        <p>
          {" "}
          <span
            style={isDarkMode ? styles.darkHighlightBlue : styles.highlightBlue}
          >
            अंकिता
          </span>{" "}
          ...तिच्या पावलांनी आमच्या घरी आनंदाचं सोनं उतरणार आहे!
        </p>
        <p>
          Their paths crossed, hearts aligned, and together they now begin a
          journey of mutual respect, trust, and joy.
        </p>
        <p style={isDarkMode ? styles.darkItalicQuote : styles.italicQuote}>
          “Let this be not just a wedding, but a celebration of shared values,
          purpose, and peace.”
        </p>
      </div>

      <div style={styles.photoGallery} ref={galleryRef}>
        {duplicatedPhotos.map((src, i) => (
          <div
            key={i}
            style={
              isDarkMode
                ? { ...styles.photoCard, ...styles.darkPhotoCard }
                : styles.photoCard
            }
          >
            <img
              src={src}
              alt={`Couple Photo ${i + 1}`}
              style={styles.photo}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
