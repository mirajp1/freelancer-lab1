const headers = {
    'Accept': 'application/json'
};

export const login = (payload) =>{
    console.log(payload);
    return fetch("/auth/login", {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json',
            'credentials':'true'
        },
        body: JSON.stringify(payload)
    }).then(res => {
        console.log(res);
        return res.json();
    })
        .catch(error => {
            console.log(error);
            return error;
        });
}

export const signup = (payload) =>{

    return fetch("/auth/signup", {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json',
            'credentials':'true'
        },
        body: JSON.stringify(payload)
    }).then(res => {
        console.log(res);
        return res.json();
    })
        .catch(error => {
            console.log(error);
            return error;
        });
}

export const getProfile = (token,params) =>{

    return fetch("/api/profile/"+params, {
        method: 'GET',
        headers: {
            ...headers,
            'Authorization': token,
            'Content-Type': 'application/json',
            'credentials':'true'
        },
    }).then(res => {
        console.log(res);
        return res.json();
    })
        .catch(error => {
            console.log(error);
            return error;
        });
}

// export const addProject = (token,project) =>{
//
//     return fetch("/api/projects/", {
//         method: 'POST',
//         headers: {
//             ...headers,
//             'Authorization': token,
//             'Content-Type': 'application/json',
//             'credentials':'true'
//         },
//         body: JSON.stringify(project)
//     }).then(res => {
//         console.log(res);
//         return res.json();
//     })
//         .catch(error => {
//             console.log(error);
//             return error;
//         });
// }

export const addProject = (token,project) =>{

    return fetch("/api/projects/", {
        method: 'POST',
        headers: {
            ...headers,
            'Authorization': token,
            'credentials':'true'
        },
        body: project
    }).then(res => {
        console.log(res);
        return res.json();
    })
        .catch(error => {
            console.log(error);
            return error;
        });
}

export const updateProfile = (token,profile) =>{

    return fetch("/api/profile/", {
        method: 'PUT',
        headers: {
            ...headers,
            'Authorization': token,
            'credentials':'true'
        },
        body: profile
    }).then(res => {
        console.log(res);
        return res.json();
    })
        .catch(error => {
            console.log(error);
            return error;
        });
}

export const getProject = (token,params) =>{

    return fetch("/api/projects/"+params, {
        method: 'GET',
        headers: {
            ...headers,
            'Authorization': token,
            'Content-Type': 'application/json',
            'credentials':'true'
        },
    }).then(res => {
        console.log(res);
        return res.json();
    })
        .catch(error => {
            console.log(error);
            return error;
        });
}

export const getAllOpenProjects = (token) =>{

    return fetch("/api/projects/all/open", {
        method: 'GET',
        headers: {
            ...headers,
            'Authorization': token,
            'Content-Type': 'application/json',
            'credentials':'true'
        },
    }).then(res => {
        console.log(res);
        return res.json();
    })
        .catch(error => {
            console.log(error);
            return error;
        });
}

export const getFreelancerProjects = (token) =>{

    return fetch("/api/projects/all/bidded", {
        method: 'GET',
        headers: {
            ...headers,
            'Authorization': token,
            'Content-Type': 'application/json',
            'credentials':'true'
        },
    }).then(res => {
        console.log(res);
        return res.json();
    })
        .catch(error => {
            console.log(error);
            return error;
        });
}

export const getEmployerProjects = (token) =>{

    return fetch("/api/projects/all/created", {
        method: 'GET',
        headers: {
            ...headers,
            'Authorization': token,
            'Content-Type': 'application/json',
            'credentials':'true'
        },
    }).then(res => {
        console.log(res);
        return res.json();
    })
        .catch(error => {
            console.log(error);
            return error;
        });
}