import React from 'react';

class Project extends React.Component {
    render() {
        return (
            <div id="projects" className="projects">
                <div className="project">
                    <div>
                        <a href={this.props.link}>
                            <h2>
                                {this.props.title}
                            </h2>
                        </a>
                        {
                            this.props.technology.map(e => {
                                return (<p className="headline__info--technology">{e}</p>)
                            })
                        }
                        <br />
                        <br />
                        <p>
                            {this.props.description}
                        </p>
                        <br />
                        {this.props.github ? (
                            <p>Zobacz na Githubie: <u><a href={this.props.github}>Link do projektu</a></u></p>
                        ) : (null)}
                    </div>
                    <div>
                        <img src={this.props.img} alt="zrzut ekranu" className="project__image" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Project