import "./videoCarousel.scss";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

// Data
import { hightlightsSlides } from "../../shared/data";

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

// Component
import Progress from "./VideoProgress";

// Type
import { IVideo } from "../../shared/types/highlights";

gsap.registerPlugin(ScrollTrigger);

function VideoCarousel() {
  const videoRef = useRef<HTMLVideoElement[]>([]);
  const [replay, setReplay] = useState<boolean>(false);

  const [video, setVideo] = useState<IVideo>({
    videoId: 0,
    startPlay: false,
    isEnd: false,
    isPlaying: false,
    isLastVideo: false,
  });

  const { videoId, isEnd, isPlaying, startPlay } = video;

  // handle slider X translate ---------------

  useEffect(() => {
    if ((isEnd && videoId < videoRef.current.length) || replay) {
      gsap.to(".slider", {
        x:
          window.innerWidth > 900
            ? `-${(100 / hightlightsSlides.length) * videoId}%`
            : `-${(102 / hightlightsSlides.length) * videoId}%`,
      });

      setVideo((pre) => ({ ...pre, isEnd: false }));
      setReplay(false);
    } else if (startPlay && isPlaying && videoRef.current[videoId]) {
      videoRef.current[videoId].play();
    } else if (videoRef.current[videoId]) {
      videoRef.current[videoId].pause();
    } else if (!videoRef.current[videoId]) {
      setVideo((pre) => ({
        ...pre,
        startPlay: false,
        isEnd: false,
        isPlaying: false,
        isLastVideo: true,
      }));
    }
  }, [isPlaying, startPlay, videoId, isEnd, replay]);

  // -------------------------------------------

  function handleNextVideo() {
    const nextVideo = videoId + 1;
    setVideo((pre) => ({ ...pre, isEnd: true, videoId: nextVideo }));
  }

  return (
    <>
      <motion.div
        viewport={{ margin: "-400px 0px 400px 0px" }}
        onViewportEnter={() =>
          setVideo((pre) => ({ ...pre, startPlay: true, isPlaying: true }))
        }
        onViewportLeave={() =>
          setVideo((pre) => ({ ...pre, isPlaying: false }))
        }
        className="slider"
      >
        {hightlightsSlides.map((item) => (
          <div className="slide" key={item.id}>
            <video
              className="video"
              preload="auto"
              playsInline
              muted
              ref={(el) => {
                if (el && !videoRef.current.includes(el))
                  videoRef.current.push(el);
              }}
              onPlay={() => {
                setVideo((pre) => ({
                  ...pre,
                  isPlaying: true,
                  startPlay: true,
                }));
              }}
              onEnded={handleNextVideo}
            >
              <source src={item.video} type="video/mp4" />
            </video>
            <div className="v-des">
              {item.textLists.map((txt) => (
                <p key={txt}>{txt}</p>
              ))}
            </div>
          </div>
        ))}
      </motion.div>

      {/* PROGRESS COMPONENTS*/}
      <Progress
        replay={replay}
        videoRef={videoRef}
        video={video}
        setVideo={setVideo}
        setReplay={setReplay}
      />
    </>
  );
}

export default VideoCarousel;
