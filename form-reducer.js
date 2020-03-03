import Immutable from 'seamless-immutable';
import typeToReducer from 'type-to-reducer';
import * as AppActions from 'containers/app/actions';

const initialState = Immutable({
  loading: false,
  coatings: [],
  coatingSizes: [],
  surfaces: [],
  cradleWidths: [],
  cradleDepths: [],
  panelDepths: [],
  sheetSizes: [],
  terceroSizes: [],
  terceroGrades: []
});

export default typeToReducer({
  [AppActions.FETCH_FORM_DATA]: {
    PENDING(state) {
      return state.merge({
        loading: true
      });
    },

    FULFILLED(state, action) {
      console.log('pay', action.payload);
      return state.merge({
        loading: false,
        ...action.payload
      });
    },

    REJECTED(state) {
      return state.merge({
        loading: false
      });
    }
  }
}, initialState);