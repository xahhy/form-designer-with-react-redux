import { connect } from 'react-redux'
import { deleteField } from '../actions'
import FormBody from "../components/FormBody";

const mapStateToProps = state => ({
    fields: state.fields,
    preview: state.preview
});

const mapDispatchToProps = dispatch => ({
    deleteField: id => dispatch(deleteField(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormBody)
