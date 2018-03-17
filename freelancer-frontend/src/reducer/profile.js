const INITIAL_STATE = { error: '', profile:{}};

export default function (state = INITIAL_STATE, action) {
    // console.log(action.payload);

    switch(action.type) {
        case "GET_PROFILE":
            return { ...state, profile:action.payload };


    }

    return state;
}