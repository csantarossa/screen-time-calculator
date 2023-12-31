import React, { useState, useRef } from "react";
import Clock from "../assets/icons/clock.png";
import Age from "../assets/icons/age.png";

const Calculator = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [calculated, setCalculated] = useState(false);
  const [screenTime, setScreenTime] = useState("");
  const [age, setAge] = useState("");
  const [results, setResults] = useState({
    weekly: 0,
    monthly: 0,
    annually: 0,
    toNinety: 0,
  });
  const daysInMonth = () => {
    return Math.ceil(results.monthly / 24);
  };

  const monthsInYear = () => {
    const daysInYear = results.annually / 24; // Convert hours to days
    const months = daysInYear / 30.44; // Use an average month length of 30.44 days
    return Math.ceil(months); // Format to 1 decimal place
  };

  const yearsSpentOnPhone = () => {
    const userAge = parseInt(age);
    const dailyHours = parseFloat(screenTime);

    if (!isNaN(userAge) && !isNaN(dailyHours)) {
      const yearsRemaining = 90 - userAge;
      const annualHours = dailyHours * 365; // Calculate annual screen time
      const totalHours = annualHours * yearsRemaining; // Total hours from now to age 90
      const totalYears = totalHours / (24 * 365); // Convert total hours to years
      return Math.ceil(totalYears); // Format to 1 decimal place
    }

    return 0; // Return 0 or some other default value if the input is not a number or incomplete
  };

  const handleScreenTimeChange = (event) => {
    setScreenTime(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const calculateScreenTime = () => {
    const dailyHours = parseFloat(screenTime);
    const userAge = parseInt(age);

    if (!isNaN(dailyHours) && !isNaN(userAge)) {
      const weekly = Math.ceil(dailyHours * 7);
      const monthly = Math.ceil(dailyHours * 30);
      const annually = Math.ceil(dailyHours * 365);
      const yearsRemaining = 90 - userAge;
      const toNinety = Math.ceil(annually * yearsRemaining);

      setResults({ weekly, monthly, annually, toNinety });
    }
    setCalculated(true);
    resultsRef.current.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      // Assuming you have a state or method to add the animation class to the elements
      // For example, set a state that your elements use to conditionally apply the 'fadeIn' class
      setStartAnimation(true);
    }, 500); // Adjust this duration to match your scroll duration
  };

  const resultsRef = useRef(null);

  return (
    <div className="h-[200vh] w-[80vw] flex flex-col">
      <div className="flex flex-col gap-16 h-screen justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center gap-3">
          <div className="flex justify-center items-center gap-3">
            <img src={Clock} alt="" />
            <h6 className="input-label">Screen Time</h6>
          </div>

          <input
            type="number"
            inputmode="decimal"
            className="text-center h-12 rounded-lg inset-shadow text-[#333333] font-bold text-xl py-7"
            value={screenTime}
            onChange={handleScreenTimeChange}
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-3 pb-10">
          <div className="flex justify-center items-center gap-3">
            <img src={Age} alt="" />
            <h6 className="input-label">Age</h6>
          </div>

          <input
            type="number"
            inputmode="decimal"
            className="text-center h-12 rounded-lg inset-shadow text-[#333333] font-bold text-xl py-7"
            value={age}
            onChange={handleAgeChange}
          />
        </div>
        <button
          onClick={calculateScreenTime}
          className="text-center w-[200px] py-4 text-xl font-semibold px-8 bg-[#5f5deb] rounded-lg hover:bg-[#7674f0] duration-200"
        >
          Calculate
        </button>
      </div>

      {/*  */}
      <div
        className="h-screen text-center flex flex-col justify-center items-center gap-14 pb-44"
        ref={resultsRef}
      >
        {/* results */}
        <div>
          <h1 className="text-5xl py-8 font-normal text-center">Results</h1>
          <h3>Weekly</h3>
          <div className="flex justify-center items-center gap-2">
            <p
              className={`text-[#6d6bf3] font-semibold text-lg duration-1000 opacity-0 ${
                startAnimation
                  ? "translate-x-0 opacity-100"
                  : "translate-x-[100%]"
              }`}
            >
              {results.weekly} hours
            </p>{" "}
            <p
              className={`text-[#FFFFFF] font-thin text-lg duration-1000 opacity-0 ${
                startAnimation
                  ? "translate-x-0 opacity-100"
                  : "translate-x-[100%]"
              }`}
            >
              {" "}
              per week
            </p>
          </div>
        </div>
        <div>
          <h3>Monthly</h3>
          <div className="flex justify-center items-center gap-2">
            <p
              className={`text-[#6d6bf3] font-semibold text-lg duration-1000 opacity-0 ${
                startAnimation
                  ? "translate-x-0 opacity-100"
                  : "translate-x-[100%]"
              }`}
            >
              {results.monthly} hours
            </p>
            <p
              className={`text-[#FFFFFF] font-thin text-lg duration-1000 opacity-0 ${
                startAnimation
                  ? "translate-x-0 opacity-100"
                  : "translate-x-[100%]"
              }`}
            >
              {" "}
              per month
            </p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <p
              className={`text-[#6d6bf3] font-semibold text-lg duration-1000 opacity-0 ${
                startAnimation
                  ? "translate-x-0 opacity-100"
                  : "translate-x-[100%]"
              }`}
            >
              {daysInMonth()} days
            </p>{" "}
            <p
              className={`text-[#FFFFFF] font-thin text-lg duration-1000 opacity-0 ${
                startAnimation
                  ? "translate-x-0 opacity-100"
                  : "translate-x-[100%]"
              }`}
            >
              {" "}
              per month
            </p>
          </div>
        </div>
        <div>
          <h3 className="">Annually</h3>
          <div className="flex justify-center items-center gap-2">
            <p
              className={`text-[#6d6bf3] font-semibold text-lg duration-1000 opacity-0 ${
                startAnimation
                  ? "translate-x-0 opacity-100"
                  : "translate-x-[100%]"
              }`}
            >
              {results.annually} hours
            </p>
            <p
              className={`text-[#FFFFFF] font-thin text-lg duration-1000 opacity-0 ${
                startAnimation
                  ? "translate-x-0 opacity-100"
                  : "translate-x-[100%]"
              }`}
            >
              {" "}
              per year
            </p>
          </div>

          <div className="flex justify-center items-center gap-2">
            <p
              className={`text-[#6d6bf3] font-semibold text-lg duration-1000 opacity-0 ${
                startAnimation
                  ? "translate-x-0 opacity-100"
                  : "translate-x-[100%]"
              }`}
            >
              {monthsInYear()} months{" "}
            </p>
            <p
              className={`text-[#FFFFFF] font-thin text-lg duration-1000 opacity-0 ${
                startAnimation
                  ? "translate-x-0 opacity-100"
                  : "translate-x-[100%]"
              }`}
            >
              per year
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-[#6d6bf3] font-semibold">At 90 years old</h3>
          <div className="flex justify-center items-center gap-2">
            <p
              className={`text-[#6d6bf3] font-semibold text-lg duration-1000 opacity-0 ${
                startAnimation
                  ? "translate-x-0 opacity-100"
                  : "translate-x-[100%]"
              }`}
            >
              {results.toNinety} hours{" "}
            </p>
          </div>

          <div className="flex justify-center items-center gap-2">
            <p
              className={`text-[#6d6bf3] font-semibold text-lg duration-1000 opacity-0 ${
                startAnimation
                  ? "translate-x-0 opacity-100"
                  : "translate-x-[100%]"
              }`}
            >
              {yearsSpentOnPhone()} years{" "}
            </p>
          </div>
          <p
            className={`text-[#FFFFFF] font-thin text-lg duration-1000 opacity-0 ${
              startAnimation
                ? "translate-x-0 opacity-100"
                : "translate-x-[100%]"
            }`}
          >
            {" "}
            ... from now until 90
          </p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
