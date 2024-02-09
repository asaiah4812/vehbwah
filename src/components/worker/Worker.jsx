import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import img1 from '/public/ngo2.jpg'
import img2 from '/public/ngo5.jpg'
import img3 from '/public/ngo7.jpg'
import img4 from '/public/ngo8.jpg'
import img5 from '/public/ngo9.jpg'
import img6 from '/public/ngo10.jpg'
import img7 from '/public/ngo11.jpg'
import img8 from '/public/ngo12.jpg'
import img9 from '/public/ngo13.jpg'
import Image from "next/image";

export default function Worker() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <Image src={item.src} width={240} height={150} alt="name"/>
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    src: img1,
    title: "Vehbwah mission",
    author: "@henson",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    src: img2,
    title: "Health finance",
    author: "@dreamer_webdev",
  },
  {
    src: img3,
    title: "meeting with the commisioner",
    author: "@hensonaudu",
  },
  {
    src: img4,
    title: "workshop",
    author: "@christie",
    cols: 2,
  },
  {
    src: img5,
    title: "vehbwah",
    author: "@hensonaudu",
    cols: 2,
  },
  {
    src: img6,
    title: "Honey",
    author: "@crestvistual",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    src: img6,
    title: "town hall meeting",
    author: "@dreamer",
  },
  {
    src: img7,
    title: "Fern",
    author: "@christie",
  },
  {
    src: img8,
    author: "@ibrahim",
    rows: 2,
    cols: 2,
  },
  {
    src: img9,
    title: "certificate of recognition",
    author: "@asaiah",
  },
  {
    src: img5,
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    src: img2,
    title: "state politechnic",
    author: "@auduhenson",
    cols: 2,
  },
];
