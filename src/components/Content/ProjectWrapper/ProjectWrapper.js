
import React, { useState } from "react";
import styled from "styled-components";
import { imgLinkTextColor, imgLinkTextHoverColor, imgLinkHoverColor } from "../../variables";

function ProjectWrapper({ project }) {
    const ProjectLink = styled.a`
        display: flex;
        text-decoration: none;
        color: ${imgLinkTextColor};
        padding: 10px;
        background: url("${project.img}");
        background-repeat: no-repeat;
        background-size: cover;
        height: 47vw;
        justify-content: center;
        align-items: center;

        &:hover {
            color: ${imgLinkTextHoverColor};
            background: ${imgLinkHoverColor};
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
        <ProjectLink href={project.url} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)} >
            {visible === true
                ? <ProjectDescr>{project.descr}</ProjectDescr>
                : <ProjectName>{project.name}</ProjectName>
            }
        </ProjectLink >
    );
}

export default ProjectWrapper;
