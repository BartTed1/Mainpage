import React from 'react';
import ImgW1 from '../static/wiadomosci1.webp';
import ImgW2 from '../static/wiadomosci2.webp';
import ImgW3 from '../static/wiadomosci3.webp';
import ImgW4 from '../static/wiadomosci4.webp';

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="header">
                    <p className="header--background header--main">Teodorowicz</p>
                </div>
                <div className="headline">
                    <h1>
                        Serwis z wiadomościami
                    </h1>
                    <div>
                        <p className="headline__info--technology">PHP</p>
                        <p className="headline__info--technology">Laravel</p>
                        <p className="headline__info--technology">SQL</p>
                        <p className="headline__info--technology">JavaScript</p>
                        <p className="headline__info--technology">CMS</p>
                        <p className="headline__info--technology">SCSS</p>
                    </div>
                    <div className="headline__imageRoll">
                        <img src={ImgW2} alt="zrzut2" />
                        <img src={ImgW1} alt="zrzut1" />
                        <img src={ImgW3} alt="zrzut3" />
                        <img src={ImgW4} alt="zrzut4" />
                    </div>
                </div>
                <div className="seeMore">
                    <a href="#projects">Zobacz więcej</a>
                </div>
            </div>
        )
    }
}

export default Home;