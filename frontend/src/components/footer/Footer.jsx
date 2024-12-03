import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is Gagan. I am a <b>Full-Stack Developer</b>
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/ijustgagan/" target="black">
          <BsGithub />
        </a>
        <a href="https://x.com/ijustgagan_/" target="black">
          <BsTwitterX />
        </a>
        <a href="https://instagram.com/gagannnnnn_.03" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/gagan6103/" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;