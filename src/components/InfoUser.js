import React from 'react';



const InfoUser = ({ user }) => (

  <div className="InfoUser grey-1 ">
    <div className="text-center">
      <img src="images/user.png" alt="user" />
    </div>
    <div className="mt-3 text-center">
      <p className="title-c-1"> ¡ Bienvenido {user.name} !  </p>
      <hr />
    </div>
    <div>
      <p className="title-c-5">Datos de cuenta personal</p>
      <p className="f16 pl-3" >{user.lastname}, {user.name} </p>
    </div>
    <div>
      <p className="title-c-5">DNI</p>
      <p className="f16 pl-3">{user.NumDoc}</p>
    </div>




  </div>

)

export default InfoUser;
