import './home.css'

export default () => {
    return (
        <section className='home' id='home'>
            {/* <div className='hold-neon-circle'>
                <div className='neon-circle'>
                </div>
            </div> */}
            <div className="content">
                <div className="container">
                    <div className="content-box">
                        <h2>Pedro Souza</h2>
                        <div className='content-neon-line'></div>
                        <h1>Front-end Developer & Ui Designer</h1>
                        <p>Front-end developer focused on creating Web and Mobile applications. I really like different projects that solve real problems.</p>
                        <div className='content-buttons'>
                            <button className="donwload-cv-btn"><i className="fa-solid fa-download"></i>  Download CV</button>
                            <button className='donwload-portfolio-btn btn'><i className="fa-solid fa-angles-down"></i> Portfólio</button>
                        </div>
                        <div className='home-social-media'>
                            <a href=""><i className="fa-brands fa-facebook"></i></a>
                            <a href=""><i className="fa-brands fa-instagram"></i></a>
                            <a href=""><i className="fa-brands fa-linkedin"></i></a>
                            <a href=""><i className="fa-brands fa-github"></i></a>
                        </div>
                    </div>

                </div>
                <div className="content-photo">
                    <div className="neon-border-photo">

                    </div>
                </div>
            </div>
        </section>
    )
}