import React from 'react'


const Notification = ({ isChange, navigateTo, OnNavigateReset }) => {
  const validateChange = () => {
    const changeValue = isChange.term1 ? isChange.term1 : isChange.term2
    return changeValue;
  }

  const validateResult = () => {
    const changeResult = isChange.term1 ? isChange.result1 : isChange.result2
    return changeResult;
  }



  return (
    <div className="Container col-12 col-sm-9  col-lg-9">
      <div className="bg-sky-2 radius-20 pb-3 w600 m-auto">
        <div className="message col-12 m-auto pt-4">
          <p className="mb-0">Tu código de operación N°9808 fue registrada el día 08/03 a las 23:05 horas.
        deberás realizar la transferencia en un maximo de 15 minutos para mantener
el tipo de cambio acordado. Deberá realizar los siguientes dos pasos:</p>
        </div>
        <div className="container ">
          <div className="row" >
            <div className="container col-12 col-lg-6">
            <div className="circle"><p>1</p></div>
              <div className="box-noti relative ">
             
                <p className="title-c-3 pl-4 pr-4 pt-4">Transfiere el monto en {isChange.typeMoney} desde tu banca en línea</p>
                <div className="pr-4 pl-4">
                  <hr />
                </div>

                <figure className="text-center">
                  <img className="logo-not" src="images/change.png" alt="" />
                </figure>
                <div className="container">
                  <div className="row p-0 m-auto">
                    <div className="col-6 f12 line-h p-0 pad3">
                      <p>Cantidad a transferir :</p>
                      <p>Banco de Origen :</p>
                      <p>Banco de Destino :</p>
                      <p>Tipo de Cuenta :</p>
                      <p>Número de Cuenta :</p>
                      <p>Titular de Cuenta :</p>
                      <p>RUC del Titular :</p>
                    </div>
                    <div className="col-6 f12 line-h ">
                      <p className="font-weight-bold" >{validateChange()} {isChange.typeMoney}</p>
                      <p>Scotiabank</p>
                      <p>Interbank</p>
                      <p>Cuenta Corriente</p>
                      <p>123456789123456</p>
                      <p>REXTIE SAC</p>
                      <p>20601030013</p>
                    </div>
                  </div>
                </div>

                <div className="text-center"><p><span className="text-sky">Envía el voucher a </span><span className="text-green">pagos@rextie.com</span> </p></div>
              </div>
            </div>
            <div className="container col-12 col-lg-6 ">
            <div className="circle"><p>2</p></div>
              <div className="box-noti relative">
                
                <div className="pl-4 pr-4 pt-4 break">

                  <p className="title-c-3" >Rextie realizará la transferencia en  {isChange.typeChange} al cliente</p>
                </div>

                <div className="pr-4 pl-4">
                  <hr />
                </div>
                <figure className="text-center">
                  <img className="logo-not" src="images/recibe.png" alt="logo" />
                </figure>
                <div className="container">
                  <div className="row p-0 m-auto">
                    <div className="col-6 f12 line-h p-0 pad3">
                      <p>Cantidad a transferir :</p>
                      <p>Banco de Origen :</p>
                      <p>Banco de Destino :</p>
                      <p>Tipo de Cuenta :</p>
                      <p>Número de Cuenta :</p>
                      <p>Titular de Cuenta :</p>

                    </div>
                    <div className="col-6 f12 line-h ">
                      <p className="font-weight-bold">{validateResult()} {isChange.typeChange}</p>
                      <p>Scotiabank</p>
                      <p>Interbank</p>
                      <p>Ahorro Dólares</p>
                      <p>123456789123456</p>
                      <p>PEPITO ROJAS</p>

                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>

        </div>



      </div>
      <div className="text-center mt-2"><a className="btn next radius-20 bg-green" href="#/converter" onClick={() => OnNavigateReset('converter')}>Aceptar</a></div>
    </div>
  )
}

export default Notification;