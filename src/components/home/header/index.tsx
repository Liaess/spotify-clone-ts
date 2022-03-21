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
import { PageProps } from "@/types/pageProps";
import Logo from "@/assets/Icon.png";
import { arrayDurationToMilliseconds } from "@/utils/time";

export default function Header({ playlistInfomation }: PageProps) {
  const { data: session } = useSession();
  const [color, setColor] = useState<string>("");
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    setColor(((Math.random() * 0xffffff) << 0).toString(16));
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
        {playlistInfomation?.images.length > 0 ? (
          <img
            src={playlistInfomation?.images[0]?.url}
            alt="playlist-image"
          ></img>
        ) : (
          <img
            className="temporary-image"
            src={Logo.src}
            alt="temporary-image"
          />
        )}
        <DescriptionHolder>
          <h1>PLAYLIST</h1>
          <h2>{playlistInfomation?.name}</h2>
          <span>{playlistInfomation?.description}</span>
          <p>
            <span className="user">
              {playlistInfomation?.owner.display_name}
            </span>
            <span className="dot"> &#9679; </span>
            {playlistInfomation?.followers.total}
            {playlistInfomation?.followers.total > 1 ? "  likes" : "  like"}
            <span className="dot"> &#9679; </span>
            {playlistInfomation?.tracks.total}
            {playlistInfomation?.tracks.total > 1 ? "  songs" : "  song"}
            {playlistInfomation?.tracks.items.length > 0 &&
              arrayDurationToMilliseconds(
                playlistInfomation?.tracks.items.map(
                  (item) => item.track.duration_ms
                )
              )}
          </p>
        </DescriptionHolder>
      </TitleHolder>
    </Container>
  );
}
