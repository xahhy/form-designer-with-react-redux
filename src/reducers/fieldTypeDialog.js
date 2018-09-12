
const fieldTypeDialog = (state = false, action) => {
    switch (action.type) {
        case 'SHOW_FIELD_TYPE_DIALOG':
            state = {...action, open: action.open};
            break;
    }
    return state;
};
export default fieldTypeDialog;
