import { combineReducers } from 'redux'
import fields from './fields'
import preview from './preview'
import fieldTypeDialog from './fieldTypeDialog'

export default combineReducers({
    fields, fieldTypeDialog, preview
})
