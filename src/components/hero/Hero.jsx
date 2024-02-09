import Image from 'next/image'
import style from './hero.module.css'
import hero from '/public/children.jpg'

const Hero = () => {
  return (
    <div className={style.container}>
      <div className={style.heroLeft}>
        <h1>
          Utilize our <br />
          Solution to expand <br />
          Your business.
        </h1>
        <p>
          Together, we build a tomorrow filled with hope, opportunity, and
          equality. Join our community dedicated to making a positive impact on
          the world. At the heart of our mission is the belief that every life
          counts.
        </p>
        <button className={style.btn}>Let's Talk</button>
      </div>
      <div className={style.heroRight}>
        <div className={style.innerCard}>
          <h3>Partner with Us</h3>
        </div>
        <Image src={hero} fill priority alt="hero img" />
      </div>
    </div>
  );
}

export default Hero