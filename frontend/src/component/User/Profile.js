import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import "./Profile.css";
import { closestTo, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

const Profile = ({ history }) => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/login");
    }
  }, [history, isAuthenticated]);

  const [diaAtual] = useState(Date.now);
  const closest = closestTo(diaAtual, [diaAtual]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${user.name}'s Profile`} />
          <div className="profileContainer">
            <div>
              <h1>Meu Perfil</h1>
              <img src={user.avatar.url} alt={user.name} />
              <Link to="/me/update">Editar Perfil</Link>
            </div>
            <div>
              <div>
                <h4>Nome Completo</h4>
                <p>{user.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{user.email}</p>
              </div>
              <div >
                <h4>Membro Desde:</h4>

                <p>
                  {closest &&
                    format(closest, "eeee - dd/MM/yyyy - pp", {
                      locale: ptBR,
                    })}
                </p>
              </div>

              <div>
                <Link to="/orders">Meus Pedidos</Link>
                <Link to="/password/update">Atualizar Senha</Link>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};
export default Profile;
