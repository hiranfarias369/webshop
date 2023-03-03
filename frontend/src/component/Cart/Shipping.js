import React, { Fragment, useState } from "react";
import "./Shipping.css";
import { useSelector, useDispatch } from "react-redux";
import { saveShippingInfo } from "../../actions/cartAction";
import MetaData from "../layout/MetaData";
import PinDropIcon from "@material-ui/icons/PinDrop";
import HomeIcon from "@material-ui/icons/Home";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import PublicIcon from "@material-ui/icons/Public";
import PhoneIcon from "@material-ui/icons/Phone";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import PeopleIcon from "@mui/icons-material/People";
import FmdBadIcon from "@mui/icons-material/FmdBad";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import TransferWithinAStationIcon from "@material-ui/icons/TransferWithinAStation";
import { Country, State } from "country-state-city";
import { useAlert } from "react-alert";
import CheckoutSteps from "../Cart/CheckoutSteps";
//import TelefoneBrasileiroInput from "react-telefone-brasileiro";
//import ReactDOM from "react-dom";

const Shipping = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { shippingInfo } = useSelector((state) => state.cart);

  const [address, setAddress] = useState(shippingInfo.address);

  const [name, setName] = useState(shippingInfo.name);
  const [number, setNumber] = useState(shippingInfo.number);
  const [complement, setComplement] = useState(shippingInfo.complement);
  const [district, setDistrict] = useState(shippingInfo.district);

  const [city, setCity] = useState(shippingInfo.city);
  const [state, setState] = useState(shippingInfo.state);
  const [country, setCountry] = useState(shippingInfo.country);
  const [pinCode, setPinCode] = useState(shippingInfo.pinCode);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

  //   onFocus={(e) =>setNumber(e.target.addEventListener("wheel",function (e) {e.preventDefault();},{ passive: false }))}

 
  const shippingSubmit = (e) => {
    e.preventDefault();

    if (phoneNo.length < 14 || phoneNo.length > 14) {
      alert.error(
        "DIGITE O NÚMERO DO TELEFONE CORRETAMENTE: (XX)XXXXX-XXXX"
      );
      return;
    }
    // if (pinCode.length < 8 || pinCode.length > 8) {
    //   alert.error("O CEP DEVE CONTER 8 DIGITOS - SEM TRAÇO OU PONTO!");
    //   return;
    // }

    dispatch(
      saveShippingInfo({
        name,
        address,
        number,
        complement,
        district,
        city,
        state,
        country,
        pinCode,
        phoneNo,
      })
    );
    history.push("/order/confirm");
  };

  

  return (
    
    <Fragment>

      <MetaData title="Endereço Para Entrega -- Diy Hellem Confecções." />

      <CheckoutSteps activeStep={0} />

      <div className="shippingContainer">
        <div className="shippingBox">
          <h2 className="shippingHeading">Endereço/Entrega</h2>

          <form
            className="shippingForm"
            encType="multipart/form-data"
            onSubmit={shippingSubmit}
          >
            <div>
              <PeopleIcon />

              <input
                
                type="text"
                placeholder="Nome"
                pattern="^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <HomeIcon />
              <input
                type="text"
                placeholder="Address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div>
              <FormatListNumberedIcon />
              <input
                type="text"
                placeholder="Número"
                required
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>

            <div>
              <FmdBadIcon />
              <input
                type="text"
                placeholder="Ponto de Referência"
                required
                value={complement}
                onChange={(e) => setComplement(e.target.value)}
              />
            </div>

            <div>
              <HomeWorkIcon />
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
                type="text"
                placeholder="Cep: XXXXX-XXX"
                pattern="\d{5}-\d{3}"
                required
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
                size="8"
              />
            </div>

            <div>
              <PhoneIcon />
              <input
                type="text"
                placeholder="Tel: (XX)XXXXX-XXXX"
                pattern="\(\d{2}\)\d{5}-\d{4}"
                required
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                // size="14"
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
              value="PROSSEGUIR"
              className="shippingBtn"
              disabled={state ? false : true}
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};
//ReactDOM.render(<shippingSubmit />, document.getElementById("root"));
export default Shipping;
