import { connect } from 'react-redux'
import { addField, showDialog } from '../actions'
import SelectFieldTypeDialog from "../components/SelectFieldTypeDialog";

const getOpenStatus = (open) => {
    return !!open;
};
const mapStateToProps = state => ({
    open: getOpenStatus(state.fieldTypeDialog.open)
});

const mapDispatchToProps = dispatch => ({
    handleListItemClick: type => dispatch(addField(type)),
    toggleDialog: open => dispatch(showDialog(open))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectFieldTypeDialog)
