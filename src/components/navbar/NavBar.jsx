"use client"
import Image from 'next/image';
import style from './navbar.module.css'
import logo from '/public/logo.svg'
import { IoCloseSharp } from "react-icons/io5";
import Link from 'next/link';
import { useState } from 'react';
import { RiMenu3Fill } from "react-icons/ri";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const links = [
    {
        id: 1,
        title: 'Home',
        url: '/'
    },
    {
        id: 2,
        title: 'About',
        url: 'about/'
    },
    {
        id: 3,
        title: 'Contact',
        url: 'contact/'
    },
    {
        id: 4,
        title: 'Services',
        url: 'services/'
    },
]

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleMenu = () => {
    setOpen(!open);
  }
  return (
    <div className={style.container}>
      <div className={style.navLeft}>
        <Link href="/">
          <Image src={logo} width={200} height={80} alt="logo" />
        </Link>
      </div>

      <div className={style.navRight}>
        <ul className={style.link}>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <Link href={link.url}>{link.title}</Link>
              </li>
            );
          })}
        </ul>
        <div className={style.us}>
          <Button
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <RiMenu3Fill className={style.icon} />
          </Button>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link href="/" style={{ textDecoration: "none", color: "black" }}>
                Home
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                href="about/"
                style={{ textDecoration: "none", color: "black" }}
              >
                About Us
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                href="contact/"
                style={{ textDecoration: "none", color: "black" }}
              >
                Contact
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                href="services/"
                style={{ textDecoration: "none", color: "black" }}
              >
                Services
              </Link>
            </MenuItem>
          </Menu>
        </div>
        <ul className={style.links}>
          {open &&
            links.map((link) => {
              return (
                <li key={link.id}>
                  <Link href={link.url}>{link.title}</Link>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default NavBar