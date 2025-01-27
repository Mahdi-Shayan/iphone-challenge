import "./videoCarousel.scss";
import { useEffect, useRef, useState } from "react";

// Data
import { hightlightsSlides } from "../../shared/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

interface IVideo {
  videoId: number;
  startPlay: boolean;
  isEnd: boolean;
  isPlaying: boolean;
  isLastVideo: boolean;
}

function VideoCarousel() {
  const videoRef = useRef<HTMLVideoElement[]>([]);

  const [video, setVideo] = useState<IVideo>({
    videoId: 0,
    startPlay: false,
    isEnd: false,
    isPlaying: false,
    isLastVideo: false,
  });

  const { videoId, isEnd, isLastVideo, isPlaying, startPlay } = video;

  useGSAP(() => {
    gsap.to(".slider", {
      scrollTrigger: {
        trigger: ".slider",
        start: "70% bottom",
        onUpdate: () => {
          setVideo((pre) => ({
            ...pre,
            startPlay: true,
            isPlaying: true,
          }));
        },
      },
    });
  }, []);

  // handle slider X translate ---------------

  useEffect(() => {
    if (isEnd && videoId < videoRef.current.length) {
      gsap.to(".slider", {
        x:
          window.innerWidth > 900
            ? `-${72 * videoId}vw`
            : `-${92 * videoId}vw`,
      });

      setVideo((pre) => ({ ...pre, isEnd: false }));
    } else if (startPlay && !isLastVideo) {
      try {
        videoRef.current[videoId].play();
      } catch (e) {
        setVideo((pre) => ({
          ...pre,
          startPlay: false,
          isEnd: false,
          isPlaying: false,
          isLastVideo: true,
        }));
      }
    }
  }, [isPlaying, startPlay, videoId, isEnd]);

  // -------------------------------------------

  function handleNextVideo() {
    const nextVideo = videoId + 1;
    setVideo((pre) => ({ ...pre, isEnd: true, videoId: nextVideo }));
  }

  return (
    <>
      <div className="slider">
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
      </div>
    </>
  );
}

export default VideoCarousel;
