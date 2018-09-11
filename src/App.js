import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css'
// import {Button, ButtonToolbar, Glyphicon, Modal} from "react-bootstrap";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import FormBody from './components/FormBody'
import TextField from "./components/TextField";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {show:'false'};
        this.handleClose = this.handleClose.bind(this);
    }

    render() {
        return (
            <div className="App">
                <Button variant="contained" color="primary">Preview</Button>
                <Button variant="fab" color="primary" aria-label="Add">
                    <AddIcon />
                </Button>
                <FormBody>
                    {this.getField()}
                </FormBody>

            </div>
        );
    }

    getField = () => {
        return (<TextField showDelete={true}/>)
    };

    createFieldDialog = () => {
        this.setState({show:true})
    };

    handleClose = () => {
        this.setState({ show: false });
    }
}

export default App;
