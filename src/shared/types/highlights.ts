export interface IVideo {
  videoId: number;
  startPlay: boolean;
  isEnd: boolean;
  isPlaying: boolean;
  isLastVideo: boolean;
}

export type IPlayArg = "play" | "pause" | "replay";

export interface IProgress {
  video: IVideo;
  replay: boolean;
  videoRef: React.MutableRefObject<HTMLVideoElement[]>;
  setVideo: React.Dispatch<React.SetStateAction<IVideo>>;
  setReplay: React.Dispatch<React.SetStateAction<boolean>>;
}