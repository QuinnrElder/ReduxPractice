console.clear();

//ACTIONS
const createPolicy = (name, amount) => {
  return {
    type: "CREATE_POLICY",
    payload: {
      name: name,
      amount: amount,
    },
  };
};

const deletPolicy = (name) => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name: name,
    },
  };
};

const createClaim = (name, amountOfMoneyToColect) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name: name,
      amountOfMoneyToColect: amountOfMoneyToColect,
    },
  };
};

//REDUCERS
const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    return [...oldListOfClaims, action.payload];
  }
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === "CREATE_CLAIM") {
    return bagOfMoney - action.payload.amountOfMoneyToColect;
  } else if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.payload.amount;
  } else {
    return bagOfMoney;
  }
};

const policies = (listOfPolicies = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === "DELETE_POLICY") {
    return listOfPolicies.filter((pol) => pol !== action.payload.name);
  } else {
    return listOfPolicies;
  }
};

const { createStore, combineReducers } = Redux;
const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies,
});

const store = createStore(ourDepartments);

store.dispatch(createPolicy("Quinn", 45));
store.dispatch(createPolicy("Robert", 30));
store.dispatch(createPolicy("Elder", 60));

store.dispatch(createClaim("Quinn", 45));
store.dispatch(createClaim("Quinn", 120));

store.dispatch(deletPolicy("Quinn"));

console.log(store.getState());
