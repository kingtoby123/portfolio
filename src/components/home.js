import React from 'react'

import Image from '../../static/assets/home-image/home-image.png'

export default function Home(props) {
    return (
        <div className="home-container">

            <div className="home">

                <img src={Image} alt="Image" />

                <div className="text">
                    <p>
                        Hello, I'm Toby English I'm a full-stack web developer.
                    </p>

                    <button>View my work </button>

                </div>

            </div>
            
        </div>
    )
}