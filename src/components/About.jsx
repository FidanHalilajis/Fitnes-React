import React from "react";
import img from "../assets/img/about.png";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center md:mx-32 mx-5">
      <div>
        <h1 className="text-5xl font-semibold text-center md:text-start mt-14 md:mt-0">
          About Us
        </h1>

        <div className="w-full md:w-3/4 space-y-5 mt-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
            voluptatem necessitatibus inventore quos. Ab, maxime. Modi dolore
            distinctio assumenda natus!
          </p>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum at
            vero vel similique et! Vitae, possimus. Nihil nobis obcaecati at
            magnam qui alias impedit ipsum!
          </p>
        </div>
      </div>
      <div>
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
