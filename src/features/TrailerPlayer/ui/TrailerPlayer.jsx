import { useState } from "react";
import { getFilmTrailerById } from "../model/services/getFilmTrailerById";
import styles from "./trailerPlayer.module.scss";

const TrailerPlayer = ({ id }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [url, setUrl] = useState("");

  const togglePlay = async () => {
    setIsPlaying((prevState) => !prevState);
    if (!url) {
      const result = await getFilmTrailerById(id);
      setUrl(result);
    }
  };

  return (
    <div className={styles.wrapperTrailer}>
      <button onClick={togglePlay} className={styles.btnHandle}>
        {isPlaying ? "Hide youtube" : "Snow youtube"} Trailer
      </button>
      {isPlaying && (
        <iframe src={url} allowFullScreen title="Embedded YouTube Video" className={styles.iframe}></iframe>
      )}
    </div>
  );
};

export default TrailerPlayer;
