import { connect } from 'react-redux';
import PopUp  from '../components/Popup';


function mapStateToProps(state) {

  return {
    isChange: state.isChange,

  }
}
 
export default connect(mapStateToProps)(PopUp)