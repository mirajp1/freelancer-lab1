import * as API from '../api/auth';

export function loginUser(payload) {

    console.log(payload);

    return function(dispatch) {
        API.login(payload)
            .then(res => {

                if(!res.error){
                    console.log("no error");
                    dispatch({
                        type:"LOGIN_USER",
                        payload:res
                    });
                    localStorage.setItem('jwtToken', res.token);
                    localStorage.setItem('userId', res.user.id);
                    window.location.href = '/profile';
                }
                else{
                    console.log("error");
                    dispatch({
                        type:"LOGIN_USER_ERROR",
                        payload:res
                    });
                }
            })

    }

}

export function signUpUser(payload) {

    console.log(payload);

    return function(dispatch) {
        API.login(payload)
            .then(res => {

                if(!res.error){
                    console.log("no error");
                    dispatch({
                        type:"SIGNUP_USER",
                        payload:res
                    });
                    window.location.href = '/login';
                }
                else{
                    console.log("error");
                    dispatch({
                        type:"SIGNUP_USER_ERROR",
                        payload:res
                    });
                }
            })

    }

}

export function registerUser(payload) {
    return function(dispatch) {
        API.signup(payload)
            .then(res => {
                dispatch({
                   type:"SIGNUP_USER",
                    payload:res.data
                });



            })

    }
}

export function fetchProfile(token, params) {

    console.log(token+":"+params);
    return function(dispatch) {
        API.getProfile(token,params)
            .then(res => {
                console.log(res);

                dispatch({
                    type:"GET_PROFILE",
                    payload:res
                });

            })

    }

}

export function fetchProject(token, params) {

    console.log("fetch_project:"+params);
    return function(dispatch) {
        API.getProject(token,params)
            .then(res => {
                console.log(res);

                if(!res.error){
                    console.log("no error");
                    dispatch({
                        type:"GET_PROJECT",
                        payload:res
                    });
                }
                else{
                    console.log(res.error);
                    dispatch({
                        type:"GET_PROJECT_ERROR",
                        payload:res
                    });
                }

            })

    }

}

export function addProject(token, project) {

    console.log("adding project:"+token+":"+project);
    return function(dispatch) {
        API.addProject(token,project)
            .then(res => {
                console.log(res);

                if(!res.error){
                    dispatch({
                        type:"ADD_PROJECT",
                        payload:res
                    });
                }
                else{
                    dispatch({
                        type:"ADD_PROJECT_ERROR",
                        payload:res
                    });
                }
            })

    }

}


// export function protectedTest() {
//     return function(dispatch) {
//         axios.get(`${API_URL}/protected`, {
//             headers: { 'Authorization': cookie.load('token') }
//         })
//             .then(response => {
//                 dispatch({
//                     type: PROTECTED_TEST,
//                     payload: response.data.content
//                 });
//             })
//             .catch((error) => {
//                 errorHandler(dispatch, error.response, AUTH_ERROR)
//             });
//     }
// }