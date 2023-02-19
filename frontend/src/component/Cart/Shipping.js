import React, { Fragment, useState } from "react";
import "./Shipping.css";
import { useSelector, useDispatch } from "react-redux";
import { saveShippingInfo } from "../../actions/cartAction";
import MetaData from "../layout/MetaData";
import PinDropIcon from "@material-ui/icons/PinDrop";
import HomeIcon from "@material-ui/icons/Home";


import PeopleOutlineSharpIcon from "@mui/icons-material/PeopleOutlineSharp";

import FormatListNumberedRtlIcon from "@mui/icons-material/FormatListNumberedRtl";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import LocationCityIcon from "@material-ui/icons/LocationCity";
import PublicIcon from "@material-ui/icons/Public";
import PhoneIcon from "@material-ui/icons/Phone";
import TransferWithinAStationIcon from "@material-ui/icons/TransferWithinAStation";
import { Country, State } from "country-state-city";
import { useAlert } from "react-alert";
import CheckoutSteps from "../Cart/CheckoutSteps.js";

const Shipping = ({history}) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { shippingInfo } = useSelector((state) => state.cart);


  const [name, setName] = useState(shippingInfo.name);
  const [number, setNumber] = useState(shippingInfo.number);
  const [complement, setComplement] = useState(shippingInfo.complement);
  const [district, setDistrict] = useState(shippingInfo.district);
  


  
  const [address, setAddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);
  const [state, setState] = useState(shippingInfo.state);
  const [country, setCountry] = useState(shippingInfo.country);
  const [pinCode, setPinCode] = useState(shippingInfo.pinCode);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

  


  const shippingSubmit = (e) => {
    e.preventDefault();

    if (phoneNo.length < 11 || phoneNo.length > 11) {
      alert.error("Digite o Código de Área + o Número do Celular");
      return;
    };

    if (pinCode.length < 8 || pinCode.length > 8) {
      alert.error("o Cep deve conter 8 digitos: sem Traço e sem Ponto");
      return;
    }

    dispatch(
      saveShippingInfo({ name, address, number, complement, district, city, state, country, pinCode, phoneNo })
    );
    history.push("/order/confirm");
  };

  return (
    <Fragment>
      <MetaData title="Detalhes do Envio -- Diy Hellem Confecções." />

      <CheckoutSteps activeStep={0}/>

      <div className="shippingContainer">
        <div className="shippingBox">
          <h2 className="shippingHeading">Detalhes do Envio</h2>

          <form
            className="shippingForm"
            encType="multipart/form-data"
            onSubmit={shippingSubmit}
          >
            <div>
              <PeopleOutlineSharpIcon />
              <input
                type="text"
                placeholder="Nome"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>




            <div>
              <HomeIcon />
              <input
                type="text"
                placeholder="Endereço"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>


            <div>
              <FormatListNumberedRtlIcon />
              <input
                type="text"
                placeholder="Número"
                required
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>

            <div>
              <PlaylistAddCheckIcon />
              <input
                type="text"
                placeholder="Ponto de Referência"
                required
                value={complement}
                onChange={(e) => setComplement(e.target.value)}
              />
            </div>

            <div>
              <LocationOnIcon />
              <input
                type="text"
                placeholder="Bairro"
                required
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              />
            </div>

            <div>
              <LocationCityIcon />
              <input
                type="text"
                placeholder="Cidade"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div>
              <PinDropIcon />
              <input
                type="number"
                placeholder="CEP"
                required
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
                size="8"
              />
            </div>

            <div>
              <PhoneIcon />
              <input
             
                type="number"
                placeholder="Telefone Celular"
                required
                value={phoneNo}
                onChange={(e) =>  setPhoneNo(e.target.value)}
                size="11"
              />
            </div>

            <div>
              <PublicIcon />

              <select
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="">País</option>
                {Country &&
                  Country.getAllCountries().map((item) => (
                    <option key={item.isoCode} value={item.isoCode}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>

            {country && (
              <div>
                <TransferWithinAStationIcon />

                <select
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option value="">Estado</option>
                  {State &&
                    State.getStatesOfCountry(country).map((item) => (
                      <option key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>
            )}

            <input
              type="submit"
              value="Avançar"
              className="shippingBtn"
              disabled={state ? false : true}
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Shipping;
