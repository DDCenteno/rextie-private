import { connect } from 'react-redux';
import PanelUser  from '../components/InfoUser';


function mapStateToProps(state) {

  return {
    user: state.isUser,

  }
}
 
export default connect(mapStateToProps)(PanelUser)