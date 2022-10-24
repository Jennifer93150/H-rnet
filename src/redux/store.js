import { createStore} from "https://cdn.skypack.dev/redux@4.0.5";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
 
/**
 * State
 */
const initialState = [{
    firstName: "",
    lastName: "",
    dateBirth: "",
    startDate: "",
    street:"",
    city:"",
    pays:"",
    zipCode:"",
    department:""}]
;

export const saveFirstname = (firstname) => ({ 
  type: "saveFirstname",
  payload: firstname,
});

export const saveLastname = (lastname) => ({ 
  type: "saveLastname",
  payload: lastname,
});

export const saveDateBirth = (dateBirth) => ({ 
  type: "saveDateBirth",
  payload: dateBirth,
});

export const saveStartDate = (startDate) => ({ 
  type: "saveStartDate",
  payload: startDate,
});

export const saveStreet = (street) => ({ 
  type: "saveStreet",
  payload: street,
});

export const saveCity = (city) => ({ 
  type: "saveCity",
  payload: city,
});

export const saveState = (pays) => ({ 
  type: "saveState",
  payload: pays,
});

export const saveZipCode = (zipCode) => ({ 
  type: "saveZipCode",
  payload: zipCode,
});

export const saveDepartment = (department) => ({ 
  type: "saveDepartment",
  payload: department,
});

// export const emptyState = () => ({ 
//   type: "emptyState",
// });

export const removeStorage = () => ({ 
  type: "removeStorage",
});

/**
 * Reducer
 * @param {object} state 
 * @param {string} action 
 * @returns {object}
 */
export function reducer(state = initialState, action) {
 
  if (action.type === 'saveFirstname') {
    console.log(action.payload)
      return{
        ...state,
          firstName: action.payload,
    }
  }
  if (action.type === 'saveLastname') {
    console.log(action.payload)
      return{
        ...state,
          lastName: action.payload,
    }
  }
  if (action.type === 'saveDateBirth') {
    console.log(action.payload)
      return{
        ...state,
          dateBirth: action.payload,
    }
  }
  if (action.type === 'saveStartDate') {
    console.log(action.payload)
      return{
        ...state,
        startDate: action.payload,
    }
  }
  if (action.type === 'saveStreet') {
    console.log(action.payload)
      return{
        ...state,
          street: action.payload,
    }
  }
  if (action.type === 'saveCity') {
    console.log(action.payload)
      return{
        ...state,
          city: action.payload,
    }
  }
  if (action.type === 'saveState') {
    console.log(action.payload)
      return{
        ...state,
          pays: action.payload,
    }
  }
  if (action.type === 'saveZipCode') {
    console.log(action.payload)
      return{
        ...state,
          zipCode: action.payload,
    }
  }
  if (action.type === 'saveDepartment') {
    console.log(action.payload)
      return{
        ...state,
          department: action.payload,
    }
    
  }
  if (action.type === 'removeStorage') {
    storage.removeItem('persist:root');
  }
  // Otherwise we return the state without changing it
 
  return state;
}

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

// We create the store with the state and the reducer
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);



