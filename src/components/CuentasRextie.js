import React from 'react'

const CuentasRextie = () => (
    <div className="cuentas-rextie col-12 col-lg-9 w600 m-auto " >
        <div>
            <p className="title-4 ">Cuentas Bancarias de Rextie</p>
        </div>
        <div>
            <div>
                <p>CCI Interbank (para transferencias interbancarias)</p>
            </div>
            <div>
                <table className="table table-bordered table-striped table-sm" >
                    <thead className="bg-red">
                        <tr  >
                            <th>Tipo de Cuenta</th>
                            <th>Moneda</th>
                            <th>Número de Cuenta</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Coriente</td>
                            <td>Dólares</td>
                            <td>00316600300127343563</td>
                        </tr>
                        <tr>
                            <td>Coriente</td>
                            <td>Soles</td>
                            <td>00316600300127342868</td>
                        </tr>
                    </tbody>
                </table>
            </div>

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
        <div>
            <div>
                <p>INTERBANK</p>
            </div>
            <div>
                <table className="table table-bordered table-striped table-sm" >
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
                            <td>1663001273435</td>
                        </tr>
                        <tr>
                            <td>Coriente</td>
                            <td>Soles</td>
                            <td>1663001273428</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>

    </div>

)

export default CuentasRextie