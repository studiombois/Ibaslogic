import React from "react"
import { Link } from "react-scroll"
import heroStyles from "./headSection.module.scss"
import { FaChevronDown } from "react-icons/fa"
import Subscribe from "../subscribe/subscribe"

const Hero = () => {
  return (
    <div className={`hero__container ${heroStyles.homePageHero}`}>
      <div className={heroStyles.heroContent}>
        <h1 className={heroStyles.title}>
          Web Dev Articles for the Self-Starter
        </h1>
        <p className={heroStyles.description}>
          Hey! Are you struggling connecting web technologies to form a real-world project? Then, start learning in a project-based method
        </p>

        <div className={heroStyles.heroButtonContainer}>
          <div className={heroStyles.startHere}>
            <Link
              //activeClass="active"
              to="blog"
              //spy={true}
              smooth={true}
              offset={-64}
              duration={500}
            >
              get started
            </Link>
          </div>
        </div>
        <div className={heroStyles.additional}>
          <p>
            Get our React JS book (valued at $14.99) for <strong>FREE</strong>{" "}
            and start building awesome projects:
          </p>
          <div className="home__subscribe">
            <Subscribe placeholder="Enter email to receive it" />
          </div>
        </div>
      </div>

      <Link
        //activeClass="active"
        to="blog"
        //spy={true}
        smooth={true}
        offset={-64}
        duration={500}
        className={heroStyles.arrow}
      >
        <FaChevronDown />
      </Link>
    </div>
  )
}

export default Hero
