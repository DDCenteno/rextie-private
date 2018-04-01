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

export function showPopup1(text,message1) {
  return {
    type: 'SHOW_POPUP1',
    payload : text,
    message : message1
  }
}

export function showPopup2(text , message2) {
  return {
    type: 'SHOW_POPUP2',
    payload : text,
    message : message2
    
  }
}