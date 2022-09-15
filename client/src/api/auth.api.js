import { url } from "../config/config";

const signin = async ({ email, password }) => {
  try {
    let response = await fetch(url + "login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ email, password }),
    });
    const res = await response.json();
    return res;
  } catch (err) {
    console.log(err);
  }
};

const adminSignin = async ({ email, password }) => {
  try {
    let response = await fetch(url + "admin-login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ emailOrUserName: email, password }),
    });
    const res = await response.json();
    return res;
  } catch (err) {
    console.log(err);
  }
}

export { signin, adminSignin };
