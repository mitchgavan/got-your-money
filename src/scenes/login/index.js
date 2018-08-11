import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { getCurrentSession } from '../../actions/authActions'

const mapStateToProps = state => ({
  authentication: state.authentication,
})

const mapDispatchToProps = {
  getCurrentSession,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)
