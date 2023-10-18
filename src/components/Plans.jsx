import React from "react";
import PlansCard from "../layouts/PlansCard";

const Plans = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center md:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center">Gym Membership</h1>

      <div className="flex flex-col md:flex-row justify-center mt-10 gap-8">
        <PlansCard title="Trail Plan" price="10" />
        <PlansCard title="Plus plan" price="150" />
        <PlansCard title="ProMax Plan" price="200" />
      </div>
    </div>
  );
};

export default Plans;
