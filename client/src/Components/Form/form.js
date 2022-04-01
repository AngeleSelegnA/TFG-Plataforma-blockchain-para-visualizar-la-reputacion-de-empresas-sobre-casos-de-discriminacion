import React, { useState } from "react";
import { context } from './../../contextProvider.js';
import Web3 from 'web3';
import * as constants from './../../constantFile.js';
import complaintContract from './../../complaintContract.json';
import { useForm } from 'react-hook-form';
import * as data from './constantData';
import swal from 'sweetalert';
import Swal from 'sweetalert2';


//Si todavia no se ha conectado con Metamask entonces aparece un popup para la conexion
const infuraUrl = constants.INFURA_URL;
//Crea una instancia para comunicarse con el nodo indicado
const web3 = new Web3(new Web3.providers.HttpProvider(infuraUrl));
//Nos conectamos con el contrato
const contract = new web3.eth.Contract(complaintContract.abi, constants.CONTRACT_ADDRESS);
let companies = [""];
contract.methods.getCompanies().call().then(response => companies = response);


const Complaint = ({ match }) => {

  const company = match.params.id;
  const { handleSubmit, register, formState: { errors, isSubmitting, isSubmitSuccessful }} = useForm(/*{ shouldUnregister : true}*/);
  
  const Context = React.useContext(context);
  

  //Obtener la fecha actual
  function formatoFecha(fecha, formato) {
    const map = {
        dd: fecha.getDate(),
        mm: fecha.getMonth() + 1,
        yy: fecha.getFullYear().toString().slice(-2),
        yyyy: fecha.getFullYear()
    }
    return formato.replace(/dd|mm|yy|yyy/gi, matched => map[matched])
  }

  //Función para realizar la transaccion al recibir los parametros
  async function newComplaint(transaction) {
    try {
        const tx = {
            to      : constants.CONTRACT_ADDRESS, //Dirección del contrato
            data    : transaction.encodeABI(),      //
            gas     : await transaction.estimateGas({from: constants.ADDRESS2}),   //Se estima el coste en gas
            gasPrice: await Context.web3.eth.getGasPrice(),   //Precio del gas
            gaslimit: 0x1000000,   //Limite de gas que se puede gastar
            value   : 0,   //No se va a realizar una transferencia
        };
        console.log("transacción construida");
        //Se firma la transacción con la clave privada
        const signedTx  = await Context.web3.eth.accounts.signTransaction(tx, constants.PRIVATE_KEY2);
        console.log("transacción firmada");
        //Se envia la transaccion firmada 
        await Context.web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    }
    catch (err) {
        console.log(err.message);
        swal({
          title: "ERROR",
          text: "Algo ha ido mal a la hora de subir la denuncia a la blockchain. Vuelva a intentarlo más tarde",
          icon: "error",
          button: "Aceptar"
        });
    }
  }


  const submitForm = async (data,e) => {
    e.preventDefault();

    //Comprobar que el usuario esta conectado a linkedin
    if(!Context.user){
      console.log("El usuario no está conectado");
      swal({
        title: "ERROR",
        text: "¡Debes estar conectado para enivar una denuncia!",
        icon: "error",
        button: "Aceptar"
      });
    }
    else{
      //Obtener fecha
      const fecha = new Date();
      fecha.toLocaleDateString();
      const date = formatoFecha(fecha, 'dd/mm/yy');

      Swal.fire({
        title: 'La denuncia está siendo cargada en la blockchain',
        timer: 1000000,
        timerProgressBar: false,
        didOpen: () => {
          Swal.showLoading()
        }
      });

      //Relizar la denuncia
      await newComplaint(Context.contract.methods.newComplaint(data.company, Context.user, data.text, date, data.type, data.gender, data.relation, data.consent));

      //Restaurar estado del formulario
      e.target.reset(); //Si salimos del formulario puede que no haga falta este reset

      //Volver a la pagina de la empresa
      Swal.fire({
        title: "Denuncia cargada",
        text: "La denuncia ya ha sido registrada en la blockchain",
        icon: "success",
        timer: "10000"
      }).then(function () {
        window.location.href = `http://localhost:3000/company/${company}`;
      });  
    }
  }


  return(

    <form className="ui form" onSubmit = {handleSubmit(submitForm)}>
      <h1 className="ui dividing header">Formulario de Denuncia</h1>
      <div className="field">
        <div className="two fields">

          {/*Nombre empresa*/}
          <div className="required field">
            <label>Nombre de la empresa</label>
            <select
              className="ui fluid selection dropdown"
              {...register("company", {
                validate : value => value !== "Seleccione la empresa"
              })}>
                {companies.map(item => <option value={item} key={item} selected = {item == company}>{item}</option>)}
            </select>
            {errors.company && <div className = "ui negative message">
                      <div className = "header">Debe seleccionar la empresa</div></div>}
          </div>
          
          
          {/*Relación con empresa*/}
          <div className="field">
            <label>Relación actual con la empresa</label>
            <select 
              className="ui fluid selection dropdown" 
              {...register("relation")}>
                <option hidden>Seleccione la relación actual con la empresa</option>
                {data.relations.map(item => <option value={item} key={item}>{item}</option>)}
            </select>
          </div>
        </div>
      </div>


      <div className="three fields">

        {/*Denunciado antes*/}
        <div className="inline fields">
          <label>¿Has denunciado anteriormente?</label>
          <div className="field">
            <div className="ui radio checkbox">
              <input 
                type="radio"
                {...register("moreComplaints")}
                value = {true}/>
              <label>Sí</label>
            </div>
          </div>

          <div className="field">
            <div className="ui radio checkbox">
              <input 
                type="radio"
                {...register("moreComplaints")}
                value = {false}/>
              <label>No</label>
            </div>
          </div>
        </div>

        {/*Mediante que medio denunciaste*/}
        <div className="field">
          <label>Medio</label>
          <input 
            type="text"
            {...register("media")} 
            placeholder="En caso afirmativo, ¿mediante qué medio?"/>
        </div>

        {/*Fecha del suceso*/}
        <div className="field">
        <label>Fecha aproximada del suceso o del inicio de este</label>
        <div className="two fields">
          <div className="field">
            <select 
              className="ui fluid search dropdown" 
              {...register("month")} >
                <option hidden>Seleccione el mes</option>
                {data.months.map(item => <option value={item} key={item}>{item}</option>)}
            </select>
          </div>

          <div className="field">
            <input 
              type="text"
              {... register('year', {
                valueAsNumber : true,
                maxLength : 4,
                minLength : 4
              })}  
              placeholder="Año"/>
            {errors.year && <div className = "ui negative message">
                      <div className = "header"> Debe escribir correctamente el año</div></div>}
          </div>
        </div>
        </div>
      </div>
        
    <div className="field">      
      {/*Tipo de denuncia*/}
      <div className="required field">
        <label>Tipo de denuncia</label>
        <select 
          className="ui fluid dropdown"
          {...register('type', {
            validate : value => value !== "Seleccione el tipo de denuncia"
          })}>
            <option hidden>Seleccione el tipo de denuncia</option>
            {data.complaintTypes.map(item => <option value={item} key={item}>{item}</option>)}
        </select>
      </div>
      {errors.type && <div className = "ui negative message">
                      <div className = "header">Debe seleccionar el tipo de denuncia</div></div>}
    </div>
    


    {/*El usuario deberá solo responder obligatoriamente a aquella relacionada con su tipo de denuncia. El resto son opcionales*/}
    <div className="five fields">

      {/*Género*/}
      <div className="field">
          <label>Si tu denuncia es de género</label>
          <select 
              className="ui fluid selection dropdown" 
              {...register("gender")}>
                <option hidden>Género</option>
                {data.genders.map(item => <option value={item} key={item}>{item}</option>)}
            </select>
      </div>

      {/*Discapacidad*/}
      <div className="field">
          <label>Si tu denuncia es de discapacidad</label>
          <input 
            type="text"
            {...register("discapacidad")}
            placeholder="Discapacidad"/>
      </div>

      {/*País*/}
      <div className="field">
      <label>Si tu denuncia es de etnia</label>
        <select 
          className="ui dropdown"
          {...register("country")} >
          <option hidden>Seleccione país de origen</option>
          {data.countries.map(item => <option value={item} key={item}>{item}</option>)}
        </select>
      </div>

      {/*Edad*/}
      <div className="field">
        <label>Si tu denuncia es de edad</label>
        <input 
          type="text"
          {... register('age', {
            valueAsNumber : true,
            maxLength : 3
          })} 
          placeholder="Edad"/>
        {errors.age && <div className = "ui negative message">
                      <div className = "header"> Debe escribir correctamente su edad</div></div>}
      </div>

      {/*Religión*/}
      <div className="field">
        <label>Si tu denuncia es de religión</label>
        <input 
          type="text"
          {...register("religion")} 
          placeholder="Religión"/>
      </div>
    </div>    

    {/*El usuario contará su historia*/} 
    <div className="required field">
    <label >Descripción del suceso</label>
        <textarea  
          {...register('text', {
            required : true,
          })}
          placeholder="Cuéntanos tu historia"
          style={{ minHeight: 50 }}/>
    {errors.text && <div className = "ui negative message">
                      <div className = "header">Debe describir el suceso</div></div>}
    </div>

      {/*Botón para permitir compartir la historia. No es obligatorio para el usuario*/}
      <div className="ui segment">
        <div className="field">
          <div className="ui checkbox">
            <input 
              type="checkbox"
              {...register("consent")}/>
            <label>Acepto que mi historia aparezca publicada de forma anónima</label>
          </div>
        </div>
      </div>
      <button className = "ui button" type = "submit">Enviar denuncia</button>
    </form>
  );
};
export default Complaint;