export function selectTypeBuy() {
  return {
    type: 'SELECT_TYPE_BUY',

  }
}
export function selectTypeSale() {
  return {
    type: 'SELECT_TYPE_SALE',

  }
}

export function converterSale(term) {
  return {
    type: 'CONVERTER_SALE',
    payload : term

  }
}


export function converterBuy(term) {
  return {
    type: 'CONVERTER_BUY',
    payload : term

  }
}

export function reset() {
  return {
    type: 'RESET'
    
  }
}

export function navigation(page) {
  return {
    type: 'NAVIGATE_TO',
    payload : page
    
  }
}

export function navigateReset(page) {
  return {
    type: 'NAVIGATE_RESET',
    payload : page
    
  }
}