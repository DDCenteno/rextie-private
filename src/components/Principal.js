import React from 'react'
import Converter from '../containers/converter-container';
import Confirmation from '../containers/confirmation-container'
import Notification from '../containers/notification-container'
import PersonalInfo from '../containers/user-container'
import CuentaRextie from './CuentasRextie'
import CuentaPersonal from './CuentaPersonal'
import CuentaTerceros from './CuentaTerceros'
import Operaciones from './History'

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
    case 'operaciones':
      return <Operaciones /> 
    case 'bancapersonal':
      return <CuentaPersonal /> 
    case 'bancaterceros':
      return <CuentaTerceros /> 
    default:
      break;
  }
  return null
}

export default Principal