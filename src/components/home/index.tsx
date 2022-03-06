import styled from "styled-components";
import Center from "./center";
import Header from "./header";
import PlaylistContext from "@/context/playlist";
import { useContext, useEffect, useState } from "react";
import { useApi } from "@/hooks/useApi";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import Loading from "../loading";
import { SinglePlaylistResponse } from "@/types/pageProps";

export default function Home() {
  const { data: session } = useSession();
  const { playlistId } = useContext(PlaylistContext);
  const [isLoading, setIsLoading] = useState(true);
  const [playlistInfomation, setPlaylistInfomation] =
    useState<SinglePlaylistResponse | null>(null);

  useEffect(() => {
    if (playlistId === null) return;
    const spotifyApi = new useApi().connectSpotify(session);
    if (spotifyApi.getAccessToken()) {
      spotifyApi
        .getPlaylist(playlistId)
        .then(({ body }) => {
          setPlaylistInfomation(body);
          setIsLoading(false);
        })
        .catch((_err) => {
          toast("Something went wrong!");
        });
    }
  }, [playlistId, session]);

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header playlistInfomation={playlistInfomation} />
          <Center />
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  flex-grow: 1;
  color: var(--white-color);
  header {
    margin-top: 15px;
    margin-right: 30px;
    display: flex;
    flex-direction: column;
    align-items: end;
  }
`;
