import React from 'react'

const CuentaPersonal = () => (
    <div className="cuentas-rextie col-12 col-lg-9 w600 m-auto pt-3" >
        <div>
            <p className="title-4 ">Cuentas Bancarias Personales</p>
        </div>
     
        <div>
            <div>
                <p>BCP</p>
            </div>
            <div>
                <table className="table table-hover table-bordered table-striped table-sm" >
                    <thead>
                        <tr>
                            <th>Tipo de Cuenta</th>
                            <th>Moneda</th>
                            <th>Número de Cuenta</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Coriente</td>
                            <td>Dólares</td>
                            <td>1931700523109</td>
                        </tr>
                        <tr>
                            <td>Coriente</td>
                            <td>Soles</td>
                            <td>1932357833093</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
       
    </div>

)

export default CuentaPersonal