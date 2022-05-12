
//import '../../css/Header.css'
import {
    ContentWrapper, ContentList, ContentListItem
} from "./styles";

import ProjectWrapper from './ProjectWrapper/ProjectWrapper.js'

import discordImg from './assets/discord_screenshot.png';

let projects = [
    { name: "LastFM Data", img: discordImg, url: "yo1", descr: "React website die Last.FM data laat zien met behulp van d3.js & de LastFM API" },
    { name: "Discord namaken", img: discordImg, url: "yo2", descr: "Website nagemaakt voor het leren van flexbox, grid en responsiveness." },
    { name: "Who wants to be a Millionaire?", img: discordImg, url: "yo3", descr: "Met behulp van JavaScript een interactieve webpagina gemaakt." },
    { name: "Search Food", img: discordImg, url: "yo4", descr: "Mobiele webapplicatie die een deel van de info uit een gids ontsluit, zonder gebruik Javascript." },
    { name: "Overwatch website", img: discordImg, url: "yo5", descr: "Website die laat zien dat ik de gegeven HTML en CSS stof beheers." },
];

function Content() {
    return (
        <ContentWrapper>
            <ContentList>
                {projects.map((project) => (
                    <ContentListItem>
                        <ProjectWrapper project={project}></ProjectWrapper>
                    </ContentListItem>
                ))}
            </ContentList>
        </ContentWrapper>
    );
}

export default Content;
