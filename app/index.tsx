import { StyleSheet, Text, View, StatusBar, Button } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "@/src/components/Header";
import Timer from "@/src/components/Timer"
import StartStop from "@/src/components/StartStop"
import {Audio} from "expo-av"
const colors = [
  "#A9D6E5",
   "#B8EBD0",
   "#D8B4E2",];

   type TimerMode = "POMO" | "SHORT" | "BREAK";

export default function Index() {
  const [hidden, setHidden] = useState(false);
  const [isWorking,setIsWorking] = useState(false)
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState<TimerMode>("POMO");
  const [isActive,setIsActive] = useState(false)

  const playSound = async ()=>{
    const {sound}= await Audio.Sound.createAsync(
        require("@/assets/Sounds/succesRing.mp3")
    )
    await sound.playAsync();
}

  useEffect(()=>{
    
    let interval: NodeJS.Timeout | undefined;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            playSound()
            clearInterval(interval); // Detener el intervalo cuando llegue a 0
            handleTimerEnd(); // Manejar el fin del temporizador
            return 0;
          }
          return prevTime - 1; // Reducir el tiempo en 1 segundo
        });
      }, 1);
    }else{
      // vaciar el timer
      clearInterval(interval)
    }

    
    return ()=>clearInterval(interval)
  },[isActive])

  const handleTimerEnd = () => {
    setIsActive(false); // Pausar el temporizador
    setIsWorking((prev) => !prev); // Cambiar entre trabajo y descanso

    // Reiniciar el tiempo según el modo actual
    if (currentTime === 0) {
      setTime(5 * 60); // Pasar a Short Break
      setCurrentTime(1);
    } else if (currentTime === 1) {
      setTime(25 * 60); // Pasar a Pomodoro
      setCurrentTime(0);
    } else {
      setTime(25 * 60); // Volver a Pomodoro
      setCurrentTime(0);
    }
  };

  return (
    <View
      style={[
        styles.container, {backgroundColor:colors[0 | currentTime]}
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
    backgroundColor: "#A9D6E5",
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
