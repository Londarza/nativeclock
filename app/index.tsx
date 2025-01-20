import { StyleSheet, Text, View, StatusBar, Button } from "react-native";
import React, { useState } from "react";
import Header from "@/src/components/Header";
import { TimerMode } from "@/src/interfaces/TimerModeEnum";


const colors = {
  focus: "#A9D6E5",
  rest: "#B8EBD0",
  settings: "#D8B4E2",
};


// Mapeo entre TimerMode y las claves de colors
const colorMapping: Record<TimerMode, keyof typeof colors> = {
  [TimerMode.POMO]: "focus",
  [TimerMode.SHORT]: "rest",
  [TimerMode.BREAK]: "settings",
};


export default function Index() {
  const [hidden, setHidden] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState<TimerMode>(TimerMode.POMO);

  console.log("Current Time:", currentTime);
console.log("Background Color:", colors[colorMapping[currentTime]]);
console.log("Mapping Key:", colorMapping[currentTime]);
console.log("Background Color:", colors[colorMapping[currentTime]]);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors[colorMapping[currentTime]] },
      ]}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="#1e1e1e"
        translucent={false}
        hidden={hidden}
      />
      <Text style={styles.title}>Pomodoro App</Text>
      <Text>Tiempo: {time}</Text>
      <Header
        setTime={setTime}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
      />
      <Button
        title={hidden ? "Mostrar Barra de Estado" : "Ocultar Barra de Estado"}
        onPress={() => setHidden(!hidden)}
      />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
});
