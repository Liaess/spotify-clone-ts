import LogoutBtn from "@/components/navbar/logoutBtn";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import { useState } from "react";
import styled from "styled-components";

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

const Header = styled.header`
  position: absolute;
  top: 20px;
  right: 30px;
  color: var(--white-color);
`;

export const UserInfomation = styled.div`
  background-color: var(--main-sidebar-color);
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 18px;
  :hover {
    opacity: 80%;
    cursor: pointer;
  }
  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  .icons {
    height: 1.25rem;
    width: 1.25rem;
    margin-right: 7px;
  }
`;
