const INITIAL_STATE = { error: '', profile:{}};

export default function (state = INITIAL_STATE, action) {
    // console.log(action.payload);

    switch(action.type) {
        case "GET_PROFILE":
            return { ...state, profile:action.payload };
        case "UPLOAD_PROFILE_PHOTO":
            return { ...state,profile:{...state.profile,image:action.payload.image}};
        case "UPLOAD_PROFILE_PHOTO_ERROR":
            return { ...state,error:action.payload.error};

    }

    return state;
}