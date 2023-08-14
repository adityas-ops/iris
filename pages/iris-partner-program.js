import React from "react";

function iris() {
  return (
    <>
      <div className="pt-[6.6vmax]">
        <div className=" max-w-[45.5%] text-[#3F401A] mx-auto">
          <h3
            style={{
              fontSize: "calc((1.5 - 1) * 1.2vw + 1rem)",
            }}
            className=" font-Grotesque font-bold "
          >
            Iris Partner Program
          </h3>
          <p className=" font-Roboto font-bold text-[17.5px] my-[1.5rem]">
            Intro
          </p>
          <p className="font-Roboto text-[17.5px] my-[1rem] leading-[1.6] ">
            The Iris Partner Program is for beauty-lovers sharing their
            interest, opinions, and daily experiences with beauty products. Iris
            is a place that is uplifting, inspiring and — most of all —
            interactive. So we built a program for devoted beauty enthusiasts
            that offers a variety of benefits, with different tier levels that
            capture the loyal and consistency of the Iris community.
          </p>
          <p className="font-Roboto my-[1.5rem] text-[17.5px] leading-[1.6] ">
            At a base level active users on Iris are automatically consider
            apart of our Core tier. We encourage all Iris beauty-lovers to apply
            for the Plus and Partner Tiers. Below is an outline of the Iris
            Partner Program benefits; as well as the application to the Plus +
            Partner Tiers.
          </p>
        </div>
      </div>
      <div className="mt-[4rem]">
        <img
          src="/images/partner/Screenshot+2023-05-23+at+3.16.35+PM.png"
          alt="as"
          className=" max-w-[53.125%] mx-auto "
        />
      </div>
      <div className="max-w-[45.5%] text-[#3F401A] mt-[6.3vmax] mb-[4.3vmax] mx-auto">
        <p className="font-Roboto text-[17.5px] font-[300] text-center my-[1rem] leading-[1.6] ">
          To be considered for Plus + Partner tiers the following requirements
          must take place:
          <br />
          <strong className=" font-bold">
            As Iris evolves, this program + requirements will also evolve
          </strong>
        </p>
      </div>
      <div className=" max-w-[60%] mx-auto pb-[6.6vmax] flex justify-between items-center">
        <div className=" max-w-[290px] w-full text-[17.7px]">
          <p className=" text-center font-bold">Plus:</p>
          <ul className=" list-disc leading-[2] font-[300] opacity-90 text-center">
            <li >Have created at least 2 routines with community engagement </li>
            <li > 3 saves a week </li>
            <li>Review at least 1 holy grail in the first month</li>
            <li>Active community member</li>
          </ul>
        </div>
        <div className=" max-w-[290px] w-full text-[17.7px]">
          <p className=" text-center font-bold">Partner:</p>
          <ul className=" list-disc leading-[2] font-[300] opacity-90 text-center">
            <li >Have created at least 5 routines with community engagement  </li>
            <li > 5 saves a week </li>
            <li>Review at least 10 holy grails in the first month</li>
            <li>Community and thought leader on Iris</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default iris;
