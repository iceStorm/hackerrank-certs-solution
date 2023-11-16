import React, { useState } from "react";
import "./App.css";
import Dropdown from "./components/dropdown";
import "h8k-components";

const title = "Employee Information";

function App() {
  const [country, setCountry] = useState("");
  const [language, setLanguage] = useState("");

  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-centre justify-content-center mt-50">
        <section className="layout-column">
          <div data-testid="country-options">
            <Dropdown
              options={countryOptions}
              labelText={"Select Country"}
              onChange={setCountry}
            />
          </div>
          <div data-testid="language-options">
            <Dropdown
              options={languageOptions}
              labelText={"Select Language"}
              onChange={setLanguage}
            />
          </div>
          <label className="mt-50 text-align-center">Final Selections:</label>
          <label className="mt-10 finalText" data-testid="country-selected">
            Country Selected: {`${country}`}
          </label>
          <label className="mt-10 finalText" data-testid="language-selected">
            Language Selected: {`${language}`}
          </label>
        </section>
      </div>
    </div>
  );
}

const countryOptions = [
  "USA",
  "Germany",
  "France",
  "Canada",
  "India",
  "Poland",
  "Japan",
  "Spain",
  "Australia",
];

const languageOptions = ["English", "Spanish", "French", "German"];

export default App;
