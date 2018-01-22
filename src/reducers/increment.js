import { getCountFromAPI } from '../services/api';

const INC = 'INC';

const DEC = {}; // Unique hidden value
const SET = {}; // Unique hidden value

const TRIGGER = 'TRIGGER_API_CALL';

const incrementAction = { type: INC };
const triggerAction = { type: TRIGGER };

const incrementReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case SET:
      return { count: action.count };
    case INC:
      return { count: state.count + 1 };
    case DEC:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const uselessMW = store => next => (action) => {
  console.log(action, store.getState().count);
  next(action);
};

const delayMW = store => next => (action) => {
  next(action);
  if (action.type === INC) {
    setTimeout(() => {
      store.dispatch({ type: DEC });
    }, 3000);
  }
};

const startAPICallMW = store => next => (action) => {
  if (action.type === TRIGGER) {
    getCountFromAPI()
      .then((count) => {
        store.dispatch({ type: SET, count });
      });
  } else {
    next(action);
  }
};

const startAPICallThunk = (dispatch) => {
  getCountFromAPI()
    .then((count) => {
      dispatch({ type: SET, count });
    });
};

const thunkMW = store => next => (action) => {
  if (typeof action === 'function') {
    action(store.dispatch, store.getState());
  } else {
    next(action);
  }
};

export {
  incrementAction,
  incrementReducer,
  uselessMW, delayMW,
  triggerAction, startAPICallMW,
  startAPICallThunk, thunkMW,
};
