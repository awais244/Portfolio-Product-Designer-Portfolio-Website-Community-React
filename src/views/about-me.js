import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import ContactForm2 from '../components/contact-form2'
import './about-me.css'

const AboutMe = (props) => {
  return (
    <div className="about-me-container1">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="about-me-desktop4">
        <div className="about-me-home-page">
          <div className="about-me-home">
            <span className="about-me-text10">Home</span>
          </div>
          <div className="about-me-about">
            <span className="about-me-text11">About</span>
          </div>
          <div className="about-me-resmume">
            <span className="about-me-text12">Resume</span>
          </div>
          <div className="about-me-frame121">
            <span className="about-me-text13">Portfolio</span>
          </div>
          <div className="about-me-frame13">
            <span className="about-me-text14">Contact</span>
          </div>
        </div>
        <div className="about-me-whyhireme">
          <img
            alt="MaskgroupI223"
            src="/external/maskgroupi223-8gh-700w.png"
            className="about-me-maskgroup"
          />
          <div className="about-me-container2">
            <div className="about-me-container3">
              <span className="about-me-text15">
                <span className="about-me-text16">
                  Why
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="about-me-text17">Hire me?</span>
              </span>
            </div>
            <div className="about-me-container4">
              <div className="about-me-frame74">
                <div className="about-me-frame11"></div>
                <span className="about-me-text18">
                  I bring a strong foundation in UX and game design, with proven
                  skills in research, problem-solving, and creating engaging,
                  user-centered designs. My ability to adapt, collaborate, and
                  deliver quality results makes me a valuable addition to any
                  team.
                </span>
              </div>
              <div className="about-me-container5"></div>
            </div>
          </div>
        </div>
        <ContactForm2
          content1={
            <Fragment>
              <span className="about-me-text19">
                <span>
                  Feel free to reach out to discuss potential collaborations or
                  for any inquiries.
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </Fragment>
          }
          email={
            <Fragment>
              <span className="about-me-text22">Awais_2004@icloud.com</span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="about-me-text23">
                I look forward to hearing from you!
              </span>
            </Fragment>
          }
          action={
            <Fragment>
              <span className="about-me-text24">Submit</span>
            </Fragment>
          }
          phone={
            <Fragment>
              <span className="about-me-text25">+1 647-819-7576</span>
            </Fragment>
          }
          adress={
            <Fragment>
              <span className="about-me-text26">Toronto, Ontario</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="about-me-text27">Contact Me</span>
            </Fragment>
          }
        ></ContactForm2>
        <div className="about-me-component11">
          <div className="about-me-frame122">
            <span className="about-me-text28">UX Design</span>
            <img
              alt="Star1I223"
              src="/external/star1i223-5u28.svg"
              className="about-me-star1"
            />
            <span className="about-me-text29">App Design</span>
            <img
              alt="Star3I223"
              src="/external/star3i223-4muo.svg"
              className="about-me-star3"
            />
            <span className="about-me-text30">Dashboard</span>
            <img
              alt="Star2I223"
              src="/external/star2i223-w90y.svg"
              className="about-me-star2"
            />
            <span className="about-me-text31">Wireframe</span>
            <img
              alt="Star4I223"
              src="/external/star4i223-jc4.svg"
              className="about-me-star4"
            />
            <span className="about-me-text32">User Research</span>
            <img
              alt="Star5I223"
              src="/external/star5i223-p5lc.svg"
              className="about-me-star5"
            />
            <span className="about-me-text33">UX Design</span>
            <span className="about-me-text34">App Design</span>
            <span className="about-me-text35">Dashboard</span>
            <span className="about-me-text36">Wireframe</span>
            <span className="about-me-text37">User Research</span>
            <span className="about-me-text38">UX Design</span>
            <span className="about-me-text39">App Design</span>
            <span className="about-me-text40">Dashboard</span>
            <span className="about-me-text41">Wireframe</span>
            <span className="about-me-text42">User Research</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
