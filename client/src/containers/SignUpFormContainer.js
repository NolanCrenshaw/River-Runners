import { connect } from 'react-redux';
import SignUpForm from '../components/SignUpForm';
import { createUser } from '../store/user';

const mapStateToProps = state => {
    return {
        token: state.authentication.token,
    };
};

const mapDispatchToProps = dispatch => ({
    createUser: () => dispatch(createUser()) 
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);