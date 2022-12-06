import axiosAPI from "../../api/axios";

export const ApplicationEmail = async () => {
  const rawAccessToken = sessionStorage.getItem("token");
  const accessToken = JSON.parse(rawAccessToken);
  const userDataID = sessionStorage.getItem("postUserID");
  const userID = JSON.parse(userDataID);
  const USERS_URL = `/users/${userID}`;

  try {
    // Submit the info through axios to the back-end.
    const response = await axiosAPI.get(USERS_URL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "JWT " + accessToken,
      },
      withCredentials: true,
    });
    const userEmail = response.data.email;
    sessionStorage.setItem("userEmail", JSON.stringify(userEmail));
  } catch (error) {
    console.log(error);
    alert(JSON.stringify(error.response.data.message));
  }
};
