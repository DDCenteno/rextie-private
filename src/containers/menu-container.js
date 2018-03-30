import { connect } from 'react-redux';
import Menu from '../components/Menu';
import { navigation ,navigateReset } from '../actions/action-index';


function mapStateToProps(state) {

  return {
    actualPage: state.isChange,

  }
}


const mapDispatchToProps = (dispatch) => ({
  navigateTo: (page) => {
    dispatch(navigation(page))
  },
  OnNavigateReset: (page) => {
    dispatch(navigateReset(page))
  },

});


export default connect(mapStateToProps,mapDispatchToProps)(Menu)