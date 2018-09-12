import React, {Component} from 'react';
import './App.css'
import Button from '@material-ui/core/Button';
import FormBodyContainer from './containers/FormBodyContainer'
import FormTextField from "./components/FormTextField";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Icon from "@material-ui/core/Icon/Icon";
import SelectFieldTypeDialogContainer from "./containers/SelectFieldTypeDialogContainer";
import {inputFieldTypes} from "./components/FieldTypes";
import {connect} from "react-redux";
import {showDialog, showPreview} from "./actions";
import store from './store'

const mapStateToProps = state => ({
    preview: state.preview
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {show: false, showDelete: true};
        this.inputFieldTypes = [
            {type: inputFieldTypes.TextField, description: 'Text Field'},
            {type: inputFieldTypes.DatePickerField, description: 'Date Picker Field'}
        ];
    }

    render() {
        return (
            <div className="App">
                <Button variant="contained" color="primary" size={"small"} onClick={this.handlePreview}>
                    {this.props.preview.preview ? 'Preview' : 'Edit'}
                </Button>
                {
                    this.props.preview.preview &&
                    <IconButton color="secondary" aria-label="Add an field" onClick={this.createFieldDialog}>
                        <Icon>add</Icon>
                    </IconButton>
                }

                <FormBodyContainer showDelete={this.state.showDelete}>
                </FormBodyContainer>
                <SelectFieldTypeDialogContainer
                    inputFields={this.inputFieldTypes}
                />
            </div>
        );
    }

    getField = (showDelete) => {
        return (<FormTextField showDelete={showDelete || true}/>)
    };

    createFieldDialog = () => {
        this.props.dispatch(showDialog(true))
    };

    handlePreview = () => {
        this.props.dispatch(showPreview(!store.getState().preview.preview))
    };


}

export default connect(mapStateToProps)(App);
