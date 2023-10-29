import { SET_COMPLETED_CURRENT_PAGE, SET_COMPLETED_ITEMS_PER_PAGE, SET_ONGOING_CURRENT_PAGE, SET_ONGOING_ITEMS_PER_PAGE } from "../types";

// ongoingOrderActions.js
export const setOngoingCurrentPage = (page) => ({
  type: SET_ONGOING_CURRENT_PAGE,
  ongoingCurrentPage: page,
});

export const setOngoingItemsPerPage = (pageSize) => ({
  type: SET_ONGOING_ITEMS_PER_PAGE,
  ongoingItemsPerPage: pageSize,
});

// completedOrderActions.js
export const setCompletedCurrentPage = (page) => ({
  type: SET_COMPLETED_CURRENT_PAGE,
  completedCurrentPage: page,
});

export const setCompletedItemsPerPage = (pageSize) => ({
  type: SET_COMPLETED_ITEMS_PER_PAGE,
  completedItemsPerPage: pageSize,
});

  