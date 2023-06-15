import { useEffect, useReducer } from "react";

const initialState = {
  cities: JSON.parse(localStorage.getItem("cities")) || [],
  inputValue: "",
  editingCity: "",
};

const reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "ADD_CITY": {
      const newState = { ...state, cities: [...state.cities, action.payload] };
      return newState;
    }
    case "DELETE_CITY": {
      const oldCities = state.cities;
      console.log(oldCities);
      console.log(action.payload);

      const newCities = oldCities.filter((el) => el !== action.payload);
      console.log(newCities);
      return { ...state, cities: newCities };
    }
    case "EDIT_CITY": {
      return {
        ...state,
        inputValue: action.payload,
        editingCity: action.payload,
      };
    }
    case "RENAME_CITY": {
      return { ...state, inputValue: action.payload };
    }
    case "RENAME_CITY_DONE": {
      const { editingCity } = state;
      const oldCities = state.cities;
      const newFilteredRename = oldCities.filter((el) => el !== editingCity);
      const newCitiesRename = [...newFilteredRename, action.payload];
      return {
        ...state,
        cities: newCitiesRename,
        inputValue: "",
        editingCity: "",
      };
    }

    case "RESET_CITY": {
      return { ...state, inputValue: initialState.inputValue };
    }

    default:
      return initialState;
  }
};

export const useCities = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { cities } = state;

  useEffect(() => {
    //storage.setItem(название Ключа, значение Ключа);
    localStorage.setItem("cities", JSON.stringify(cities));
  }, [cities]);
  return [state, dispatch];
};
