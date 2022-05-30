import {
    Article,
    Link,
    H1,
    P,
    PBold,
    TextWrapper,
    InfoWrapper,
    Photo
} from "./styles";

import photo from "./assets/me.jpg"
import cv from "./assets/cv.pdf"

function AboutMe() {
    return (
        <Article>
            <H1>Over mij</H1>
            <InfoWrapper>
                <TextWrapper>
                    <PBold>                
                        Hey, ik ben Txai Pereira de Lacerda. Ik ben een 3de jaars CMD Student met een passie voor Front-End Development & Design. Op dit moment ben ik op zoek naar een Front-End Stage van 100 werkdagen.
                    </PBold>
                    <P>
                        Hey, ik ben Txai Pereira de Lacerda. Ik ben een 3de jaars CMD Student met een passie voor Front-End Development & Design. Op dit moment ben ik op zoek naar een Front-End Stage van 100 werkdagen.
                    </P>
                    <P>
                        Al van jongs af aan wist ik dat ik iets wilde doen met computers. Doordat ik design leuk vond studeerde ik 2 jaar bij de opleiding Game Artist. Ook nadat ik stopte met die opleiding, bleef ik Photoshop gebruiken. Ik stapte daarna over naar de opleiding Applicatieontwikkelaar, omdat ik websites coderen bij Game Artist leuk vond. Nu doe ik eigenlijk een soort van combinatie van de design en development: Communication & Multimedia Design. 
                    </P>
                    <P>
                        Naast dat ik heb gewerkt met HTML, CSS en Javascript, heb ik tijdens deze opleiding ook gewerkt met SASS en React. <a href="https://github.com/Txai-HvA/portfolio2">Dit portfolio</a> heb ik ook gemaakt in React en gestyled met de styled-components library.
                    </P>
                    <P>
                        Verder heb ik tijdens het themasemester <a href="/lastfm_data">Information Design</a> gewerkt met de d3 library, waarmee grafieken gemaakt kunnen worden.
                    </P>
                </TextWrapper>
                <Photo src={photo} alt="Photo of Txai Pereira de Lacerda"/>
            </InfoWrapper>
            <Link target="_blank" href="https://github.com/Txai-HvA">Github</Link>
            <Link target="_blank" href="https://www.linkedin.com/in/txai-pereira-de-lacerda-281003ab">LinkedIn</Link>
            <Link target="_blank" href={cv}>CV</Link>
        </Article>
    )
}

export default AboutMe;