import axios from 'axios';

export const START_FETCH = 'START_FETCH';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const ADD_SMURF = 'ADD_SMURF';


export const getSmurfs = () => dispatch => {

    dispatch({type: START_FETCH})
    axios.get('http://localhost:3333/smurfs')
    .then((res) => {
        console.log(res.data)
        dispatch({type:FETCH_SUCCESS, payload: res.data})
    })
    .catch(err => dispatch({type:FETCH_FAIL, payload: 'could not load smurfs'}))

}

export const addSmurf = (smurf) => dispatch => {
    
    axios.post('http://localhost:3333/smurfs', smurf)
     .then((res) => {
    dispatch({type: ADD_SMURF, payload: res.data})
    })
    .catch((err) => console.log(err))
}
   
    


//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.