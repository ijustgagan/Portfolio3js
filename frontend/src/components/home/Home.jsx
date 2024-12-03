import React, { useEffect, useRef } from 'react';
import './home.css';
import * as THREE from 'three';
import moonImage from '../../images/moon.jpg';
import venusImage from '../../images/venus.jpg';
import spaceImage from '../../images/space.jpg';
import { Typography } from '@mui/material';
import TimeLine from '../timeline/Timeline';
import {
  SiPython,
  SiThreedotjs,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiCyberdefenders,
} from 'react-icons/si';
import { MouseOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { ProjectCard } from '../Projects/Projects';


const Home = ({ timelines,projects, skills }) => {
  const skillsBoxRef = useRef(null);

  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();

    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(spaceImage);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const canvas = document.querySelector('.homeCanvas');
    const renderer = new THREE.WebGLRenderer({ canvas });

    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(8, 5, 5);

    const pointLight = new THREE.PointLight(0xffffff, 75);
    const pointLight2 = new THREE.PointLight(0xffffff, 4);

    pointLight.position.set(8, 5, 5);
    pointLight2.position.set(-8, -5, -5);

    scene.add(moon);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.add(venus);
    scene.background = spaceTexture;

    camera.position.set(4, 4, 8);

    const constSpeed = 0.01;
    window.addEventListener('mousemove', (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }

      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
    });

    const animated = () => {
      requestAnimationFrame(animated);
      moon.rotation.y += 0.005;
      venus.rotation.y += 0.005;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    animated();

    const scrollHandler = () => {
    
      camera.rotation.z = window.scrollY * 0.001;
      camera.rotation.y = window.scrollY * 0.003;

      if (skillsBoxRef.current) {
        if (window.scrollY > 1000) {
          skillsBoxRef.current.style.animationName = 'homeSkillsON';
        } else {
          skillsBoxRef.current.style.animationName = 'homeSkillsOff';
        }
      }
    };

    window.addEventListener('scroll', scrollHandler);

   
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>

      <div className="homeCanvasContainer">
        <Typography variant="h1">
          <p>G</p>
          <p>A</p>
          <p>G</p>
          <p>A</p>
          <p>N</p>
        </Typography>

        <div className="homeCanvasBox">
          <Typography variant="h2">DESIGNER</Typography>
          <Typography variant="h2">DEVELOPER</Typography>
        </div>

        <Link to="/projects">VIEW WORK</Link>
      </div>

      <div className="homeScrollBtn">
        <MouseOutlined />
      </div>

      <div className="homeContent">
        <Typography variant="h3">Experience</Typography>
        <TimeLine timelines={timelines} />
      </div>

      <div className="homeSkills">
        <Typography variant="h4">Skills</Typography>

        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFaces1">
            <img src={skills.image1.url} alt="face1" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFaces2">
            <img src={skills.image2.url} alt="face2" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFaces3">
            <img src={skills.image3.url} alt="face3" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFaces4">
            <img src={skills.image4.url} alt="face4" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFaces5">
            <img src={skills.image5.url} alt="face5" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFaces6">
            <img src={skills.image6.url} alt="face6" />
          </div>
        </div>
        <div className="shadowCube"></div>
        <div className="skillsBox" ref={skillsBoxRef}>
          <SiHtml5 />
          <SiCss3 />
          <SiPython />
          <SiJavascript />
          <SiReact />
          <SiExpress />
          <SiThreedotjs />
          <SiMongodb />
          <SiNodedotjs />
          <SiCyberdefenders />
        </div>
      </div>

      <div className="homeYoutube">
        <Typography variant="h3"> Projects</Typography>

        <div className="homeYoutubeWrapper">
          {projects.map((project) => (
            <ProjectCard id={project._id}
              key={project._id}
              url={project.url}
              projectImage={project.image.url}
              ProjectTitle={project.title}
              description={project.description}
              technologies={project.techStack}
            />
          ))}
        </div>
      </div>
    

    </div>
  );
};

export default Home;
