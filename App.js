import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Timer from "./components/Timer";
const colors = ["#00ffcd", "#dc758f", "#2274a5"];

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");
  const [isActive, setIsActive] = useState(false);

  function handleStartStop() {
    setIsActive(!isActive);
  }

  useEffect( () => {
    let interval = null;

    if (isActive) {
      interval = setInterval( () => {
        setTime(time-1);
      }, 1000)// set interval es una funcion de javascript que se ejectura cada el tiempo que le digamos, 1000 es 1 seg
    } else {
      clearInterval(interval); //funcion de javascript que limpia el interval
    }

    if (time === 0) {
      setIsActive(false);
      setIsWorking((prev) => !prev)
      setTime(isWorking ? 300 : 1500)
    }

    return () => clearInterval(interval)
  }, [isActive, time])

  return (
    <View style={[styles.container, { backgroundColor: colors[currentTime] }]}>
      <Text style={styles.text}>Pomodoro</Text>
      <Header
        currentTime={currentTime}
        setTime={setTime}
        setCurrentTime={setCurrentTime}
      />
      <Timer time={time} />
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.button} onPress={handleStartStop}>
        <Text style={{ color: "white", fontWeight: "bold" }}>
          {isActive ? "STOP" : "START"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 60,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#333333",
    padding: 15,
    marginTop: 15,
    borderRadius: 15,
    alignItems: "center",
  },
});
