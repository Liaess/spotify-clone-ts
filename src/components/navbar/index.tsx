import LogoutBtn from "@/components/navbar/logoutBtn";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { Header, UserInfomation } from "./navbarWrapper";

export default function NavBar() {
  const { data: session } = useSession();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <Header onClick={() => setShowMenu(!showMenu)}>
      <UserInfomation>
        <img src={session?.user?.image!} alt="user-logo" />
        <span>{session?.user?.name}</span>
        <ChevronDownIcon className="icons" />
      </UserInfomation>
      <div>{showMenu && <LogoutBtn />}</div>
    </Header>
  );
}
