import { connect } from 'react-redux';
import Confirmation from '../components/Confirmation';
import { reset,navigation, navigateReset,showPopup1,showPopup2 } from '../actions/action-index';
import { bindActionCreators } from 'redux';

function mapStateToProps(state) {

  return {
    isChange: state.isChange,

  }

}



function mapDispatchToProps(dispatch) {

  return bindActionCreators({ onReset: reset, 
                              navigateTo: navigation,
                              OnNavigateReset : navigateReset,
                              onShowPopUp1 : showPopup1,
                              onShowPopUp2 : showPopup2

  
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation)