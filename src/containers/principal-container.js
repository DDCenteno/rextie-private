import { connect } from 'react-redux';

import Principal from '../components/Principal'

function mapStateToProps(state) {
console.log(state);
  return {
    isNavigation: state.isChange

  }
}



export default connect(mapStateToProps)(Principal);