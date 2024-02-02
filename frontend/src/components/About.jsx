import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="banner">
                    <div className="top">
                        <h1 className="heading">About Us</h1>
                        <p>The only thing we're serious about is food.</p>
                    </div>
                    <p className="mid">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dignissimos eos illum aliquam harum commodi, sunt culpa nesciunt maxime quaerat mollitia nihil repellat ipsum, ratione, similique eligendi quam unde! Eligendi labore autem nesciunt nulla distinctio itaque soluta commodi. Modi, tempore eligendi magnam dolor dolorum laborum similique sunt nesciunt totam iste.</p>
                    <Link to={"/"}>Explore Menu 
                    <span>
                        <HiOutlineArrowNarrowRight/>
                    </span>
                    </Link>
                </div>
                <div className="banner">
                    <img src="/about.png" alt="about" />
                </div>
            </div>
        </section>
    )
}

export default About