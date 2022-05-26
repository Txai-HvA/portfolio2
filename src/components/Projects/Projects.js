import {
    ContentWrapper,
    ContentList,
    ContentListItem
} from "./styles";

import ProjectWrapper from './ProjectWrapper/ProjectWrapper.js'
import { projectData } from "./projectData.js";


function Projects() {
    return (
        <ContentWrapper>
            <ContentList>
                {projectData.map((project) => (
                    <ContentListItem>
                        <ProjectWrapper project={project}></ProjectWrapper>
                    </ContentListItem>
                ))}
            </ContentList>
        </ContentWrapper>
    );
}

export default Projects;
