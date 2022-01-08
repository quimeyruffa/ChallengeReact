import { useReducer } from 'react';
import UserReducer from './UserReducer';
import UserContext from './UserContext';
import {TOKEN} from '../type'
const UserState = (props) => {
    const URL = ' http://localhost:8081/api/members';
    let token = TOKEN;
    const initialState = {
        user_data: [], 
        last_user:[]
    }
    const [state, dispatch] = useReducer(UserReducer, initialState)

  

    const reload = () =>{
        getUserData();
    }

    const setUserData = async (firstName, lastName, address, ssn) => {
        
        await fetch(`${URL}`, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer '+ token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                address: address,
                ssn
              })
        }).then((res) => res.json())
        .then(() => {
            alert('User data updated successfully')
        })
        
   
    }


    const getUserData = async () => {
        await fetch(`${URL}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer '+ token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((res) => res.json())
            .then((data) => {
               
                dispatch({
                    type: 'GET_USER_DATA',
                    payload: data
                })

               
            })
        } 


    return (
        <UserContext.Provider value={{
            user_data: state.user_data,
            last_user: state.last_data,
            getUserData,
            setUserData,
            reload
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;