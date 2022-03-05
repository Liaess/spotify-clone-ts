export interface SpotifyProvider {
  spotify: {
    id: string;
    name: string;
    type: string;
    signinUrl: string;
    callbackUrl: string;
  };
}
export interface IPlaylistInformation {
  collaborative: boolean;
  description: string | null;
  id: string;
  images: Images[];
  name: string;
  owner: User;
  public: boolean | null;
  snapshot_id: string;
  type: string;
}

interface Images {
  height?: number | undefined;
  url: string;
  width?: number | undefined;
}

interface User {
  display_name?: string | undefined;
  external_urls: ExternalUrl;
  followers?: Followers | undefined;
  href: string;
  id: string;
  images?: Images[] | undefined;
  type: "user";
  uri: string;
}

interface ExternalUrl {
  spotify: string;
}

interface Followers {
  href: null;
  total: number;
}
