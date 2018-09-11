import React from 'react';
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";

class SelectFieldTypeDialog extends React.Component {
    handleClose = () => {
        this.props.onClose();
    };

    handleListItemClick = value => {
        this.props.onClose(value);
    };

    render() {
        const { classes, inputFields, onClose, selectedValue, ...other } = this.props;

        return (
            <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
                <DialogTitle id="simple-dialog-title">Select Field Type</DialogTitle>
                <div>
                    <List>
                        {inputFields && inputFields.map(fieldType => (
                            <ListItem button onClick={() => this.handleListItemClick(fieldType)} key={fieldType.type}>
                                <ListItemText primary={fieldType.description} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Dialog>
        );
    }
}
export default SelectFieldTypeDialog;