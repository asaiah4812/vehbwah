import Link from 'next/link'
import style from './footer.module.css'
import Image from 'next/image'
import logo from '/public/logo.svg'

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <Link href="/">
          <Image src={logo} width={200} height={80} alt="logo" />
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          ullam quis, ut, voluptate dolorem commodi tenetur dolor cum blanditiis
          officiis alias error provident architecto delectus.
        </p>
      </div>
      <div className={style.center}>
        <Link href="#">
          <b>Our Category</b>
        </Link>
        <Link href="/">Home</Link>
        <Link href="about/">About</Link>
        <Link href="services/">Service</Link>
        <Link href="contact/">Contact</Link>
      </div>
      <div className={style.center}>
        <Link href="#">
          <b>Our Services</b>
        </Link>
        <Link href="#">Health Care</Link>
        <Link href="#">Hospital Visitation</Link>
        <Link href="#">Sharing the word of God</Link>
        <Link href="#">Contact</Link>
      </div>
      <div className={style.right}>
        <Link href="#">
          <b>Our Category</b>
        </Link>
        <input type="text" />
        <button>Subcribe</button>
      </div>
    </div>
  );
}

export default Footer