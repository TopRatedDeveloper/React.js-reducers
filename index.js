import {combineReducers} from 'redux';
// System reducers
import networkReducer from './network-reducer';

// Application logic reducer
import coatingSizesReducer from './coating-sizes-reducer';
import panelDepthsReducer from './panel-depths-reducer';
import coatingsReducer from './coatings-reducer';
import wipTypesReducer from './wip-types-reducer';
import formReducer from './form-reducer';
import appReducer from 'containers/app/reducer';
import inventoryReducer from 'containers/inventory/reducer';
import cuttingSheetGeneratorReducer from 'containers/cutting-sheet-generator/reducer';
import productionSheetReducer from 'containers/production-sheet/reducer';
import coatingRunReducer from 'containers/coating-run/reducer';
import productionPlanningReducer from 'containers/production-planning/reducer';
import inventoryV2Reducer from 'containers/inventory-v2/reducer';
import orderDetailReducer from 'containers/order-detail/reducer';

import oldInventoryReducer from './inventory-reducer';
import ordersReducer from 'containers/orders/reducer';
import customersReducer from './customers-reducer';
import shortageSummaryReducer from 'containers/shortage-summary/reducer';
import configurationReducer from 'containers/configuration/reducer';
import packagingSheetReducer from 'containers/packaging-sheet/reducer';


const rootReducer = combineReducers({
  app: appReducer,
  inventory: inventoryReducer,
  form: formReducer,
  cuttingSheetGenerator: cuttingSheetGeneratorReducer,
  spraySheet: productionSheetReducer,
  coatingRun: coatingRunReducer,
  productionPlanning: productionPlanningReducer,
  network: networkReducer,
  coatingsizes: coatingSizesReducer,
  paneldepths: panelDepthsReducer,
  coatings: coatingsReducer,
  wipTypes: wipTypesReducer,
  oldInventory: oldInventoryReducer,
  orders: ordersReducer,
  customers: customersReducer,
  inventoryV2: inventoryV2Reducer,
  orderDetail: orderDetailReducer,
  shortageSummary: shortageSummaryReducer,
  configuration: configurationReducer,
  packagingSheet: packagingSheetReducer
});

export default rootReducer;