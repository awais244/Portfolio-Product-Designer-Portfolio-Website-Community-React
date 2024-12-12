import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './portfolio.css'

const Portfolio = (props) => {
  return (
    <div className="portfolio-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="portfolio-desktop5">
        <div className="portfolio-home-page">
          <div className="portfolio-home">
            <span className="portfolio-text10">Home</span>
          </div>
          <div className="portfolio-about">
            <span className="portfolio-text11">About</span>
          </div>
          <div className="portfolio-resmume">
            <span className="portfolio-text12">Resume</span>
          </div>
          <div className="portfolio-frame121">
            <span className="portfolio-text13">Portfolio</span>
          </div>
          <div className="portfolio-frame13">
            <span className="portfolio-text14">Contact</span>
          </div>
        </div>
        <div className="portfolio-portfolio">
          <div className="portfolio-frame111">
            <span className="portfolio-text15">
              <span className="portfolio-text16">
                Lets have a look at my
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>Portfolio</span>
            </span>
          </div>
          <div className="portfolio-frame112">
            <div className="portfolio-frame113">
              <div className="portfolio-frame114">
                <div className="portfolio-frame77">
                  <img
                    alt="tempImage4X82po12231"
                    src="/external/tempimage4x82po12231-ae0s-400w.png"
                    className="portfolio-temp-image4x82po1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-component11">
          <div className="portfolio-frame122">
            <span className="portfolio-text18">UX Design</span>
            <img
              alt="Star1I223"
              src="/external/star1i223-v0yx.svg"
              className="portfolio-star1"
            />
            <span className="portfolio-text19">App Design</span>
            <img
              alt="Star3I223"
              src="/external/star3i223-1p5n.svg"
              className="portfolio-star3"
            />
            <span className="portfolio-text20">Dashboard</span>
            <img
              alt="Star2I223"
              src="/external/star2i223-v5m.svg"
              className="portfolio-star2"
            />
            <span className="portfolio-text21">Wireframe</span>
            <img
              alt="Star4I223"
              src="/external/star4i223-t8c9.svg"
              className="portfolio-star4"
            />
            <span className="portfolio-text22">User Research</span>
            <img
              alt="Star5I223"
              src="/external/star5i223-uk25.svg"
              className="portfolio-star5"
            />
            <span className="portfolio-text23">UX Design</span>
            <span className="portfolio-text24">App Design</span>
            <span className="portfolio-text25">Dashboard</span>
            <span className="portfolio-text26">Wireframe</span>
            <span className="portfolio-text27">User Research</span>
            <span className="portfolio-text28">UX Design</span>
            <span className="portfolio-text29">App Design</span>
            <span className="portfolio-text30">Dashboard</span>
            <span className="portfolio-text31">Wireframe</span>
            <span className="portfolio-text32">User Research</span>
          </div>
        </div>
        <div className="portfolio-footerletsconnect">
          <div className="portfolio-frame115">
            <span className="portfolio-text33">Lets Connect there</span>
            <Link to="/about-me" className="portfolio-navlink">
              <div className="portfolio-hiremetakestoanotherwebpage">
                <span className="portfolio-text34">Hire me</span>
                <img
                  alt="iconoutlineddirectionsstraightarrowsuprightI223"
                  src="/external/iconoutlineddirectionsstraightarrowsuprighti223-u5db.svg"
                  className="portfolio-iconoutlineddirectionsstraightarrowsupright"
                />
              </div>
            </Link>
          </div>
          <img
            alt="Line52231"
            src="/external/line52231-qcs.svg"
            className="portfolio-line5"
          />
          <div className="portfolio-frame123">
            <div className="portfolio-frame124">
              <span className="portfolio-text35">
                <span>
                  I’m always excited to collaborate on projects that challenge
                  me to think creatively and solve complex problems. Whether you
                  have a new idea, need help refining an existing product, or
                  are looking for a fresh perspective, I’m here to help.
                </span>
                <br></br>
                <span>
                  Let’s create user-centered designs that inspire, engage, and
                  deliver meaningful experiences.
                </span>
              </span>
              <div className="portfolio-frame327">
                <div className="portfolio-vuesaxboldyoutube1">
                  <div className="portfolio-vuesaxboldyoutube2">
                    <div className="portfolio-youtube">
                      <img
                        alt="Vector2231"
                        src="/external/vector2231-ze2e.svg"
                        className="portfolio-vector1"
                      />
                    </div>
                  </div>
                </div>
                <div className="portfolio-vuesaxboldinstagram1">
                  <div className="portfolio-vuesaxboldinstagram2">
                    <div className="portfolio-instagram">
                      <img
                        alt="Vector2231"
                        src="/external/vector2231-2544.svg"
                        className="portfolio-vector2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-frame328">
              <span className="portfolio-text39">Navigation</span>
              <div className="portfolio-frame125">
                <span className="portfolio-text40">Home</span>
                <span className="portfolio-text41">
                  About Me
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="portfolio-text42">Service</span>
                <span className="portfolio-text43">Resume</span>
                <span className="portfolio-text44">Projects</span>
              </div>
            </div>
            <div className="portfolio-frame329">
              <span className="portfolio-text45">Contact</span>
              <div className="portfolio-frame126">
                <span className="portfolio-text46">+1 647-819-7576</span>
                <span className="portfolio-text47">
                  <span>Awais_2004@icloud.com</span>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </span>
                <div className="portfolio-vuesaxboldlocation1">
                  <div className="portfolio-vuesaxboldlocation2"></div>
                </div>
              </div>
            </div>
            <div className="portfolio-frame330">
              <span className="portfolio-text58">
                Get the latest information
              </span>
              <div className="portfolio-frame127"></div>
            </div>
          </div>
          <img
            alt="Line62231"
            src="/external/line62231-mk8g.svg"
            className="portfolio-line6"
          />
          <div className="portfolio-frame128">
            <span className="portfolio-text59">
              Copyright© 2024 , Awais Imran.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
