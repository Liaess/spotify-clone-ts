import LogoutBtn from "@/components/home/logoutBtn";
import { useState } from "react";
import { Container, UserInfomation } from "./headerWrapper";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import styled from "styled-components";

export default function Header() {
  const { data: session } = useSession();
  const [showMenu, setShowMenu] = useState(false);
  // const [color, setColor] = useState(null);

  return (
    <Container>
      <header onClick={() => setShowMenu(!showMenu)}>
        <UserInfomation>
          <img src={session?.user?.image!} alt="user-logo" />
          <span>{session?.user?.name}</span>
          <ChevronDownIcon className="icons" />
        </UserInfomation>
        <div>{showMenu && <LogoutBtn />}</div>
      </header>
      <TitleHolder>
        <h1>hello</h1>
      </TitleHolder>
    </Container>
  );
}

const TitleHolder = styled.div`
  height: 40vh;
  display: flex;
  align-items: end;
  color: red;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
`;
