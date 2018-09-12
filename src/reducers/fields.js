import shortid from 'shortid';

const fields = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FIELD':
            state = [...state, {id: shortid.generate(), type: action.fieldType}];
            break;
        case 'DELETE_FIELD':
            state = [...state.filter(field=>field.id !== action.id)];
            break;
        default:
            break;
    }
    return state;
};
export default fields;
