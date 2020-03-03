import {INIT_DATA, FILTER_ORDERS, UPDATE_ORDER} from '../constants';

import {STATUS_DONE} from '../constants';

export default function ordersReducer (state=[], {type, status, payload}) {
  if (status !== STATUS_DONE) {
    return state;
  }

  if (type === INIT_DATA) {
    const orders = [];

    return orders;
  }
  else if (type === FILTER_ORDERS) {
    const {orders} = payload;

    return orders;
  }
  else if (type === UPDATE_ORDER) {
    const {order} = payload;

    const index = state.findIndex(item => item.id === order.id);
    const newOrders = Object.assign([], state);
    if (index !== -1) {
      newOrders.splice(index, 1, order);
    }
    else {
      newOrders.push(order);
    }

    return newOrders;
  }

  return state;
};
