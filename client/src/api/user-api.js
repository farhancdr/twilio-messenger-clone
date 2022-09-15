import { url } from "../config/config";

const signup = async ({ name, email, password, admin }) => {
  try {
    let response = await fetch(url + "register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        first_name: name,
        email,
        userName: email,
        birthday: "2022-03-12",
        phone_number: "k232323",
        password,
      }),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const adminSignup = async ({ name, email, password, admin }) => {
  try {
    let response = await fetch(url + "admin-register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        adminName: name,
        first_name: name,
        last_name: name,
        email,
        roles: ["admin"],
        password,
      }),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export { signup, adminSignup };
