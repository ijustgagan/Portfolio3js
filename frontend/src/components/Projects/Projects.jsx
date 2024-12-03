import React from 'react';
import './projects.css';
import { AiOutlineProject } from 'react-icons/ai';
import { Button, Typography } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { FaRegSmileWink } from 'react-icons/fa';

export const ProjectCard = ({
  id,
  url,
  projectImage,
  ProjectTitle,
  description,
  technologies,
  isAdmin = false,
}) => {
  return (
    <>
      <a href={url} className="projectCard" target="_blank" rel="noopener noreferrer">
        <div>
          <img src={projectImage} alt="Project" />
          <Typography variant="h5">{ProjectTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4">About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack : {technologies}</Typography>
        </div>
      </a>

      {isAdmin && (
        <Button style={{ color: "rgba(40,40,40,0.7)" }} >
          <Delete />
        </Button>
      )}
    </>
  );
};

const Projects = ( {projects} ) => {
  return (
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>

      <div className="projectsWrapper">
        {projects.map((project) => {
          return (
            <ProjectCard id={project._id}
              key={project._id}
              url={project.url}
              projectImage={project.image.url}
              ProjectTitle={project.title}
              description={project.description}
              technologies={project.techStack}
            />
          );
        })}
      </div>
      <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default Projects;
