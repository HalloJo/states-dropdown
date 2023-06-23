import { useState } from "react";

import "./App.scss";
import { states } from "./data/states";
// import { StateInput } from "./components/StateInput";

const App = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [selectedStates, setSelectedStates] = useState<Record<string, boolean>>(
    states.reduce(
      (object, state) => ({
        ...object,
        [state.abbreviation]: false,
      }),
      {}
    )
  );

  const numberOfSelectedStates =
    Object.values(selectedStates).filter(Boolean).length;

  console.log(numberOfSelectedStates);

  return (
    <div className="states__container">
      <fieldset className="states__fieldset">
        <legend>🗺️ States dropdown</legend>
        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <p>
            {numberOfSelectedStates === 0
              ? "-- Select some states --"
              : `You have selected ${numberOfSelectedStates} states`}
          </p>
          {isDropdownOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          )}
        </button>
      </fieldset>
      {isDropdownOpen && (
        <div className="states__panel">
          <ul className="states__list">
            {states.map((state) => (
              <li className="stateInput" key={state.name}>
                <fieldset
                  className={
                    selectedStates[state.abbreviation] ? "selected" : ""
                  }
                >
                  <input
                    onChange={(event) =>
                      setSelectedStates({
                        ...selectedStates,
                        [state.abbreviation]: event.target.checked,
                      })
                    }
                    checked={selectedStates[state.abbreviation]}
                    id={`input-${state.abbreviation}`}
                    type="checkbox"
                  />
                  <label htmlFor={`input-${state.abbreviation}`}>
                    {state.name}
                  </label>
                </fieldset>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
