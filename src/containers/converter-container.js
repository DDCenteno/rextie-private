import { connect } from 'react-redux';
import Converter from '../components/Converter';
import { selectTypeBuy, selectTypeSale ,converterBuy, converterSale,reset,navigation,navigateReset } from '../actions/action-index';
import { bindActionCreators } from 'redux';

function mapStateToProps(state) {

  return {
    isChange: state.isChange,

  }
}
 

function mapDispatchToProps (dispatch){
 
  return bindActionCreators({ handleClick1 : selectTypeBuy,
                              handleClick2 : selectTypeSale,
                              onConverterBuy :converterBuy,
                              onConverterSale :converterSale,
                              onReset : reset,
                              navigateTo : navigation,
                              OnNavigateReset : navigateReset

                            }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Converter)