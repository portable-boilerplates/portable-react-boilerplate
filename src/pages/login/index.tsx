import React from "react";
import { AuthContext } from "@/store";
import { Logo } from "@/assets";
import styles from "@/pages/login/styles.module.scss";

export default function Login(): React.ReactElement {
  const { login, state } = React.useContext(AuthContext);

  return (
    <div className={styles.root}>
      <img src={Logo} alt="Logo" height={200} width={200} />
      <br />
      <button disabled={state.isLoading} onClick={() => login()}>
        Simulate login
      </button>
    </div>
  );
}
