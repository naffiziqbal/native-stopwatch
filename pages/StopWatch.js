// Stopwatch.js
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
      setIntervalId(id);
      return () => clearInterval(id);
    }
  }, [isRunning]);

  const formatTime = (time) => {
    const milliseconds = Math.floor((time % 1000) / 10);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);

    return `${padZero(minutes)}:${padZero(seconds)}.${padZero(milliseconds)}`;
  };

  const padZero = (num) => (num < 10 ? `0${num}` : num);

  const startStopwatch = () => setIsRunning(true);
  const stopStopwatch = () => {
    clearInterval(intervalId);
    setIsRunning(false);
  };
  const resetStopwatch = () => {
    clearInterval(intervalId);
    setIsRunning(false);
    setTime(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{formatTime(time)}</Text>
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
