import React from "react"
import "./Feature.scss"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Feature() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = () => {
      navigate(`/gigs?search=${input}`);
    };
    return (
        <div className="feature">
            <div className="container">
                <div className="left">
                    <h1>Find The Perfect FreeLance Services For Your Business</h1>
                    <div className="search">
                        <div className="searchInput">
                            <img src="./images/Search.png" alt="" />
                            <input type="text" placeholder="Mobile Application"
                            onChange={(e) => setInput(e.target.value)}
                            />
                        </div>
                        <button onClick={handleSubmit}>Serach</button>
                    </div>
                    <div className="popular">
                        <span>Popular</span>
                        <button>Web Design</button>
                        <button>Wordpress</button>
                        <button>Logo Design</button>
                        <button>AI Services</button>
                    </div>
                </div>
                <div className="right">
                    <img src="./images/freelancer.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Feature

