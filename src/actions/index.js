export const addField = (type) => ({
    type: 'ADD_FIELD',
    fieldType: type
});

export const deleteField = (id) => ({
    type: 'DELETE_FIELD',
    id
});