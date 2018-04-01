import React from 'react';


const Menu = ({navigateTo,OnNavigateReset}) => (

  <div className="Menu">
    <ul className="pl-0">
      <li className="bg-green "> <a href="#/converter"  className="white"  onClick={() => OnNavigateReset("converter")} ><span className="icon-play3 mr-1 "></span> Nueva Operación</a></li>
      <li><a href="#/personalInfo"  onClick={() => navigateTo('personalInfo')} ><span className="icon-user mr-2"></span>Información Personal</a></li>
      <li><a href="#/operaciones" onClick={() => navigateTo('operaciones')} ><span className="icon-credit-card mr-2"></span>Operaciones Históricas</a></li>
      <li><a href="#/bancapersonal"  onClick={() => navigateTo('bancapersonal')}><span className=" icon-credit-card mr-2"></span>Cuentas Bancarias Personales</a></li>
      <li><a href="#/bancaterceros" onClick={() => navigateTo('bancaterceros')}><span className="icon-credit-card mr-2"></span>Cuentas Bancarias de Terceros</a></li>
      <li><a href="#/cuentaRextie" onClick={() => navigateTo('cuentaRextie')}><span className="icon-credit-card mr-2"></span>Cuentas Bancarias de Rextie</a></li>
    </ul>
  </div>

)

export default Menu;
