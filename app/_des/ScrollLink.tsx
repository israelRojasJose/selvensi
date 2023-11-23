"use client";
import React, { useState } from "react";

const ScrollOptions = () => {
   const [selectedOption, setSelectedOption] = useState("");

   const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedOption(event.target.value);
   };

   return (
      <div>
         <label htmlFor="options">Select an option:</label>
         <select
            id="options"
            value={selectedOption}
            onChange={handleOptionChange}
         >
            <option value="">--Please choose an option--</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
         </select>
      </div>
   );
};

export default ScrollOptions;
