import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";
import {Input, Button } from 'semantic-ui-react';

import GraphicsLayout from "../Graphics/GraphicsLayout";
import { makeStyles } from '@material-ui/core/styles'

import reduxForm from  "./Formu"
import {
  ResponsiveContainer
} from 'recharts'



const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main
  },

}));

const defaultValues = {
  name: "",
  age: 0,
  gender: "",
  os: "",
  favoriteNumber: 0,
};
const Form = () => {
  const classes = useStyles();

  return(
     
    <form className="ui form">
      <h1 className="ui dividing header">Formulario de Denuncia</h1>
      <div className="field">
        
        <div className="two fields">
          {/*Nombre empresa*/}
          <div className="required field">
            <label>Nombre de la empresa</label>
            <select className="ui fluid dropdown">
              <option value="">Empresa</option>
              <option value="Aa">Telefónica</option>
              <option value="Ba">HP</option>
              <option value="Ca">Deloitte</option>
              <option value="Da">KPMG</option>
              <option value="Ea">EY</option>
              <option value="Fa">Movistar</option>
              <option value="Ga">MS</option>
              <option value="Ha">Santander</option>
              <option value="Ia">BBVA</option>
              <option value="Ja">Westcon</option>
            </select>
          </div>
          {/*Relación con empresa*/}
          <div className="field">
            <label>Relación actual con la empresa</label>
            <select className="ui fluid dropdown">
              <option value="">Relación</option>
              <option value="Aaa">Sigo trabajando</option>
              <option value="Aab">Me despidieron</option>
              <option value="Bab">He dimitido</option>
              <option value="Jab">Otro</option>
            </select>
          </div>
        </div>
      </div>


      <div className="three fields">

        {/*Denunciado antes*/}
        <div className="inline fields">
          <label for="fruit">¿Has denunciado anteriormente?</label>
          <div className="field">
            <div className="ui radio checkbox">
              <input type="radio" name="fruit" checked="" tabindex="0" className="hidden"/>
              <label>Sí</label>
            </div>
          </div>

          <div className="field">
            <div className="ui radio checkbox">
              <input type="radio" name="fruit" tabindex="0" className="hidden"/>
              <label>No</label>
            </div>
          </div>
          
        </div>
        {/*Mediante que medio denunciaste*/}
        <div className="field">
          <label>Medio</label>
          <input type="text" name="card[number]" maxlength="16" placeholder="En caso afirmativo, ¿mediante qué medio?"/>
        </div>
        {/*Fecha del suceso*/}
        <div className="field">
        <label>Fecha aproximada del suceso o del inicio de este</label>
        <div className="two fields">
          <div className="field">
            <select className="ui fluid search dropdown" name="card[expire-month]">
              <option value="">Mes</option>
              <option value="1">Enero</option>
              <option value="2">Febrero</option>
              <option value="3">Marzo</option>
              <option value="4">Abril</option>
              <option value="5">Mayo</option>
              <option value="6">Junio</option>
              <option value="7">Julio</option>
              <option value="8">Agosto</option>
              <option value="9">Septiembre</option>
              <option value="10">Octubre</option>
              <option value="11">Noveembre</option>
              <option value="12">Diciembre</option>
            </select>
          </div>
          <div className="field">
            <input type="text" name="card[expire-year]" maxlength="4" placeholder="Año"/>
          </div>
        </div>
        </div>
      </div>
        
        

    <div className="field">      
      {/*Tipo de denuncia*/}
      <div className="required field">
        <label>Tipo de denuncia</label>
        <select className="ui fluid dropdown">
          <option value="">Tipo</option>
          <option value="A">Etnia</option>
          <option value="B">Género</option>
          <option value="C">Maltrato</option>
          <option value="D">Edad</option>
          <option value="E">Religión</option>
          <option value="F">Condición sexual</option>
          <option value="G">Discapacidad</option>
          <option value="H">Mobbing</option>
          <option value="I">Explotación</option>
          <option value="J">Otro</option>
        </select>
      </div>
    </div>

    {/*El usuario deberá solo responder obligatoriamente a aquella relacionada con su tipo de denuncia. El resto son opcionales*/}
    <div className="four fields">
        {/*País*/}
        <div className="field">
        <label>Si tu denuncia es de etnia</label>
          <select multiple="" className="ui dropdown">
          <option value="">Selecciona tu país de origen</option>
          <option value="AF">Afghanistan</option>
          <option value="AX">Åland Islands</option>
          <option value="AL">Albania</option>
          <option value="DZ">Algeria</option>
          <option value="AS">American Samoa</option>
          <option value="AD">Andorra</option>
          <option value="AO">Angola</option>
          <option value="AI">Anguilla</option>
          <option value="AQ">Antarctica</option>
          <option value="AG">Antigua and Barbuda</option>
          <option value="AR">Argentina</option>
          <option value="AM">Armenia</option>
          <option value="AW">Aruba</option>
          <option value="AU">Australia</option>
          <option value="AT">Austria</option>
          <option value="AZ">Azerbaijan</option>
          <option value="BS">Bahamas</option>
          <option value="BH">Bahrain</option>
          <option value="BD">Bangladesh</option>
          <option value="BB">Barbados</option>
          <option value="BY">Belarus</option>
          <option value="BE">Belgium</option>
          <option value="BZ">Belize</option>
          <option value="BJ">Benin</option>
          <option value="BM">Bermuda</option>
          <option value="BT">Bhutan</option>
          <option value="BO">Bolivia, Plurinational State of</option>
          <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
          <option value="BA">Bosnia and Herzegovina</option>
          <option value="BW">Botswana</option>
          <option value="BV">Bouvet Island</option>
          <option value="BR">Brazil</option>
          <option value="IO">British Indian Ocean Territory</option>
          <option value="BN">Brunei Darussalam</option>
          <option value="BG">Bulgaria</option>
          <option value="BF">Burkina Faso</option>
          <option value="BI">Burundi</option>
          <option value="KH">Cambodia</option>
          <option value="CM">Cameroon</option>
          <option value="CA">Canada</option>
          <option value="CV">Cape Verde</option>
          <option value="KY">Cayman Islands</option>
          <option value="CF">Central African Republic</option>
          <option value="TD">Chad</option>
          <option value="CL">Chile</option>
          <option value="CN">China</option>
          <option value="CX">Christmas Island</option>
          <option value="CC">Cocos (Keeling) Islands</option>
          <option value="CO">Colombia</option>
          <option value="KM">Comoros</option>
          <option value="CG">Congo</option>
          <option value="CD">Congo, the Democratic Republic of the</option>
          <option value="CK">Cook Islands</option>
          <option value="CR">Costa Rica</option>
          <option value="CI">Côte d'Ivoire</option>
          <option value="HR">Croatia</option>
          <option value="CU">Cuba</option>
          <option value="CW">Curaçao</option>
          <option value="CY">Cyprus</option>
          <option value="CZ">Czech Republic</option>
          <option value="DK">Denmark</option>
          <option value="DJ">Djibouti</option>
          <option value="DM">Dominica</option>
          <option value="DO">Dominican Republic</option>
          <option value="EC">Ecuador</option>
          <option value="EG">Egypt</option>
          <option value="SV">El Salvador</option>
          <option value="GQ">Equatorial Guinea</option>
          <option value="ER">Eritrea</option>
          <option value="EE">Estonia</option>
          <option value="ET">Ethiopia</option>
          <option value="FK">Falkland Islands (Malvinas)</option>
          <option value="FO">Faroe Islands</option>
          <option value="FJ">Fiji</option>
          <option value="FI">Finland</option>
          <option value="FR">France</option>
          <option value="GF">French Guiana</option>
          <option value="PF">French Polynesia</option>
          <option value="TF">French Southern Territories</option>
          <option value="GA">Gabon</option>
          <option value="GM">Gambia</option>
          <option value="GE">Georgia</option>
          <option value="DE">Germany</option>
          <option value="GH">Ghana</option>
          <option value="GI">Gibraltar</option>
          <option value="GR">Greece</option>
          <option value="GL">Greenland</option>
          <option value="GD">Grenada</option>
          <option value="GP">Guadeloupe</option>
          <option value="GU">Guam</option>
          <option value="GT">Guatemala</option>
          <option value="GG">Guernsey</option>
          <option value="GN">Guinea</option>
          <option value="GW">Guinea-Bissau</option>
          <option value="GY">Guyana</option>
          <option value="HT">Haiti</option>
          <option value="HM">Heard Island and McDonald Islands</option>
          <option value="VA">Holy See (Vatican City State)</option>
          <option value="HN">Honduras</option>
          <option value="HK">Hong Kong</option>
          <option value="HU">Hungary</option>
          <option value="IS">Iceland</option>
          <option value="IN">India</option>
          <option value="ID">Indonesia</option>
          <option value="IR">Iran, Islamic Republic of</option>
          <option value="IQ">Iraq</option>
          <option value="IE">Ireland</option>
          <option value="IM">Isle of Man</option>
          <option value="IL">Israel</option>
          <option value="IT">Italy</option>
          <option value="JM">Jamaica</option>
          <option value="JP">Japan</option>
          <option value="JE">Jersey</option>
          <option value="JO">Jordan</option>
          <option value="KZ">Kazakhstan</option>
          <option value="KE">Kenya</option>
          <option value="KI">Kiribati</option>
          <option value="KP">Korea, Democratic People's Republic of</option>
          <option value="KR">Korea, Republic of</option>
          <option value="KW">Kuwait</option>
          <option value="KG">Kyrgyzstan</option>
          <option value="LA">Lao People's Democratic Republic</option>
          <option value="LV">Latvia</option>
          <option value="LB">Lebanon</option>
          <option value="LS">Lesotho</option>
          <option value="LR">Liberia</option>
          <option value="LY">Libya</option>
          <option value="LI">Liechtenstein</option>
          <option value="LT">Lithuania</option>
          <option value="LU">Luxembourg</option>
          <option value="MO">Macao</option>
          <option value="MK">Macedonia, the former Yugoslav Republic of</option>
          <option value="MG">Madagascar</option>
          <option value="MW">Malawi</option>
          <option value="MY">Malaysia</option>
          <option value="MV">Maldives</option>
          <option value="ML">Mali</option>
          <option value="MT">Malta</option>
          <option value="MH">Marshall Islands</option>
          <option value="MQ">Martinique</option>
          <option value="MR">Mauritania</option>
          <option value="MU">Mauritius</option>
          <option value="YT">Mayotte</option>
          <option value="MX">Mexico</option>
          <option value="FM">Micronesia, Federated States of</option>
          <option value="MD">Moldova, Republic of</option>
          <option value="MC">Monaco</option>
          <option value="MN">Mongolia</option>
          <option value="ME">Montenegro</option>
          <option value="MS">Montserrat</option>
          <option value="MA">Morocco</option>
          <option value="MZ">Mozambique</option>
          <option value="MM">Myanmar</option>
          <option value="NA">Namibia</option>
          <option value="NR">Nauru</option>
          <option value="NP">Nepal</option>
          <option value="NL">Netherlands</option>
          <option value="NC">New Caledonia</option>
          <option value="NZ">New Zealand</option>
          <option value="NI">Nicaragua</option>
          <option value="NE">Niger</option>
          <option value="NG">Nigeria</option>
          <option value="NU">Niue</option>
          <option value="NF">Norfolk Island</option>
          <option value="MP">Northern Mariana Islands</option>
          <option value="NO">Norway</option>
          <option value="OM">Oman</option>
          <option value="PK">Pakistan</option>
          <option value="PW">Palau</option>
          <option value="PS">Palestinian Territory, Occupied</option>
          <option value="PA">Panama</option>
          <option value="PG">Papua New Guinea</option>
          <option value="PY">Paraguay</option>
          <option value="PE">Peru</option>
          <option value="PH">Philippines</option>
          <option value="PN">Pitcairn</option>
          <option value="PL">Poland</option>
          <option value="PT">Portugal</option>
          <option value="PR">Puerto Rico</option>
          <option value="QA">Qatar</option>
          <option value="RE">Réunion</option>
          <option value="RO">Romania</option>
          <option value="RU">Russian Federation</option>
          <option value="RW">Rwanda</option>
          <option value="BL">Saint Barthélemy</option>
          <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
          <option value="KN">Saint Kitts and Nevis</option>
          <option value="LC">Saint Lucia</option>
          <option value="MF">Saint Martin (French part)</option>
          <option value="PM">Saint Pierre and Miquelon</option>
          <option value="VC">Saint Vincent and the Grenadines</option>
          <option value="WS">Samoa</option>
          <option value="SM">San Marino</option>
          <option value="ST">Sao Tome and Principe</option>
          <option value="SA">Saudi Arabia</option>
          <option value="SN">Senegal</option>
          <option value="RS">Serbia</option>
          <option value="SC">Seychelles</option>
          <option value="SL">Sierra Leone</option>
          <option value="SG">Singapore</option>
          <option value="SX">Sint Maarten (Dutch part)</option>
          <option value="SK">Slovakia</option>
          <option value="SI">Slovenia</option>
          <option value="SB">Solomon Islands</option>
          <option value="SO">Somalia</option>
          <option value="ZA">South Africa</option>
          <option value="GS">South Georgia and the South Sandwich Islands</option>
          <option value="SS">South Sudan</option>
          <option value="ES">Spain</option>
          <option value="LK">Sri Lanka</option>
          <option value="SD">Sudan</option>
          <option value="SR">Suriname</option>
          <option value="SJ">Svalbard and Jan Mayen</option>
          <option value="SZ">Swaziland</option>
          <option value="SE">Sweden</option>
          <option value="CH">Switzerland</option>
          <option value="SY">Syrian Arab Republic</option>
          <option value="TW">Taiwan, Province of China</option>
          <option value="TJ">Tajikistan</option>
          <option value="TZ">Tanzania, United Republic of</option>
          <option value="TH">Thailand</option>
          <option value="TL">Timor-Leste</option>
          <option value="TG">Togo</option>
          <option value="TK">Tokelau</option>
          <option value="TO">Tonga</option>
          <option value="TT">Trinidad and Tobago</option>
          <option value="TN">Tunisia</option>
          <option value="TR">Turkey</option>
          <option value="TM">Turkmenistan</option>
          <option value="TC">Turks and Caicos Islands</option>
          <option value="TV">Tuvalu</option>
          <option value="UG">Uganda</option>
          <option value="UA">Ukraine</option>
          <option value="AE">United Arab Emirates</option>
          <option value="GB">United Kingdom</option>
          <option value="US">United States</option>
          <option value="UM">United States Minor Outlying Islands</option>
          <option value="UY">Uruguay</option>
          <option value="UZ">Uzbekistan</option>
          <option value="VU">Vanuatu</option>
          <option value="VE">Venezuela, Bolivarian Republic of</option>
          <option value="VN">Viet Nam</option>
          <option value="VG">Virgin Islands, British</option>
          <option value="VI">Virgin Islands, U.S.</option>
          <option value="WF">Wallis and Futuna</option>
          <option value="EH">Western Sahara</option>
          <option value="YE">Yemen</option>
          <option value="ZM">Zambia</option>
          <option value="ZW">Zimbabwe</option>
        </select>
        </div>
        {/*Edad*/}
        <div className="field">
          <label>Si tu denuncia es de edad</label>
          <input type="text" name="card[number]" maxlength="16" placeholder="Edad"/>
        </div>
        {/*Religión*/}
        <div className="field">
          <label>Si tu denuncia es de religión</label>
          <input type="text" name="card[cvc]" maxlength="3" placeholder="Etnia"/>
        </div>
        {/*Género*/}
        <div className="field">
          <label>Si tu denuncia es de género</label>
          <input type="text" name="card[cvc]" maxlength="3" placeholder="Género"/>
        </div>
      </div>
      <div className="five fields">
        {/*Maltrato*/}
        <div className="field">
          <label>Si tu denuncia es de maltrato</label>
          <input type="text" name="card[cvc]" maxlength="3" placeholder="Género"/>
        </div>
        {/*Condición sexual*/}
        <div className="field">
          <label>Si tu denuncia es de condición sexual</label>
          <input type="text" name="card[cvc]" maxlength="3" placeholder="Género"/>
        </div>
        {/*Discapacidad*/}
        <div className="field">
          <label>Si tu denuncia es de discapacidad</label>
          <input type="text" name="card[cvc]" maxlength="3" placeholder="Género"/>
        </div>
        {/*Mobbing*/}
        <div className="field">
          <label>Si tu denuncia es de mobbing</label>
          <input type="text" name="card[cvc]" maxlength="3" placeholder="Género"/>
        </div>
        {/*Explotación*/}
         <div className="field">
          <label>Si tu denuncia es de explotación</label>
          <input type="text" name="card[cvc]" maxlength="3" placeholder="Género"/>
        </div>
      </div>

  



    {/*El usuario contará su historia*/} 
    <div className="required field">
    <label >Descripción del suceso</label>
        <input type="text" name="card[number]" maxlength="16" placeholder="Cuéntanos tu hisoria"/>
    </div>


      
      {/*Botón para permitir compartir la historia. No es obligatorio para el usuario*/}
      <div className="ui segment">
        <div className="field">
          <div className="ui toggle checkbox">
          <div className="ui checkbox">
            <input type="checkbox" tabindex="0" className="hidden"/>
            <label>Acepto que mi historia aparezca publicada de forma anónima</label>
          </div>
          </div>
        </div>
      </div>
      <div className="ui button" tabindex="0">Enviar formulario</div>
    </form>
  );
};
export default Form;


