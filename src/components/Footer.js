import React from 'react';


const Footer = () => (

  <footer className=" Footer  black-1 white">
  <div className="container">

  
    <div className="row hfooter-1">
      <div className="col-12 col-lg-4 pt-5">
        <div><p className="title">Registrados en</p><hr className="bg-white"/></div>
        <div>
          <p>Superintendencia de Banca, Seguros y AFP</p>
          <p>SUNAT REXTIE S.A.C RUC: 20601030013</p>
        </div>
        <div>
          <img className="logo-secure" src="images/comodoSecure.png" alt="secure"/>
        </div>
      </div>
      <div className="col-12 col-lg-4 pt-5">
        <div><p className="title">Enlaces</p><hr className="bg-white"/></div>
        <div>
          <p>Ayuda</p>
          <p>Terminos y condiciones de uso</p>
          <p>Politica de privacidad</p>
          <p>Libro de reclamaciones</p>
        </div>
      </div>
      <div className="col-12 col-lg-4 pt-5">
        <div><p className="title">Contáctanos</p><hr className="bg-white"/></div>
        <div>
          <div className="row">
            <div className="col-1 " ><img className="icons" src="images/envelope.png" alt="mail" /></div>
            <div className="col-11 " > <p className="green-1" >info@rextie.com</p></div>
          </div>
          <div className="row">
            <div className="col-1 " ><img className="icons" src="images/phone.png" alt="phone" /></div>
            <div className="col-11 " > <p className="green-1">(+51(01) 642 9617 | (01) 342 2571</p></div>
          </div>
          <div className="row">
            <div className="col-1 " ><img className="icons" src="images/icon.png" alt="cel" /></div>
            <div className="col-1 " ><img className="icons" src="images/whatsapp.png" alt="mail" /></div>
            <div className="col-10 " >  <p className="green-1">(+51) 963 896 793</p></div>
          </div>
          <div className="row">
            <div className="col-1 pt-2 " >
              <img className="icons" src="images/location.png" alt="location" />
            </div>

            <div className="col-10 " >
              <p className="m-0" >Ricargo Angulo 745, Oficina 402</p>
              <p>Urb. Corpac, San Isidro, Lima, Perú</p>
            </div>
          </div>
          <div className="row">
            <div className="col-1 " ><img className="icons" src="images/hour.png" alt="hour" /></div>
            <div className="col-11 " >   <p>Lunes a Sábado de 9 AM a 6 PM</p></div>
          </div>

        </div>
      </div>
    </div>
   
    </div>
    <div className="hfooter-2 text-center p-3">
      <p> 2016-2017 REXTIE SAC Todos los derechos reservados.</p>
    </div>
  </footer>

)

export default Footer;
