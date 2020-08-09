import { connect } from 'react-redux';
import CreateVehicleForm from '../components/CreateVehicleForm';
import { createVehicle } from '../store/vehicle';

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch => ({
    createVehicle: () => dispatch(createVehicle())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateVehicleForm);