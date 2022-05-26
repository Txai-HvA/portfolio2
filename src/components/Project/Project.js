import {
    Article,
    H1,
    H2,
    P,
    Link,
    IconList,
    IconItem
} from "./styles";
import styled from "styled-components";

import htmlIcon from "./assets/HTML.svg"
import cssIcon from "./assets/CSS.svg"
import jsIcon from "./assets/JS.svg"
import reactIcon from "./assets/React.svg"

function Project({project}) {

    const Img = styled.img`
        width: 100%;
        height: 400px;
        background-image: url("${project.image}");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center top;
    `;

    return (
        <Article>
            <H1>{project.name}</H1>
            <IconList>
                { project.usedHTML ? <IconItem><img src={htmlIcon} alt="HTML icon"/></IconItem> : ""}
                { project.usedCSS ? <IconItem><img src={cssIcon} alt="CSS icon"/></IconItem> : ""}
                { project.usedJS ? <IconItem><img src={jsIcon} alt="JS icon"/></IconItem> : ""}
                { project.usedReact ? <IconItem><img src={reactIcon} alt="React icon"/></IconItem> : ""}
            </IconList>
            <H2>De opdracht</H2>
            <P>{project.opdracht}</P>
            <H2>Leerpunten</H2>
            <P>{project.leerpunten}</P>
            <Img href={project.thumbnail} />
            <Link href={project.gitHubPage}>Live website</Link>
            <Link href={project.gitHubRepository}>Github Repository</Link>
        </Article>
    );
}

export default Project;
