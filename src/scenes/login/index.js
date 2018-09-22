import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { getCurrentSession, signIn } from '../../store/auth/authActions'
import { createLoadingSelector } from '../../selectors/loadingSelectors'
import { createErrorMessageSelector } from '../../selectors/errorSelectors'

const mapStateToProps = state => ({
  authentication: state.authentication,
  isSigningIn: createLoadingSelector(['SIGN_IN'])(state),
  signInError: createErrorMessageSelector(['SIGN_IN'])(state),
})

const mapDispatchToProps = {
  getCurrentSession,
  signIn,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)
