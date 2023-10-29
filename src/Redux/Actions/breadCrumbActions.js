import {SELECT_CATEGORY, SELECT_SUBCATEGORY } from '../types';

export const selectCategory = (category) => ({
    type: SELECT_CATEGORY,
    payload: category,
  });
  
export const selectSubcategory = (subcategory) => ({
    type: SELECT_SUBCATEGORY,
    payload: subcategory,
  });

