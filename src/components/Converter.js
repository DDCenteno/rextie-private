import React from 'react';


const Container = ({isChange,handleClick1,handleClick2,onConverterBuy,onConverterSale, navigateTo}) => {

  const buttons1 = () => {
    const style = isChange.isChange1 ? ' btn-active' : ' btn-desactive'
    
    return style;
  }
  
  const buttons2 = () => {
    const style = isChange.isChange2 ? ' btn-active' : ' btn-desactive'
    
    return style;
   
  }
  const show1 = () => {
    const style = isChange.isChange1 ? ' show' : ' hide'
    return style;
  }

  const show2 = () => {
    const style = isChange.isChange2 ? ' show' : ' hide'
    return style;
  } 



    return (
      <div className="Container p-3 col-12 col-lg-9 ">
        <div className="bg-sky-2 radius-20 p-4 w400 m-auto">
          <div className="text-center">
            <p className="title-c-1 mb-0">Cambio de dólares online</p>
            <p className="title-c-2 mt-0">Seguro, rápido y al mejor precio</p>
          </div>

          <div className="row text-center  m-auto" >
            <div className={"col-6 box-green-1 p-0"  + buttons1() }  onClick={handleClick1}  >
              <p className="mb-0 p-2">Compra: 3.248 </p>
            </div>
            <div className={"col-6 box-green-2 p-0"  + buttons2() }  onClick={handleClick2}>
              <p className="mb-0 p-2">Venta: 3.270</p>
            </div>
          </div>
          <div className={"container mt-3"  + show1() }>
            <div className="row" >
              <div className="col-6 border ">
                <label className="grey-2 f14 mb-0" htmlFor="">Tengo</label>
                <input className="input-c" type="number" maxLength="10"  onChange={evt => {
          onConverterBuy(evt.target.value)
        }}  />
              </div>
              <div className="col-6 border pt-2">

                <div className=" d-inline-block">
                  <img className="flag" src="images/peru.png" alt="eeuu" />
                </div>
                <div className="d-inline-block">
                  <p className=" money">PEN S/</p>
                </div>

              </div>
            </div>
            <div className="row" >
              <div className="col-6 border">
                <label className="grey-2 f14" htmlFor="">Quiero</label>
                <input type="text" className="input-c" maxLength="20"  value={isChange.result1}   />
              </div>
              <div className="col-6 border pt-2">

                <div className=" d-inline-block">
                  <img className="flag" src="images/united-states.png" alt="eeuu" />
                </div>
                <div className=" d-inline-block">
                  <p className=" money">USD $</p>
                </div>

              </div>
            </div>
          </div>
          <div className={"container venta  mt-3 " + show2() }>
            <div className="row" >
              <div className="col-6 border ">
                <label className="grey-2 f14 mb-0" htmlFor="">Tengo</label>
                <input className="input-c" type="number" maxLength="20"  onChange={evt => {
          onConverterSale(evt.target.value)}} />
              </div>
              <div className="col-6 border pt-2">

                <div className=" d-inline-block">
                  <img className="flag" src="images/united-states.png" alt="eeuu" />
                </div>
                <div className="d-inline-block">
                  <p className=" money">USD $</p>
                </div>

              </div>
            </div>
            <div className="row" >
              <div className="col-6 border">
                <label className="grey-2 f14" htmlFor="">Quiero</label>
                <input type="text" className="input-c" maxLength="20" value={isChange.result2}  />
              </div>
              <div className="col-6 border pt-2">

                <div className=" d-inline-block">
                  <img className="flag" src="images/peru.png" alt="peru" />
                </div>
                <div className=" d-inline-block">
                  <p className=" money">PEN S/</p>
                </div>

              </div>
            </div>
          </div>


          <div className="text-center grey-2 mt-3" >
            <p className="title-4 mb-0 ">Ahorra S/. 100.00 respecto al banco</p>
            <p className="f14 m-0">Tipo de cambio vigente hasta 00:00</p>
          </div>


        </div>

        <div className="text-center mt-3" >
          <a  className="btn next radius-20 bg-green" href="#/confirmation"  onClick={() => navigateTo('confirmation')}>Siguiente</a>
        </div>
      </div>

    )
  }




export default Container;
