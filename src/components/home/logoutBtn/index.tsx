import { signOut } from "next-auth/react";
import { ButtonHolder } from "./logouBtnWrapper";

export default function LogoutBtn() {
  return (
    <ButtonHolder>
      <div>
        <p onClick={() => signOut()}>Logout</p>
      </div>
      <div>
        <p onClick={() => signOut()}>Logout</p>
      </div>
      <div>
        <p onClick={() => signOut()}>Logout</p>
      </div>
    </ButtonHolder>
  );
}
