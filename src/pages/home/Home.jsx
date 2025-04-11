import React from 'react'
import "./Home.scss"
import Feature from '../../components/feature/Feature'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/slide/Slide'

import CategoryCard from "../../components/categoryCard/CategoryCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data";
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home'>
            <Feature/>
            <TrustedBy/>
            <Slide slidesToShow={5} arrowsScroll={5}>
                {cards.map(card=>(
                    <CategoryCard key={card.id} item={card}/>
                ))}
            </Slide>
            <div className="features">
                <div className="container">
                    <div className="item">
                        <h1>A Whole World Of FreeLance Talent At Your Fingertips</h1>
                        <div className="title">
                            <img src="./images/bullet.png" alt="" />
                            The Best For Every Budget
                        </div>
                        <p>
                            Find high quality services at every price point. No hourly rates,
                            Just project based pricing.
                        </p>
                    </div>
                    <div className="item">
                        <video src="./images/Freelance.mp4" controls></video>
                    </div>
                </div>
            </div>
            <div className="features buiseness">
                <div className="container">
                    <div className="item">
                        <h1>FLForge Buiseness</h1>
                        <h1>A Buiseness Solution Designed For Teams</h1>
                        <p>
                            Upgarde to a curated experience packed with tools and benefits,
                            Dedicated to buisenesses
                        </p>
                        <div className="title">
                            <img src="./images/bullet.png" alt="" />
                            Connect to freelancers with proven buiseness experience
                        </div>
                        <div className="title">
                            <img src="./images/bullet.png" alt="" />
                            Get matched with the perfect talent by a customer success manager
                        </div>
                        <div className="title">
                            <img src="./images/bullet.png" alt="" />
                            Manage teamwork and boost productivity with one powerful workspace
                        </div>
                        <Link to="/gigs">
                            <button>Explore FLForge Buiseness</button>
                        </Link>
                    </div>
                    <div className="item">
                        <img src="./images/freelancer3.png" alt="" />
                    </div>
                </div>
            </div>
            <Slide slidesToShow={4} arrowsScroll={4}>
                {projects.map(projects=>(
                    <ProjectCard key={projects.id} item={projects}/>
                ))}
            </Slide>
        </div>
    )
}

export default Home