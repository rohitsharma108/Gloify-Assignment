import fetched from '../apis/fetched';
import { 
    USERS_DATA,
     USER_DATA
} from './types';



export const usersData = () => async (dispatch) => {
       const response = await fetched.get('/api/users');
       console.log("response is", response.data.data);
       dispatch({ type: USERS_DATA, payload: response.data.data })

    };

       

 export const userData = (id) => async (dispatch) => {
         const response = await fetched.get(`/api/users/${id}`);
         console.log("response is", response.data.data);
         dispatch({ type: USER_DATA, payload: response.data.data })
 };
