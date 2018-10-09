import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { getCurrentUser, signIn } from '../../store/auth/authActions'
import { createLoadingSelector } from '../../store/loading/loadingSelectors'
import { createErrorMessageSelector } from '../../store/error/errorSelectors'

const mapStateToProps = state => ({
  authentication: state.authentication,
  isSigningIn: createLoadingSelector(['SIGN_IN'])(state),
  signInError: createErrorMessageSelector(['SIGN_IN'])(state),
})

const mapDispatchToProps = {
  getCurrentUser,
  signIn,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)
