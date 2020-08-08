import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { tryLogin } from '../store/authentication';

const mapStateToProps = state => {
    return {
        token: state.authentication.token,
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        tryLogin: (email, password) => dispatch(tryLogin(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);