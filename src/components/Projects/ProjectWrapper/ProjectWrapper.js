
import React, { useState } from "react";
import styled from "styled-components";
import {
    imgLinkTextColor,
    imgLinkTextHoverColor,
    imgLinkHoverColor
} from "../../variables";
import { Link } from "react-router-dom";

function ProjectWrapper({ project }) {
    const ProjectLink = styled.div`
        display: flex;
        padding: 10px;
        background: 
            linear-gradient(to top, rgba(0, 0, 0, 1), rgba(255, 255, 255, 0)),
            url("${project.thumbnail}");
        background-repeat: no-repeat;
        background-size: cover;
        height: 47vw;
        justify-content: center;
        align-items: center;

        &:hover {
            color: ${imgLinkTextHoverColor};
            background: ${imgLinkHoverColor};
        }

        a {
            color: ${imgLinkTextColor};
            display: flex;
            width: 100%;
            height: 100%;
            text-decoration: none;
            align-items: center;
            justify-content: center;
        }

        @media (min-width: 768px) {
            height: 25vw;
        }
    `

    const ProjectName = styled.p`
        font-size: 2em;
    `

    const ProjectDescr = styled.p`
        font-size: 1.2em;
        margin: 5px;
    `

    const [visible, setVisible] = useState(false);

    return (

        <ProjectLink onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)} >
            <Link to={project.url}>
                {visible === true
                    ? <ProjectDescr>{project.short_descr}</ProjectDescr>
                    : <ProjectName>{project.name}</ProjectName>
                }
            </Link>
        </ProjectLink >

    );
}

export default ProjectWrapper;
