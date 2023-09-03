import Counter from "./Counter.jsx";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { homeData } from "../shared/constHomeData";

const Home = () => {
  const [ref, inView] = useInView();
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{
        y: 0,
        opacity: inView ? 1 : 0,

        scale: inView ? 1 : 0.75,
      }}
      transition={{ delay: 0.2, duration: 0.6 }}
      ref={ref}
      className="section"
      id="home"
    >
      <section className="hero">
        <div className="background">
          <div className="image" data-img-url="/images/hero/home.webp" />
        </div>
        <section className="container">
          <section className="content">
            <aside className="left">
              <section className="inner">
                <h3 className="hello">Hello {`I'm`}</h3>
                <h3 className="name">
                  {homeData.firstName} {homeData.lastName}
                </h3>
                <h3 className="job">
                  {homeData.designation} from {homeData.address}
                </h3>
                <p className="text">{homeData.bio}</p>
                <div className="buttons">
                  <div className="button">
                    <motion.a
                      whileHover={{
                        scale: 1.09,
                        background:
                          "linear-gradient(135deg, #FF6B6B 0%, #FFB72B 100%)",
                      }}
                      whileTap={{ scale: 0.7 }}
                      transition={{ duration: 0.3 }}
                      href="#contact"
                    >
                      Contact me
                    </motion.a>
                  </div>
                  <div className="simple_button">
                    <a className="anchor" href="#about">
                      About Me
                    </a>
                  </div>
                </div>
              </section>
              <h3 className="stroke_1">{homeData.firstName}</h3>
              <h3 className="stroke_2">{homeData.lastName}</h3>
            </aside>
            <aside className="right">
              <div className="image">
                <img src="/images/thumbs/53-61.jpg" alt="" />
                <div className="main" data-img-url={homeData.img} />
                <span className="win">
                  <img
                    src="/images/svg/award.svg"
                    alt=""
                    className="svg"
                    id="award"
                  />
                </span>
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      <Counter end={homeData.numberofyear} />
                    </h3>
                    <span className="item_name">
                      Years of
                      <br />
                      Success
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      <Counter end={homeData.numberOfProject} />
                      <span className="extra">+</span>
                    </h3>
                    <span className="item_name">
                      Projects
                      <br />
                      Completed
                    </span>
                  </div>
                </div>
                <span className="circle anim_circle">
                  <img src="#" alt="" />
                </span>
              </div>
            </aside>
          </section>
        </section>
      </section>
    </motion.section>
  );
};
export default Home;
