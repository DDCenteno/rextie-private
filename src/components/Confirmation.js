import React from 'react'
import PopUp from './Popup'



const Confirmation = ({ isChange, onReset, navigateTo, OnNavigateReset ,onShowPopUp1,onShowPopUp2 }) => {

  const validateChange = () => {
    const changeValue = isChange.term1 ? isChange.term1 : isChange.term2
    return changeValue;
  }

  const validateResult = () => {
    const changeResult = isChange.term1 ? isChange.result1 : isChange.result2
    return changeResult;
  }



  return (
    <div className="Container p-3">
      <div className="text-center">
        <h2 className="title-c-4">Confirmación de datos</h2>
      </div>

      <div className="border radius-20 p-4 w500 m-auto">
        <table className="table table-hover table-bordered table-striped text-center table-sm">
          <thead>
            <tr>
              <th>Tipo de Operación</th>
              <th>Cliente Envía</th>
              <th>Cliente Recibe</th>
              <th>Tipo de Cambio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{isChange.type}</td>
              <td>{validateChange()} {isChange.typeMoney}</td>
              <td>{validateResult()} {isChange.typeChange}	</td>
              <td>{isChange.change}</td>
            </tr>
          </tbody>
        </table>


        <div>
          <p>¿Deseas registrar una cuenta bancaria en este momento?</p>
        </div>
        <div className="form-group row pl-3">
          <label htmlFor="exampleFormControlSelect1">Cuenta Bancaria de Origen en {isChange.typeMoney}:</label>
          {isChange.showPopup1 ? <PopUp text="La cuenta de origen indica de donde se sacará la cantidad de dinero para realizar el cambio." /> : null   }      
          <select className="form-control col-10" id="exampleFormControlSelect1">
            <option>Seleccione Cuenta Bancaria Origen</option>
          </select>
          <div className="col-2" >
          <button className="info-circle " onClick={() => onShowPopUp1(isChange.showPopup1)} > ?
          
          </button>
          
          </div>

        </div>
        <div className="form-group row pl-3">
          <label htmlFor="exampleFormControlSelect1">Cuenta Bancaria de Destino en {isChange.typeChange}:</label>
          {isChange.showPopup2 ? <PopUp text="La cuenta de destino indica donde se depositará el dinero cambiado." /> : null   }   
          <select className="form-control col-10 " id="exampleFormControlSelect1">
            <option>Seleccione Cuenta Bancaria Destino</option>
          </select>
          <div className="col-2" >
          <button className="info-circle " onClick={() => onShowPopUp2(isChange.showPopup2)} > ?
          
          </button>
          </div>

        </div>

        <div className="form-group ">
          <label htmlFor="inputCelu">Celular:</label>
           
          <input type="text" className="form-control" id="inputCelu" />
        </div>


        <div className="text-center">
          <input type="checkbox" /><span>Aceptar Términos y Condiciones y Política de Privacidad</span>
        </div>


      </div>


<div className="container box-confirmation">
<div className="row">
        <div className="col-6 mt-3">
          <a className="btn  radius-20 white bg-grey-2 " href="#/converter" onClick={() => OnNavigateReset('converter')} >Cambiar cantidad</a>

        </div>
        <div className="col-6 mt-3">
          <a className="btn  radius-20 white bg-green" href="#/notification" onClick={() => navigateTo('notification')}>Aceptar</a>
        </div>
      </div>
</div>
      


    </div>)
}

export default Confirmation