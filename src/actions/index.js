export const addField = (type) => ({
    type: 'ADD_FIELD',
    fieldType: type
});

export const deleteField = (id) => ({
    type: 'DELETE_FIELD',
    id
});

export const showDialog = (open) => ({
    type: 'SHOW_FIELD_TYPE_DIALOG',
    open
});

export const showPreview = (preview) => ({
    type: 'SHOW_PREVIEW',
    preview
});