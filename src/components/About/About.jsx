import React from "react";
import "./About.css";
import person1 from "../../assets/person1.jpg";
import person4 from "../../assets/person4.jpeg";
import person6 from "../../assets/person6.jpeg";
import person2 from "../../assets/person2.jpeg";
import person3 from "../../assets/person3.jpeg";
import Title from "../Title/Title";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-left">
          <img src={person1} alt="" className="about-img" />
        </div>
        <div className="about-right">
          <h2>Interior designer founder</h2>
          <h3>Keith Keller</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
            reiciendis laboriosam repellendus distinctio et rem iste itaque
            nostrum perspiciatis pariatur, odit ipsum sed quidem aliquam. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Ratione velit
            voluptatum suscipit, accusantium dicta molestiae quia laboriosam
            consectetur corrupti delectus neque nam iusto laborum doloribus,
            nostrum aliquid obcaecati quo quidem eligendi quod, voluptate
            quibusdam id ipsam numquam! Tempore illo, ducimus magni nam animi
            aliquid quaerat voluptas earum! Corporis, sed dicta.
          </p>
        </div>
      </div>
      <div className="about">
        <div className="about-left">
          <img src={person4} alt="" className="about-img" />
        </div>
        <div className="about-right">
          <h2>Interior designer co-founder</h2>
          <h3>Diane Banks</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
            reiciendis laboriosam repellendus distinctio et rem iste itaque
            nostrum perspiciatis pariatur, odit ipsum sed quidem aliquam. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Ratione velit
            voluptatum suscipit, accusantium dicta molestiae quia laboriosam
            consectetur corrupti delectus neque nam iusto laborum doloribus,
            nostrum aliquid obcaecati quo quidem eligendi quod, voluptate
            quibusdam id ipsam numquam! Tempore illo, ducimus magni nam animi
            aliquid quaerat voluptas earum! Corporis, sed dicta.
          </p>
        </div>
      </div>
      <Title Title="Meet Our Team" />
      <p className="des">
        A descriptive paragraph that tells clients how good you are and proves
        thay you are the best choice
      </p>
      <div className="team-members">
        <div className="team-member">
          <img src={person6} alt="" />
          <h4>Sam Smith</h4>
          <p>Lead Interior Designer</p>
        </div>
        <div className="team-member">
          <img src={person2} alt="" />
            <h4>Ani Kaur</h4>
            <p>Interior Decorator</p>
        </div>
        <div className="team-member">
          <img src={person3} alt="" />
          <h4>Mike Straut</h4>
          <p>Interior Designer</p>
        </div>
      </div>
    </>
  );
};

export default About;
