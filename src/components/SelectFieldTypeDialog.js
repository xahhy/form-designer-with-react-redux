import React from 'react';
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import SelectFieldTypeDialogContainer from "../containers/SelectFieldTypeDialogContainer";

class SelectFieldTypeDialog extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClose = () => {
        this.props.toggleDialog(!this.props.open);
    };

    handleListItemClick = value => {
        this.props.toggleDialog(!this.props.open);
        this.props.handleListItemClick(value);
    };

    render() {
        const { classes, inputFields, handleListItemClick, toggleDialog, ...other } = this.props;
        console.log(this.props);
        return (
            <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={this.props.open} {...other}>
                <DialogTitle id="simple-dialog-title">Select Field Type</DialogTitle>
                <div>
                    <List>
                        {inputFields && inputFields.map(fieldType => (
                            <ListItem button onClick={() => this.handleListItemClick(fieldType.type)} key={fieldType.type}>
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