import { connect } from 'react-redux';
import Personal  from '../components/PersonalInfo';


function mapStateToProps(state) {

  return {
    user: state.isUser,

  }
}
 
export default connect(mapStateToProps)(Personal)