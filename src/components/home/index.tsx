import styled from "styled-components";
import SongContext from "@/context/playlist";
import { useContext, useEffect, useState } from "react";
import { useApi } from "@/hooks/useApi";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import Loading from "../loading";
import { SinglePlaylistResponse } from "@/types/pageProps";
import Playlist from "../playlist";

export default function Home() {
  const { data: session } = useSession();
  const { playlistId } = useContext(SongContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);
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
    <>
      {isLoading ? (
        <Loading width={100} height={100} />
      ) : (
        <Container>
          <Playlist playlistInfomation={playlistInfomation} />
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  flex-grow: 1;
  color: var(--white-color);
  header {
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-top: 15px;
    margin-right: 30px;
  }
  @media (min-width: 768px) {
    padding-left: 12rem;
  }
  @media (min-width: 1024px) {
    padding-left: 15rem;
  }
`;
