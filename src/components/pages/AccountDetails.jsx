import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axiosAPI from "../../api/axios";

function AccountDetails() {
  const navigate = useNavigate();
  const [usersInfo, setUsersInfo] = useState();
  const userDataID = sessionStorage.getItem("userID");
  const userID = JSON.parse(userDataID);
  const token = sessionStorage.getItem("token");
  const accessToken = JSON.parse(token);
  const uri = `/users/${userID}`;

  async function userDetails() {
    await axiosAPI
      .get(uri, {
        headers: {
          Authorization: `JWT ${accessToken}`,
        },
      })
      .then((res) => {
        setUsersInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const userDetailEdit = async () => {
    navigate("/editaccount");
  };

  useEffect(() => {
    userDetails();
  }, [usersInfo]);

  if (usersInfo === undefined)
    return (
      <>
        <p>Loading...</p>
      </>
    );

  return (
    <div>
      <label>
        Nome <h5>{usersInfo.name}</h5>
      </label>
      <br />
      <label>
        Email <h5>{usersInfo.email}</h5>
      </label>
      <br />
      <button className="btnLogin2" onClick={userDetailEdit}>
        Editar dados
      </button>
    </div>
  );
}

export default AccountDetails;
