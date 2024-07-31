import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Stopwatch = () => {
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 100); // 100 milliseconds interval
      setIntervalId(id);
      return () => clearInterval(id);
    }
  }, [isRunning, startTime]);

  const formatTime = (time) => {
    const milliseconds = Math.floor(time % 1000); // Show hundredths of a second
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor(time / (1000 * 60 * 60));
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}.${padZero(
      milliseconds
    )}`;
  };

  const padZero = (num) => (num < 10 ? `0${num}` : num);

  const startStopwatch = () => {
    const currentTime = Date.now();
    setStartTime(currentTime - elapsedTime);
    setIsRunning(true);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
    clearInterval(intervalId);
    const currentTime = Date.now();
    setElapsedTime(currentTime - startTime);
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    clearInterval(intervalId);
    setElapsedTime(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{formatTime(elapsedTime)}</Text>
      <View style={styles.buttons}>
        {!isRunning ? (
          <TouchableOpacity
            style={[styles.button, styles.startButton]}
            onPress={startStopwatch}
          >
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.button, styles.stopButton]}
            onPress={stopStopwatch}
          >
            <Text style={styles.buttonText}>Stop</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={[styles.button, styles.resetButton]}
          onPress={resetStopwatch}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  time: {
    fontSize: 48,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: 100,
  },
  startButton: {
    backgroundColor: "green",
  },
  stopButton: {
    backgroundColor: "red",
  },
  resetButton: {
    backgroundColor: "blue",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default Stopwatch;
