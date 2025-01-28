import { useEffect, useRef } from "react";
// Images
import { playImg, pauseImg, replayImg } from "../../utils/index";
// Data
import { hightlightsSlides } from "../../shared/data";
// GSAP
import gsap from "gsap";
// Type
import { IPlayArg, IProgress } from "../../shared/types/highlights";


function Progress({ video, setVideo, replay, setReplay, videoRef }: IProgress) {

  const stepRef = useRef<HTMLDivElement[]>([]);
  const { isPlaying, isLastVideo, videoId, startPlay } = video;

  useEffect(() => {
    if (startPlay && isPlaying && videoRef.current[videoId]) {
      gsap.to(stepRef.current[videoId], {
        duration: 0.5,
        width: "35px",
        borderRadius: "20px",
      });

      gsap.to(stepRef.current[videoId - 1], {
        duration: 0.5,
        width: "10px",
      });
    }
    if (replay) {
      gsap.to(stepRef.current[hightlightsSlides.length - 1], {
        duration: 0.5,
        width: "10px",
      });
    }
  }, [startPlay, isPlaying, videoId, replay]);

  function handlePlayClick(type: IPlayArg) {
    switch (type) {
      case "play":
        setVideo((pre) => ({
          ...pre,
          isPlaying: true,
        }));
        break;

      case "pause":
        setVideo((pre) => ({
          ...pre,
          isPlaying: false,
        }));
        break;

      case "replay":
        setVideo((pre) => ({
          ...pre,
          videoId: 0,
          startPlay: true,
          isPlaying: true,
          isLastVideo: false,
        }));
        setReplay(true);
        break;
    }
  }

  return (
    <>
      <div className="progress-container">
        <div className="progress">
          {hightlightsSlides.map((_, ind) => (
            <div
              className="step"
              key={ind}
              ref={(el) => {
                if (el && !stepRef.current.includes(el))
                  stepRef.current.push(el);
              }}
            />
          ))}
        </div>
        <button
          className="play-progress-btn"
          onClick={() =>
            isLastVideo
              ? handlePlayClick("replay")
              : isPlaying
              ? handlePlayClick("pause")
              : handlePlayClick("play")
          }
        >
          <img
            src={isPlaying ? playImg : isLastVideo ? replayImg : pauseImg}
            alt={isPlaying ? "play" : isLastVideo ? "replay" : "pause"}
          />
        </button>
      </div>
    </>
  );
}

export default Progress;
