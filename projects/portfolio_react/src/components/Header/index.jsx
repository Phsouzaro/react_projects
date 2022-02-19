import './header.css'

export default () => {
    return (
        <header>
            <div className="container">
                <nav className='navigation'>
                    <ul className="nav-list">
                        <li className="nav-list-item"><div></div><a href="#home">Home</a></li>
                        <li className="nav-list-item"><div></div><a href="#about-me">About me</a></li>
                        <li className="nav-list-item"><div></div><a href="#projects">Projects</a></li>
                        <li className="nav-list-item"><div></div><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}