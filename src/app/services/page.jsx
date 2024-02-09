import style from './page.module.css'
import { FaHireAHelper } from "react-icons/fa";
import { SiHelpscout } from "react-icons/si";
import { FaHelmetSafety } from "react-icons/fa6";
import { GiOpeningShell } from "react-icons/gi";
import { GiSwirledShell } from "react-icons/gi";
import { GiTwinShell } from "react-icons/gi";
import { DiCssdeck } from "react-icons/di";
import Footer from '@/components/footer/Footer';




const Services = () => {
  return (
    <div className={style.container}>
      <h1>What We Do To server Your Best</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur temporibus adipisci fuga labore
        molestiae minus amet dolor commodi?
      </p>

      <div className={style.card}>
        <div className={style.cardInner}>
          <FaHireAHelper className={style.icon}/>
          <h3>Bussiness Analysis</h3>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            voluptas incidunt, corrupti debitis eveniet accusamus ipsum .
          </span>
        </div>
        <div className={style.cardInner}>
          <SiHelpscout className={style.icon}/>
          <h3>Strategic Planning</h3>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            voluptas incidunt, corrupti debitis eveniet accusamus ipsum .
          </span>
        </div>
        <div className={style.cardInner}>
          <FaHelmetSafety className={style.icon}/>
          <h3>Bussiness Consulting</h3>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            voluptas incidunt, corrupti debitis eveniet accusamus ipsum .
          </span>
        </div>
        <div className={style.cardInner}>
          <GiOpeningShell className={style.icon}/>
          <h3>Bussiness Analysis</h3>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            voluptas incidunt, corrupti debitis eveniet accusamus ipsum .
          </span>
        </div>
        <div className={style.cardInner}>
          <DiCssdeck className={style.icon}/>
          <h3>Bussiness Initiatives</h3>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            voluptas incidunt, corrupti debitis eveniet accusamus ipsum .
          </span>
        </div>
        <div className={style.cardInner}>
          <SiHelpscout className={style.icon}/>
          <h3>Bussiness Analysis</h3>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            voluptas incidunt, corrupti debitis eveniet accusamus ipsum .
          </span>
        </div>
        <div className={style.cardInner}>
          <GiTwinShell className={style.icon}/>
          <h3>Bussiness Analysis</h3>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            voluptas incidunt, corrupti debitis eveniet accusamus ipsum .
          </span>
        </div>
        <div className={style.cardInner}>
          <GiSwirledShell className={style.icon}/>
          <h3>Bussiness Analysis</h3>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            voluptas incidunt, corrupti debitis eveniet accusamus ipsum .
          </span>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Services