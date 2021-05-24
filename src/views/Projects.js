import React from 'react';
import Project from './Project';
import ImgW1 from '../static/wiadomosci1.webp';

class Projects extends React.Component {
    render() {
        return (
            <div>
                <Project
                    github="https://github.com/BartTed1/jwt-node-auth"
                    link="https://github.com/BartTed1/jwt-node-auth"
                    img={ImgW1}
                    title="Uwierzytelnienie użytkownika przez JSON Web Token"
                    description="Projekt służy do Uwierzytelnienia użytkownika i określenia jego uprawnień do zasobów systemu bez konieczności zapisu sesji użytkownika po stronie serwera. Używa serwera baz danych mySQL. Zapewnia logowanie zgodne z wytycznymi Rest API"
                    technology={["JavaScript", "NodeJS", "JWT", "Express", "mySQL"]}
                />
            </div>
        )
    }
}

export default Projects;