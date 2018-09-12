export const preview = (state = {preview: true}, action) => {
    switch (action.type) {
        case 'SHOW_PREVIEW':
            state = {...state, preview: action.preview}
    }
    return state;
};
export default preview;
