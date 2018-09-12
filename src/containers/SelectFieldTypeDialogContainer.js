import { connect } from 'react-redux'
import { addField } from '../actions'
import SelectFieldTypeDialog from "../components/SelectFieldTypeDialog";


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    handleListItemClick: type => dispatch(addField(type))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectFieldTypeDialog)
