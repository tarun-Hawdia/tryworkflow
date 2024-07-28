// src/components/DropdownPage.js
import React, { useState } from "react";
import "./DropdownPage.css";

const options = ["Age", "Gender", "Pincode"];
const loanStatusOption = "Loan Status";

const DropdownPage = () => {
  const [dropdowns, setDropdowns] = useState([{ option: "", text: "" }]);
  const [loanStatus, setLoanStatus] = useState("");

  const handleOptionChange = (index, value) => {
    const newDropdowns = [...dropdowns];
    newDropdowns[index].option = value;
    setDropdowns(newDropdowns);

    if (index === dropdowns.length - 1 && dropdowns.length < 3) {
      // limit to 3 rows
      setDropdowns([...dropdowns, { option: "", text: "" }]);
    }
  };

  const handleTextChange = (index, value) => {
    const newDropdowns = [...dropdowns];
    newDropdowns[index].text = value;
    setDropdowns(newDropdowns);
  };

  const getInputType = (option) => {
    if (option === "Age") return "number";
    return "text";
  };

  const handleReset = () => {
    setDropdowns([{ option: "", text: "" }]);
    setLoanStatus("");
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log(
      "Form submitted with data:",
      dropdowns,
      "Loan Status:",
      loanStatus
    );
  };

  const getFilteredOptions = (currentIndex) => {
    const selectedOptions = dropdowns
      .slice(0, currentIndex)
      .map((d) => d.option);
    return options.filter((option) => !selectedOptions.includes(option));
  };

  const allFieldsSelected =
    dropdowns.every((d) => d.option !== "" && d.text !== "") &&
    loanStatus !== "";

  return (
    <div className="dropdown-page">
      <h1>Dropdown Page</h1>
      {dropdowns.map((dropdown, index) => (
        <div key={index} className="dropdown-row">
          <select
            value={dropdown.option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          >
            <option value="" disabled>
              Select option
            </option>
            {getFilteredOptions(index).map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <input
            type={getInputType(dropdown.option)}
            value={dropdown.text}
            onChange={(e) => handleTextChange(index, e.target.value)}
            placeholder={`Enter ${dropdown.option.toLowerCase()}`}
          />
          {index < dropdowns.length - 1 && (
            <select
              value={dropdowns[index + 1]?.option || ""}
              onChange={(e) => handleOptionChange(index + 1, e.target.value)}
              disabled={!dropdown.option}
            >
              <option value="" disabled>
                Select option
              </option>
              {getFilteredOptions(index + 1).map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
        </div>
      ))}
      {dropdowns.length === 3 &&
        dropdowns.every((d) => d.option !== "" && d.text !== "") && (
          <div className="dropdown-row">
            <select
              value={loanStatus}
              onChange={(e) => setLoanStatus(e.target.value)}
            >
              <option value="" disabled>
                Loan Status
              </option>
              <option value={loanStatusOption}>{loanStatusOption}</option>
            </select>
          </div>
        )}
      <button onClick={handleReset} className="reset-button">
        Reset
      </button>
      {allFieldsSelected && (
        <button onClick={handleSubmit} className="submit-button">
          Submit
        </button>
      )}
    </div>
  );
};

export default DropdownPage;
