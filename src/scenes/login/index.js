import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { getCurrentSession, signIn } from '../../actions/authActions'

const mapStateToProps = state => ({
  authentication: state.authentication,
})

const mapDispatchToProps = {
  getCurrentSession,
  signIn,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)
