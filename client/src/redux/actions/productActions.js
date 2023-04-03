import axios from "axios";
import * as actionType from "../constants/productConstant";

const URL = "http://localhost:8000";

export const getProduct = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/product`);
    dispatch({ type: actionType.GET_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionType.GET_PRODUCT_FAIL, payload: error.message });
    console.log("Error occured!");
  }
};

