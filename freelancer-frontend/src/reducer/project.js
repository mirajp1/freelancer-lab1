const INITIAL_STATE = { error: '', project:{}};

export default function (state = INITIAL_STATE, action) {
    // console.log(action.payload);

    switch(action.type) {
        case "GET_PROJECT":
            return { ...state, project:action.payload };
        case "GET_PROJECT_ERROR":
            return {...state,project:{},error:action.payload.error};

    }

    return state;
}