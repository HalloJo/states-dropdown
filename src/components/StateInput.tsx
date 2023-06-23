import { State } from "../data/states";

import "./StateInput.scss";

type StateInputProps = {
  state: State;
  selectedStates: object;
  setSelectedStates: (event: InputEvent) => void;
};

export const StateInput = ({
  state,
  selectedStates,
  setSelectedStates,
}: StateInputProps) => {
  return (
    <li className="stateInput" key={state.name}>
      <fieldset className="states__list_fieldset">
        <input
          onChange={(event) =>
            setSelectedStates({ [state.abbreviation]: event.target.checked })
          }
          checked={selectedStates[state.abbreviation]}
          id={`input-${state.abbreviation}`}
          type="checkbox"
        />
        <label htmlFor={`input-${state.abbreviation}`}>{state.name}</label>
      </fieldset>
    </li>
  );
};

export default StateInput;
