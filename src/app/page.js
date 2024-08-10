import Image from "next/image";
import styles from "./_ui/home.module.css";
import NavBar from "./_ui/navbar/page";
import TechStack from "./_ui/techStack/page";
import Projects from "./_ui/projects/page";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";

export default function Home() {
  var data = [
    {
      imgPath: "/Projects/videoGen.png",
      isBlog: false,
      title: "Multilingual Animation Generator",
      description:
        "This project presents a novel AI-powered system for automatic video generation from text input. Supporting Hindi, Punjabi, and English languages, the system allows users to seamlessly convert written content into high-quality videos. Users can choose their preferred output language (Hindi or English) for the generated video.",
      ghLink:
        "https://github.com/namanviber/Multilingual_Animation_Generator_Platform",
    },
    {
      imgPath: "/Projects/legalAi.png",
      isBlog: false,
      title: "Legal Document Summarizer",
      description:
        "This project focused on developing a specialized AI tool for summarizing legal documents. By fine-tuning several large language models on a comprehensive dataset of legal documents from the UK and India, the project aimed to improve the ability to generate concise and accurate summaries tailored for the legal domain.",
      ghLink: "https://github.com/namanviber/Legal-AI-Summarizer",
      demoLink: "https://huggingface.co/spaces/namanviber/LegalAISummarizer",
    },
    {
      imgPath: "/Projects/flightPred.png",
      isBlog: false,
      title: "Flight Delay Prediction",
      description:
        "It is a weather data-based flight delay prediction system using a Random Forest model and evaluated several other machine learning models to ensure optimal performance. This involved data preprocessing, model training, and thorough evaluation to accurately predict delays, enhancing decision-making processes for airlines and passengers",
      ghLink: "https://github.com/namanviber/Flight-Delay-Prediction",
      demoLink:
        "https://huggingface.co/spaces/namanviber/Flight_Delay_Prediction",
    },
    {
      imgPath: "/Projects/movigo.png",
      isBlog: false,
      title: "Movie Recommendation Application",
      description:
        "Movigo, a movie recommendation application which uses collaborative filtering to provide personalized movie recommendations. It was built on Flutter framework, ensuring a seamless integration of advanced recommendation algorithms with an intuitive user interface.",
      ghLink: "https://github.com/namanviber/movigo",
      demoLink: "https://bit.ly/43dUUEs",
    },
    {
      imgPath: "/Projects/gameghoul.png",
      isBlog: false,
      title: "Gaming Blog & Shopping Website",
      description:
        "A dynamic gaming website featuring gaming-related content, blogs, reviews, and a shop for merchandise and accessories.",
      ghLink: "https://github.com/namanviber/Game-Ghoul-Website",
      demoLink: "https://namanviber.github.io/",
    },
    {
      imgPath: "/Projects/imgforg.png",
      isBlog: false,
      title: "Image Forgery Detection",
      description:
        "An image forgery detection system using digital image processing techniques. This involved implementing algorithms to analyze and identify signs of manipulation in images, ensuring the detection of forgeries with high accuracy and reliability.",
      ghLink: "https://github.com/namanviber/Image-Forgery-Detection-DIP",
      demoLink: "https://detectimagetampering.streamlit.app/",
    },
  ];

  return (
    <div className={styles.container}>
      <NavBar />

      <div className={styles.home} id="home">
        <div className={styles.box}>
          <div className={styles.subBox}>
            <div className={styles.text}>
              <h1>Hi,</h1>
              <h3>I'm Naman Jain.</h3>
              <h6>I design and code simple yet beautiful websites.</h6>
            </div>
          </div>
          <div className={styles.subBox}>
            <Image
              className={styles.pic}
              src="/profile_emoji.png"
              alt="Profile Pic"
              width={300}
              height={400}
            />
          </div>
        </div>
        <div className={styles.contacticon}>
          <a
            href="https://www.linkedin.com/in/namanviber/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={50} color="#fff" />
          </a>
          <a
            href="https://github.com/namanviber"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={50} color="#fff" />
          </a>
          <a href="mailto:namanviber@gmail.com">
            <FaEnvelope size={50} color="#fff" />
          </a>
          <a
            href="https://www.instagram.com/naman_viber/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={50} color="#fff" />
          </a>
          <span className={styles.contactline}></span>
        </div>
      </div>

      <div className={styles.about} id="about">
        <div className={styles.desc}>
          <h1 className={styles.darkHeading}>
            <strong>About Me</strong>
          </h1>
          <div className={styles.content}>
            <div className={styles.aboutme}>
              <p>
                👋 Hello, my name is Naman Jain, and I am a full stack software
                developer from Panipat. With a passion for coding and problem
                solving, I have honed my skills to become an expert in
                developing innovative solutions.{" "}
              </p>
              <p>
                I am constantly seeking to improve my knowledge and stay updated
                with the latest technologies 🎓. In my free time, I enjoy
                reading about history and exploring new developments in the tech
                world 🔍.{" "}
              </p>
              <p>
                My expertise lies in mobile and web development, particularly
                with React and Flutter frameworks 📱. I am also well-versed in
                coding languages such as C++ and Python 💻. Additionally, I have
                a deep understanding of deep learning and large language models.{" "}
              </p>
              <p>
                🌱 With a strong attention to detail and a drive to continuously
                learn and improve, I am dedicated to delivering high-quality and
                efficient solutions. I am always open to new challenges and
                opportunities to further enhance my skills.
              </p>
              <p>
                Thank you for taking the time to read my summary. I look forward
                to connecting with fellow professionals and exploring potential
                collaborations 🤝. Let's create something amazing together.
              </p>
            </div>
            <Image
              className={styles.avatar}
              src="/profile.jpg"
              alt="Avatar"
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>

      <TechStack />

      <div className={styles.project} id="project">
        <h1 className={styles.darkHeading}>
          <strong>My Recent Works</strong>
        </h1>
        <div className={styles.projectcards}>
          {data.map((project, index) => (
            <Projects key={index} data={project} />
          ))}
        </div>
      </div>

      <div className={styles.resume} id="resume">
        <h1 className={styles.lightHeading}>
          <strong>My Resume</strong>
        </h1>
        <div className={styles.resumeContainer}>
          <iframe
            src="/naman_jain_resume.pdf"
            width="100%"
            height="800px"
            style={{ border: "none" }}
          />
          <a
            className={styles.downloadButton}
            href="/naman_jain_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
