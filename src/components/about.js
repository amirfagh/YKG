import React from "react";
import "./about.css"; // Import your CSS file for styling
import Header from "./header";
import Footer from "./footer";
import image1 from "../images/swim1.jpg";
import image2 from "../images/yoga1.jpg";
import image from "../images/circle.png";
const About = () => {
  return (
    <div className="main-container">
      <Header />

      <main>
        <div className="content">
          <div className="flex-container">
            <div className="image-section">
              <img src={image1} alt="First Imergage" />
              <img src={image2} alt="Second Iermage" />
            </div>
            <div className="text-section">
              <p>
                The Erna and Henry Leir Peace preschool was founded in 1982.
                Each year, more than eighty Jewish, Muslim, and Christian
                children aged 3 months – 4 years attend the preschool where they
                learn together is classes that each have a Hebrew and Arabic
                speaking teacher. The children are raised in an environment of
                natural partnership.
              </p>
              <p>
                The preschool families and staff live today the dream of a
                better tomorrow for all of us.
              </p>
              <p>
                We celebrate the Jewish, Muslim, and Christian holidays. The
                children prepare greeting cards for the Jewish New Year,
                decorate the Christmas tree and bake sweets for Id al Fitr.
                Manty more holidays are celebrated in this manner, sometimes
                with the parents to everyone's delight and excitement.
              </p>
              <p>
                The preschool puts special emphasis on the emotional, social and
                pedagogical development of each child.
              </p>
              <p>
                In our kindergarten you will find:
                <ul>
                  <li>
                    A very responsible, dedicated and experienced staff who
                    gives an abundance of warmth and love working according to a
                    rich educational and developmental program.
                  </li>
                  <li>
                    Professional accompaniment and guidance on a daily basis, by
                    the director of the kindergarten and by a pedagogical
                    supervisor.
                  </li>
                  <li>
                    An enrichment program that includes unique classes,
                    activities and games aimed at motor, cognitive, emotional
                    and social development.
                  </li>
                  <li>
                    Small size groups, which allow attention and personal
                    treatment to be given to each child according to his needs.
                  </li>
                  <li>
                    A rich food menu accompanied by a child clinical
                    nutritionist.
                  </li>
                  <li>
                    Closed-circuit security cameras and personal insurance for
                    each child
                  </li>
                  <li>
                    A warm, happy and enveloping atmosphere as little ones and
                    their parents need and love.
                  </li>
                </ul>
              </p>
              <p>The preschool is open 6 days a week 7:30-16:00.</p>
              <h1 className="activities-title">
                Developmental areas of children
              </h1>
              <div className="imported-image-container">
                <img
                  src={image}
                  alt="Imported Description"
                  className="imported-image"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
