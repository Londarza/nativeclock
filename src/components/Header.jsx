import { TimerMode } from "@/app";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";


const options = [
    { label: "Pomodoro", mode: TimerMode.POMO, time: 25 },
    { label: "Short Break", mode: TimerMode.SHORT, time: 5 },
    { label: "Long Break", mode: TimerMode.BREAK, time: 15 },
  ];

export default function Header({ setTime, currentTime, setCurrentTime }) {
  const handlePress = (option) => {
    console.log("Selected Mode:", option.mode);
    setCurrentTime(option.mode); // Cambiar el modo actual
    setTime(option.time * 60); // Actualizar el tiempo en segundos
  };

  
  return (
    <View style={styles.headers}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(option)}
          style={[
            styles.itemStyle,
            currentTime !== option.mode && { borderColor: "transparent" },
          ]}
        >
          <Text>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  headers: {
    flexDirection: "row",
  },
  itemStyle: {
    borderWidth: 3,
    padding: 5,
    width: "33%",
    margin: 3,
  },
});
