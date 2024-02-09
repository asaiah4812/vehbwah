import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";
import { FaFacebook } from "react-icons/fa";
import children from '/public/pexels.jpg'
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaHireAHelper } from "react-icons/fa";
import { SiHelpscout } from "react-icons/si";
import { FaHelmetSafety } from "react-icons/fa6";
import { GiOpeningShell } from "react-icons/gi";
import { GiSwirledShell } from "react-icons/gi";
import { GiTwinShell } from "react-icons/gi";
import { DiCssdeck } from "react-icons/di";
import Imag from "./Image";
import Ilus from '/public/men.png'
import logo from '/public/logo.svg'
import logo2 from '/public/logo2.svg'
import Photos from "./Photo";
import child from '/public/poor.jpg'
import Footer from "@/components/footer/Footer";
import { FaArrowDown } from "react-icons/fa6";


export default function Home() {
  return (
    <div className={styles.container}>
      <section
        className={styles.home}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${child.src})`,
          // other styles
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Image src={logo2} width={300} height={80} alt="Logo" />
        <h1>VEHBWAH MISSION OF MERCY FOUNDATION</h1>
        <p>
          Inspiring hope, transforming lives. Join us in building a world where
          every individual has the opportunity to thrive.{" "}
        </p>
        <button>Join Us</button>
        <Link href="#hero">
          <FaArrowDown className={styles.arrowIcon} />
        </Link>
      </section>
      <Hero />
      <div className={styles.social}>
        <Link href="#">
          <FaFacebook />
        </Link>
        <Link href="#">
          <IoLogoWhatsapp />
        </Link>
        <Link href="#">
          <AiFillInstagram />
        </Link>
        <Link href="#">
          <ImLinkedin />
        </Link>
        <Link href="#">
          <FaSquareXTwitter />
        </Link>
      </div>
      <section id="hero" className={styles.provide}>
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <h2>
              We provide The Best <br />
              Solution For the <br />
              Future
              <Image
                src={children}
                width={80}
                height={35}
                style={{ borderRadius: "10px" }}
                alt="future"
              />
            </h2>
          </div>
          <div className={styles.topRight}>
            <p>
              Begin by visiting the YouTube video you wish to download. This
              step ensures a streamlined and hassle-free downloading experience.
            </p>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.cardImg}>
            {Imag.map((img) => {
              return (
                <Image
                  priority
                  key={img.id}
                  src={img.src}
                  width={600}
                  height={350}
                  alt={img.alt}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className={styles.business}>
        <div className={styles.left}>
          <Image src={Ilus} width={450} height={350} alt="illustration" />
        </div>
        <div className={styles.right}>
          <h1>Take control & Learn To Become a Member</h1>
          <p>
            Building bridges of hope and opportunity. Together, let's create a
            world where everyone has the chance to dream and achieve. similique
            quae, ratione beatae est voluptates, corrupti maxime et eaque?
            Repudiandae.
          </p>
          <button>Learn More</button>
        </div>
      </section>
      <section className={styles.gallery}>
        <h1>Our Gallery</h1>
        <div className={styles.galleryInner}>
          {Photos.map((photo) => {
            return (
              <div key={photo.id} className={styles.pic}>
                <Image src={photo.src} fill alt={photo.alt} />
              </div>
            );
          })}
        </div>
      </section>
      <section className={styles.content}>
        <h1>What We Do To server Your Best</h1>
        <p>
          As catalysts of change, we believe in a world where every act of
          kindness creates a ripple effect. Join us in making waves of positive
          transformation.
        </p>

        <div className={styles.card}>
          <div className={styles.cardInner}>
            <FaHireAHelper className={styles.icon} />
            <h3>Bussiness Analysis</h3>
            <span>
              Committed to compassion, dedicated to change. Our mission is to
              uplift communities and create lasting impact through love and
              service.
            </span>
          </div>
          <div className={styles.cardInner}>
            <SiHelpscout className={styles.icon} />
            <h3>Bussiness Analysis</h3>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              voluptas incidunt, corrupti debitis eveniet accusamus ipsum .
            </span>
          </div>
          <div className={styles.cardInner}>
            <FaHelmetSafety className={styles.icon} />
            <h3>Bussiness Analysis</h3>
            <span>
              A beacon of support in times of need. Join us in our journey to
              provide hope, relief, and sustainable solutions to those facing
              adversity.
            </span>
          </div>
          <div className={styles.cardInner}>
            <GiOpeningShell className={styles.icon} />
            <h3>Bussiness Analysis</h3>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              voluptas incidunt, corrupti debitis eveniet accusamus ipsum .
            </span>
          </div>
          <div className={styles.cardInner}>
            <DiCssdeck className={styles.icon} />
            <h3>Bussiness Analysis</h3>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              voluptas incidunt, corrupti debitis eveniet accusamus ipsum .
            </span>
          </div>
          <div className={styles.cardInner}>
            <SiHelpscout className={styles.icon} />
            <h3>Bussiness Analysis</h3>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              voluptas incidunt, corrupti debitis eveniet accusamus ipsum .
            </span>
          </div>
          <div className={styles.cardInner}>
            <GiTwinShell className={styles.icon} />
            <h3>Bussiness Analysis</h3>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              voluptas incidunt, corrupti debitis eveniet accusamus ipsum .
            </span>
          </div>
          <div className={styles.cardInner}>
            <GiSwirledShell className={styles.icon} />
            <h3>Bussiness Analysis</h3>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              voluptas incidunt, corrupti debitis eveniet accusamus ipsum .
            </span>
          </div>
        </div>
      </section>
      <section>
        <section className={styles.ready}>
          <h1>Ready To Change your Life</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            quis enim quod eaque laborum voluptatibus tempore eligendi, possimus
            ipsum at incidunt veniam odit debitis provident repellendus, culpa
            animi, atque hic!
          </p>

          <div className={styles.submit}>
            <input type="text" placeholder="Type Your Email here " />
            <button>Submit</button>
          </div>
        </section>
        <Footer />
      </section>
    </div>
  );
}
