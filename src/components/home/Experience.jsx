import React from 'react';
import ExperienceCard from "./ExperienceCard";
import {
    Container,
    Row
    
} from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";

const Experience = ({experiences}) => {
    return (  
        <section className="section">
            <Container>
                <Jumbotron fluid className="bg-white" id="experiences">
                    <h2 className="display-4 mb-5 text-center">
                        {experiences.heading}
                    </h2>
                    <Row>
                        {
                            experiences.data.map(data => {
                                return <ExperienceCard key={data.company} data={data} />
                            })
                        }
                    </Row>
                </Jumbotron>
            </Container>
        </section>
    );
}
 
export default Experience;