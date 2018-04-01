import React from 'react'

const PersonalInfo = ({user}) => (
  <div className="personal-info col-12 col-lg-9 w600 m-auto pt-3 ">
    <div className=" bg-green text-center p-1"><p className="mb-0">Perfil</p></div>
    <div>
      <table className="table ">
        <tbody>
          <tr>
            <td>Nombre Completo</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>Tipo de Documento</td>
            <td>{user.typeDoc}</td>
          </tr>
          <tr>
            <td>Número de Documento</td>
            <td>{user.NumDoc}</td>
          </tr>
          <tr>
            <td>Correo electrónico</td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td>Fecha de Nacimiento</td>
            <td>{user.date}</td>
          </tr>
          <tr>
            <td>Celular</td>
            <td>{user.mobile}</td>
          </tr>
          <tr>
            <td>Teléfono de Casa</td>
            <td>{user.phone}</td>
          </tr>
          <tr>
            <td>Ubigeo DNI - Nacimiento</td>
            <td>{user.ubigeo}</td>
          </tr>
          <tr>
            <td>Fecha de Emisión</td>
            <td>{user.dateEmi}</td>
          </tr>
          <tr>
            <td>Ocupación</td>
            <td>{user.ocupa}</td>
          </tr>
          <tr>
            <td>Profesión o Cargo</td>
            <td>{user.jobs}</td>
          </tr>
        </tbody>

      </table></div>

    <div className="text-center"> <h3>Por favor, informe de cambios en sus datos mediante correo a info@rextie.com</h3></div>
  </div>

)

export default PersonalInfo
