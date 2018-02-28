const headers = {
    'Accept': 'application/json'
};

export const getAnswer = (op,data) =>{
    var endpoint;
    if(op==="+"){
        endpoint="add";
    }
    else if(op==="-"){
        endpoint="sub";
    }
    else if(op==="/"){
        endpoint="div";
    }
    else if(op==="x"){
        endpoint="mul";
    }
    return fetch("/calc/"+endpoint, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => {
        // console.log(res);
        return res.json();
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });
}
