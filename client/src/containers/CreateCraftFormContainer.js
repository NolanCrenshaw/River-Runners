import { connect } from 'react-redux';
import CreateCraftForm from '../components/CreateCraftForm';
import { createCraft } from '../store/craft';

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch => ({
    createCraft: () => dispatch(createCraft())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateCraftForm);