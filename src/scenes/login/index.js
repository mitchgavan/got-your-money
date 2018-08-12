import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { getCurrentSession, signIn } from '../../actions/authActions'
import { createLoadingSelector } from '../../selectors/loadingSelectors'

const mapStateToProps = state => ({
  authentication: state.authentication,
  isSigningIn: createLoadingSelector(['SIGN_IN'])(state),
})

const mapDispatchToProps = {
  getCurrentSession,
  signIn,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)
