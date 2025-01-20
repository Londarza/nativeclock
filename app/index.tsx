import { StyleSheet, Text, View, StatusBar, Button } from "react-native";
import React, { useState } from "react";
import Header from "@/src/components/Header";
import Timer from "@/src/components/Timer"
import StartStop from "@/src/components/StartStop"

const colors = [
  "#A9D6E5",
   "#B8EBD0",
   "#D8B4E2",];


export default function Index() {
  const [hidden, setHidden] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO"| "SHORT" | "BREAK");
  const [isActive,setIsActive] = useState(false)


  return (
    <View
      style={[
        styles.container, {backgroundColor:colors[currentTime]}
      ]}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="#1e1e1e"
        translucent={false}
        hidden={hidden}
      />
      <Text style={styles.title}>Pomodoro App</Text>
      
      <Header
        setTime={setTime}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
      />
      <Timer time={time}/>
      
      <StartStop isActive={isActive} setIsActive={setIsActive}></StartStop>

      <Button
        title={hidden ? "Salir pantalla completa" : "Mostrar pantalla completa"}
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
