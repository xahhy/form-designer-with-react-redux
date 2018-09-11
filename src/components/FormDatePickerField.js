import React from 'react';
import Icon from "@material-ui/core/Icon/Icon";
import IconButton from "@material-ui/core/IconButton/IconButton";
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete'

class FormDatePickerField extends React.Component {
    render() {
        return (
            <div>
                <TextField
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
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

export default FormDatePickerField;
