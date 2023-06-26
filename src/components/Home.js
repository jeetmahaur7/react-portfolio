import React from "react"

const Home = () => {
    return (
        <>
            <section className='home'>
                <div className='container flexSB'>
                    <div className='left row'>
                        <h1>
                            <span>Jeet</span> Mahaur
                        </h1>
                        <h3>Web Developer</h3>
                    </div>
                    <div className='right row'>
                        <div className='img'>
                            <img src='./images/home.jpg' alt='' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;