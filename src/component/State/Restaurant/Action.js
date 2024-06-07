
import { api } from "../../../config/api";

import {

}
import { GET_ALL_EVENTS_REQUEST } from "./ActionTypes";

export const getAllRestaurantsAction = (token) => {
    return async (dispatch) => {
        dispatch({type:GET_ALL_EVENTS_REQUEST});
        try{
            const { data } = await api.get("/api/restaurants",{
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            dispatch(getAllRestaurantsSuccess(data));
            console.log("all restaurant", data);
        }catch(error){

        }
    }
}