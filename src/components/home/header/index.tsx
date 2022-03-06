import LogoutBtn from "@/components/home/logoutBtn";
import React, { useEffect, useState } from "react";
import {
  Container,
  UserInfomation,
  TitleHolder,
  DescriptionHolder,
} from "./headerWrapper";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import { HeaderProps } from "@/types/pageProps";

export default function Header({ playlistInfomation }: HeaderProps) {
  const { data: session } = useSession();
  const [color, setColor] = useState<string>("");
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    setColor(Math.floor(Math.random() * 16777215).toString(16));
  }, []);

  return (
    <Container color={color}>
      <header onClick={() => setShowMenu(!showMenu)}>
        <UserInfomation>
          <img src={session?.user?.image!} alt="user-logo" />
          <span>{session?.user?.name}</span>
          <ChevronDownIcon className="icons" />
        </UserInfomation>
        <div>{showMenu && <LogoutBtn />}</div>
      </header>
      <TitleHolder>
        <img
          src={playlistInfomation?.images[0]?.url}
          alt="playlist-image"
        ></img>
        <DescriptionHolder>
          <p>PLAYLIST</p>
          <h1>{playlistInfomation?.name}</h1>
          <span>{playlistInfomation?.description}</span>
        </DescriptionHolder>
      </TitleHolder>
    </Container>
  );
}
