import React, { Fragment, useState, useEffect } from "react";
import "./ResetPassword.css";
import Loader from "../layout/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, resetPassword } from "../../actions/userAction";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockIcon from "@material-ui/icons/Lock";
import Eye from "../../images/eye.svg"
import EyeOff from "../../images/eye-off.svg"

const ResetPassword = ({ history, match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, success, loading } = useSelector(
    (state) => state.forgotPassword
  );

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const resetPasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("password", password);
    myForm.set("confirmPassword", confirmPassword);

    dispatch(resetPassword(match.params.token, myForm));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Senha Atualizada com Sucesso!");

      history.push("/login");
    }
  }, [dispatch, error, alert, history, success]);



  
  const [icon, setIcon] = useState(EyeOff);
  const [inputType, setInputType] = useState("password");
  const alternarVisibilityPassword = () => {
    if(inputType === "password") {
      setInputType("text");
      setIcon(Eye)
    } else {
      setInputType("password");
      setIcon(EyeOff)
    }
  }

  return (
    <Fragment>
     
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
       
          <MetaData title="ALTERAR SENHA -- Diy Hellem Confecções" />
          <div className="resetPasswordContainer">
            <div className="resetPasswordBox">
              <h2 className="resetPasswordHeading">ALTERAR SENHA</h2>

              <form
                className="resetPasswordForm"
                onSubmit={resetPasswordSubmit}
              >
                <div>
                  <LockOpenIcon />
                  <input
                    type={inputType}
                    placeholder="New Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <span className="password-icon" onClick={alternarVisibilityPassword} aria-hidden="true"><img src={icon} alt="" /></span>

                </div>
                <div className="loginPassword">
                  <LockIcon />
                  <input
                    type={inputType}
                    placeholder="Confirm Password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                 
                </div>
                <input
                  type="submit"
                  value="Salvar"
                  className="resetPasswordBtn"
                />
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ResetPassword;
