import React from "react";
import styles from "./AboutText.module.css";

const AboutText = () => {
  return (
    <div className={styles.divAbout}>
      <h1 className={styles.h1About}>About Us</h1>
      <p className={styles.textAbout}>
        Welcome to our website! We are a team of passionate pop culture lovers
        and fans of the exciting world of the TV series "Rick and Morty." This
        project was born as part of our practice program in the Frontend
        Development program at "Soy Henry."
      </p>
      <h1 className={styles.h1About}>Our Purpose</h1>
      <p className={styles.textAbout}>
        In this space, we aim to provide you with a unique experience related to
        "Rick and Morty," one of the most creative and entertaining series on
        current television. Our goal is to share our love for the series, its
        irreverent humor, extravagant science fiction, and unforgettable
        characters.
      </p>
      <h1 className={styles.h1About}>
        Exploring the "Rick and Morty" Multiverse
      </h1>
      <p className={styles.textAbout}>
        Through our site, you can explore and discover fascinating details about
        the episodes, characters, and theories behind "Rick and Morty." We
        invite you to delve into the intriguing multiverse created by Dan Harmon
        and Justin Roiland. Whether you're a lifelong fan or looking for
        information about the series, you'll find interesting and entertaining
        content here!
      </p>
      <h1 className={styles.h1About}>Our Commitment</h1>
      <p className={styles.textAbout}>
        We want this page to be a comprehensive resource for all "Rick and
        Morty" fans. From episode reviews to in-depth analyses, we are committed
        to providing you with quality information and sharing our passion for
        this innovative series.
      </p>
      <h1 className={styles.h1About}>Join Our Community</h1>
      <p className={styles.textAbout}>
        We invite you to be part of our community. Feel free to explore our
        site, leave your comments, and share your theories and thoughts about
        the series. We're excited for you to join us on this journey through the
        "Rick and Morty" multiverse! Thank you for visiting and enjoying our
        project. We hope you have fun exploring everything we have to offer!
      </p>
      <a
        className={styles.contactAbout}
        href="https://github.com/pablo0261"
        target="_blank"
      >
        Contact Me!
      </a>
    </div>
  );
};

export default AboutText;

