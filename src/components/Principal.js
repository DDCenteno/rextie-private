import React from 'react'
import Converter from '../containers/converter-container';
import Confirmation from '../containers/confirmation-container'
import Notification from '../containers/notification-container'
import PersonalInfo from '../containers/user-container'
import CuentaRextie from './CuentasRextie'


const Principal = ({isNavigation }) => {

  switch (isNavigation.actualPage) {
      case 'converter':
      return <Converter />
     case 'confirmation':
      return <Confirmation />
    case 'notification':
      return <Notification />
    case 'personalInfo':
      return <PersonalInfo />
    case 'cuentaRextie':
      return <CuentaRextie /> 
    default:
      break;
  }
  return null
}

export default Principal