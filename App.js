import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, Platform } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [isWorking, setIsWorking] = useState(false)
  const [time, setTime] = useState(25*60)
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pomodoro</Text>
      <Button title='mi boton'>hola</Button>
      <StatusBar style="auto" />
    </View>
  );
}

const colors = ["D8D0C1","CBB8A9", "B3B492"]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: "bold"
  }
});
