import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert } from "react-native";
import YoutubePlayer, { PLAYER_STATES } from "react-native-youtube-iframe";

interface CustomYoutubePlayerProps {
  videoId: string;
}

export default function CustomYoutubePlayer({
  videoId,
}: CustomYoutubePlayerProps) {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state: PLAYER_STATES) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  return (
    <View>
      <YoutubePlayer
        height={244}
        play={playing}
        videoId={videoId}
        onChangeState={onStateChange}
      />
    </View>
  );
}
