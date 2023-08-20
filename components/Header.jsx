import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const options = ["Pomodoro", "Short Break", "Long Break"];

export default function Header({ setTime, setCurrentTime, currentTime }) {
  function handlePress(index) {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index);
    setTime(newTime * 60);
  }

  return (
    <View style={styles.header}>
      {options.map((el, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(index)}
          style={[
            styles.itemStyle,
            currentTime !== index && { borderColor: "transparent" },
          ]}
        >
          <Text style={{fontWeight: "bold"}}>{el}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
  },
  itemStyle: {
    width: "33%",
    padding: 10,
    fontSize: 10,
    color: "black",
    borderWidth: 3,
    borderColor: "white",
    alignItems: "center",
    marginVertical: 20,
    borderRadius: 10,

  },
});
