import React, {Component} from 'react';
import './App.css'
import Button from '@material-ui/core/Button';
import FormBodyContainer from './containers/FormBodyContainer'
import FormTextField from "./components/FormTextField";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Icon from "@material-ui/core/Icon/Icon";
import SelectFieldTypeDialogContainer from "./containers/SelectFieldTypeDialogContainer";
import {inputFieldTypes} from "./components/FieldTypes";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {show: false, showDelete: true};
        this.inputFieldTypes = [
            {type: inputFieldTypes.TextField, description: 'Text Field'},
            {type: inputFieldTypes.DatePickerField, description: 'Date Picker Field'}
        ];
        this.handleClose = this.handleClose.bind(this);
    }

    render() {
        return (
            <div className="App">
                <Button variant="contained" color="primary" size={"small"} onClick={this.handlePreview}>Preview</Button>
                <IconButton color="secondary" aria-label="Add an field" onClick={this.createFieldDialog}>
                    <Icon>add</Icon>
                </IconButton>
                <FormBodyContainer showDelete={this.state.showDelete}>
                </FormBodyContainer>
                <SelectFieldTypeDialogContainer
                    inputFields={this.inputFieldTypes}
                    open={this.state.show}
                    onClose={this.handleClose}
                />
            </div>
        );
    }

    getField = (showDelete) => {
        return (<FormTextField showDelete={showDelete || true}/>)
    };

    createFieldDialog = () => {
        this.setState({show: true})
    };

    handleClose = (inputFieldType) => {
        this.setState({show: false});
        // inputFieldType && this.setState({fields: [...this.state.fields, {type: inputFieldType.type, id: this.state.fields.length}]})
    };

    handlePreview = () => {
        this.setState({showDelete: !this.state.showDelete})
    };


}

export default App;
