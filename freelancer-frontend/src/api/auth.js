const headers = {
    'Accept': 'application/json'
};

export const login = (payload) =>{

    return fetch("/auth/login", {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res => {
        console.log(res);
        return res.json();
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });
}

export const signup = (payload) =>{

    return fetch("/auth/signup", {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res => {
        console.log(res);
        return res.json();
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });
}

export const getProfile = (token,params) =>{

    return fetch("/api/profile/"+params, {
        method: 'GET',
        headers: {
            ...headers,
            'Authorization': token,
            'Content-Type': 'application/json'
        },
    }).then(res => {
        console.log(res);
        return res.json();
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });
}