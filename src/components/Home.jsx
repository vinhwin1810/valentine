import React from "react";
import styled from "styled-components";
import home from "assets/home.png";
import play from "assets/play.png";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { homeAnimation, homeInfoAnimation } from "animation";

function Home() {
  return (
    <Section id="home">
      <Navbar />
      <motion.div
        className="home"
        variants={homeAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <div className="content">
          <div className="title">
            <h1>14/02/2023</h1>
          </div>
          <div className="subTitle">
            <p>
              Đây là quà Valentine cho người yêu tôi. TUy chưa hoàn chỉnh vì
              khó, nhưng kệ thôi ...
            </p>
          </div>
          <img src={play} alt="Play Button" />
        </div>
      </motion.div>

      <motion.div
        className="info"
        variants={homeInfoAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <div className="grid">
          <div className="col">
            <strong>1/1/2022</strong>
            <p>First Met</p>
          </div>
          <div className="col">
            <strong>22/3/2022</strong>
            <p>Second Met. Your birthday</p>
          </div>
          <div className="col">
            <strong>28/3/2022</strong>
            <p>Date</p>
          </div>
          <div className="col">
            <strong>12/6/2022 - 05/9/2022</strong>
            <p>Gặp lại nhau sau 3 tháng yêu xa,</p>
            <p>Chia tay nhau để du học</p>
          </div>
          <div className="col">
            <strong>18/10/2022</strong>
            <p>My birthday</p>
            <p>You came to me</p>
          </div>
          <div className="col">
            <strong>22/11/2022</strong>
            <p>I came to you</p>
            <p>2 months together</p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

const Section = styled.section`
  background: url(${home}) no-repeat center;
  min-height: 100vh;
  background-size: cover;
  position: relative;
  .home {
    height: 100%;
    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 60%;
      color: #fff;
      gap: 1.2rem;
      margin-top: 8rem;
      padding-left: 18rem;
      .title {
        h1 {
          font-size: 5rem;
          line-height: 5.3rem;
        }
      }
      .subTitle {
        p {
          width: 70%;
          margin-bottom: 2rem;
        }
      }
    }
  }
  .info {
    position: absolute;
    bottom: -6rem;
    right: 0;
    background-color: var(--secondary-color);
    padding: 4rem;
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
      color: #fff;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .home {
      .content {
        padding-left: 2rem;
        width: 100%;
        margin-bottom: 2rem;
        .title {
          h1 {
            font-size: 4rem;
            line-height: 4rem;
          }
        }
      }
    }
    .info {
      position: initial;
      .grid {
        grid-template-columns: 1fr;
      }
    }
  }
`;

export default Home;
