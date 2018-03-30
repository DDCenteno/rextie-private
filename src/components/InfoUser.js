import React from 'react';



const InfoUser = ({user}) => (

      <div className="InfoUser grey-1 ">
            <p>¡ Bienvenido ! </p>
            <p>DNI {user.NumDoc}</p>
            <p>{user.name}</p>
            
      </div>

)

export default InfoUser;
