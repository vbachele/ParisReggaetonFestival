import React, { useRef, useState } from "react";

interface BoutiqueVideoProps {
  sources: string[];
  className?: string;
}

const BoutiqueVideo: React.FC<BoutiqueVideoProps> = ({ sources, className }) => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % sources.length);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 100);
  };

  return (
    <video
      ref={videoRef}
      src={sources[currentVideo]}
      className={className}
      autoPlay
      muted
      onEnded={handleVideoEnd}
      playsInline
    />
  );
};

export default BoutiqueVideo; 