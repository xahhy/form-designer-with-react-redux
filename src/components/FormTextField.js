import React from 'react';
import IconButton from "@material-ui/core/IconButton/IconButton";
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete'

class FormTextField extends React.Component {
    render() {
        return (
            <div>
                <TextField
                    placeholder="Please input"
                    margin="normal"
                />
                {
                    this.props.showDelete ?
                    <IconButton color="secondary" aria-label="Remove an alarm"
                                onClick={()=>this.props.deleteField(this.props.id)}>
                        <DeleteIcon/>
                    </IconButton>
                    : null
                }
            </div>
        );
    }
}

export default FormTextField;