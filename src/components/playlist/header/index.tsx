import React, { useContext, useEffect, useState } from "react";
import { PageProps } from "@/types/pageProps";
import Logo from "@/assets/Icon.png";
import { arrayDurationToMilliseconds } from "@/utils/time";
import SongContext from "@/context/playlist";
import { Container, DescriptionHolder, TitleHolder } from "./headerWrapper";

export default function Header({ playlistInfomation }: PageProps) {
  const [color, setColor] = useState<string>("");
  const { playlistId } = useContext(SongContext);

  useEffect(() => {
    setColor(((Math.random() * 0xffffff) << 0).toString(16));
  }, [playlistId]);

  return (
    <Container color={color}>
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
          <h2
            dangerouslySetInnerHTML={{
              __html: playlistInfomation?.name,
            }}
          ></h2>
          <span
            dangerouslySetInnerHTML={{
              __html: playlistInfomation?.description,
            }}
          ></span>
          <p>
            <span
              className="user"
              dangerouslySetInnerHTML={{
                __html: playlistInfomation?.owner.display_name,
              }}
            ></span>
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
