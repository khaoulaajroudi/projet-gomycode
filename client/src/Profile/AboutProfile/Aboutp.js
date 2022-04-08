import React, { useEffect } from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { current } from "../../JS/Actions/User";
import { useNavigate } from "react-router";
const isAuth = localStorage.getItem("token");

function Aboutp() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuth) {
      dispatch(current());
    }
  }, []);
  const users = useSelector((state) => state.userReducer.user);
  const navigate = useNavigate();
  return (
    <div>
      <div className="continue">
        <div className="bloclong">
          <div className="leftbloc">
            <div class="photo-left">
              <img src={users.photo} className="imageprofile" />
            </div>
            <h4 class="name"> {users.name}</h4>
            <p class="info">{users.email}</p>
            <button class="btn btn-primary" type="button">
              Upload new image
            </button>
            <button
              class="btn btn-primary"
              type="button"
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("isAdmin");
                navigate("/");
              }}
            >
              LOG OUT
            </button>
          </div>
          <div className="rightbloc">
            <div className="navprofile">
              <ul>
                <Link to="/profile/aboutme">
                  {" "}
                  <li>About me</li>
                </Link>
                <Link to="/profile/cours">
                  {" "}
                  <li>Courses</li>
                </Link>
                <Link to="/profile/edit">
                  {" "}
                  <li>Edit Profil</li>
                </Link>
                <Link to="/">
                  {" "}
                  <li>Home Page</li>
                </Link>
              </ul>
            </div>
            <div className="blocinfo">
              <div className="email-si">
                <div className="signature">
                  <div className="image-email">
                    <img src={users.photo} />
                  </div>
                  <div className="support">
                    <h1 className="nameemeil">
                      {users.name}
                      <span>{users.lastname}</span>
                    </h1>
                    <h3 className="post"></h3>
                    <ul className="info-email">
                      <li>
                        <ion-icon name="call-outline"></ion-icon>
                        {users.phone}
                      </li>
                      <li>
                        <ion-icon name="mail-outline"></ion-icon>
                        {users.email}
                      </li>
                      <li>
                        <ion-icon name="at-outline"></ion-icon>adresse
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutp;
