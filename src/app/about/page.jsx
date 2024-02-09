"use client"
import * as React from "react";
import style from './page.module.css'
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import photo from '/public/photo1 (3).jpg'
import Link from "next/link";
import cover from "/public/about.jpg";
import Photos from "../Photo";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Footer from "@/components/footer/Footer";
import Works from '@/components/worker/Worker.jsx'
import Worker from "@/components/worker/Worker.jsx";
import img1 from '/public/profile.jpg'
import img2 from '/public/profile1.JPG'
import img3 from '/public/profile3.jpg'

const About = () => {
   const [expanded, setExpanded] = React.useState(false);

   const handleChange = (panel) => (event, isExpanded) => {
     setExpanded(isExpanded ? panel : false);
   };
  return (
    <section className={style.container}>
      <div
        className={style.wrapper}
        style={{
          // use the src property of the image object
          backgroundImage: `url(${cover.src})`,
          // other styles
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "40vh",
          filter: "grayscale(15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></div>
      <div className={style.divider}>
        <div className={style.accordion}>
          <h1>VehBwah Foundation Has Been Existance </h1>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                VehBwah
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                VehBwah was Found in the Year 2008
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p style={{ maxWidth: "600px" }}>
                  VehBwah was founded in april 2008 by Evanglist Henson Titus a
                  Found of VehBwah Glory Land Academy behind excellent
                  Internation School Jalingo and he is also the deputy direct of
                  the taraba state collage of Education Zing Local Governament.
                  His also an Engineer he has three Children Nghainuh which is
                  the First born, Christie Henson th second Born and Asaiah
                  Henson the Last child of the Family.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                About Our Foundation
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                What VehBwah Foundation does
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <b>Basic Counselling:</b>
                <p style={{ maxWidth: "600px" }}>
                  With the help of the social worker’s counseling and the power
                  of their faith, the children are able to overcome their past
                  traumas and look towards a positive future.
                </p>
                <b>Non-residents:</b>
                <p style={{ maxWidth: "600px" }}>
                  Upendo is all about spreading love and making a difference in
                  the lives of children in need. Through its sponsorship
                  program, we’re are able to support at least 50 more children
                  who may not live at the home, but still benefit from our
                  resources. Not only does this help there children succeed in
                  their education, it also takes a weight off the shoulders of
                  their families, who can focus on other priorities.
                </p>
                <b>Emergency Shelter:</b>
                <p style={{ maxWidth: "600px" }}>
                  The home in Mirira, Muranga serves an important role in
                  providing emergency shelter for children who need a safe and
                  warm place to stay. Whether it’s for a short time or until
                  they age out, the home works closely with local police and
                  social.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Fellowship with Us
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Filtering has been entirely disabled for whole web server
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p style={{ maxWidth: "600px" }}>
                  Whenever anyone asks about your mission, you’ll be able to
                  simply direct them to your NGO website, helping you
                  efficiently build new relationships. Just make sure to provide
                  content targeted at both current and potential supporters,
                  including reports, program updates, and any other important
                  information.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Personal data
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Don’t just settle for any CMS. Rather, do your research and the
                features you need, such as form builders and event ticketing.
                Above all else, it should be functional and easy-to-use.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className={style.right}>
          <Image src={photo} fill alt="about" />
        </div>
      </div>
      <section className={style.gallery}>
        <h1>Our Gallery</h1>
        <div className={style.galleryInner}>
          {Photos.map((photo) => {
            return (
              <div key={photo.id} className={style.pic}>
                <Image src={photo.src} fill alt={photo.alt} />
              </div>
            );
          })}
        </div>
      </section>
      <div className={style.us}>
        <div className={style.usLeft}>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Image
                  src={img1}
                  width={60}
                  height={60}
                  style={{ borderRadius: "50%", marginRight: "10px" }}
                  alt="Nghainuh"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Nghainuh Henson"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Managing Dir
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Image
                  src={img2}
                  width={60}
                  height={60}
                  style={{ borderRadius: "50%", marginRight: "10px" }}
                  alt="Nghainuh"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Asaiah Henson"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                     Software Engineer💻
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Image
                  src={img3}
                  width={60}
                  height={60}
                  style={{ borderRadius: "50%", marginRight: "10px" }}
                  alt="Nghainuh"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Christie Henson"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Senior anvocate
                    </Typography>
                    {" — A professional Teacher at Bridge Nursery primary school …"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </div>
        <div className={style.usRight}>
          <Worker />
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default About