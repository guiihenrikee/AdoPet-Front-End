import React from "react";
import { useEffect, useState } from "react";
import "../styles/AccountDetails.css";

import axiosAPI from "../../api/axios";

function AccountDetails() {
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
      <h1>Informações da Conta</h1>
      <label>
        Nome <h5>{usersInfo.name}</h5>
      </label>
      <br />
      <label>
        Email <h5>{usersInfo.email}</h5>
      </label>
    </div>
  );
}

export default AccountDetails;
