import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert, useWindowDimensions } from "react-native";
import YoutubePlayer, { PLAYER_STATES } from "react-native-youtube-iframe";

interface CustomYoutubePlayerProps {
  videoId: string;
}

export default function CustomYoutubePlayer({
  videoId,
}: CustomYoutubePlayerProps) {
  const [playing, setPlaying] = useState(false);
  const { width } = useWindowDimensions();

  const onStateChange = useCallback((state: PLAYER_STATES) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  return (
    <View style={{}}>
      <YoutubePlayer
        height={width / 1.78}
        width={width}
        play={playing}
        videoId={videoId}
        onChangeState={onStateChange}
      />
    </View>
  );
}
