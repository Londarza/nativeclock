import { useState } from "react";
import { Button, StatusBar, StyleSheet, Text, View } from "react-native";

export default function Short() {
  enum TimerMode {
    POMO = "POMO",
    SHORT = "SHORT",
    BREAK = "BREAK",
  }
  

  const [hidden, setHidden] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(25*60);
  const [currentTime, setCurrentTime] = useState<TimerMode>(TimerMode.POMO);


  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content" // Cambia el estilo del texto
        backgroundColor="#1e1e1e" // Cambia el fondo (solo Android)
        translucent={false} // Cambia la translúcida
        hidden={hidden} // Muestra u oculta la barra de estado
      />
      <Text style={styles.title}>Pomodoro App</Text>
      <Button
        title={hidden ? "Mostrar Barra de Estado" : "Ocultar Barra de Estado"}
        onPress={() => setHidden(!hidden)}
      />
    </View>
  );
}
const colors = {
    focus: "#A9D6E5",
    rest: "#B8EBD0",
    settings: "#D8B4E2",
  };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282828",
    //justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  tabFocus: {
    flex: 1,
    backgroundColor: colors.focus,
    justifyContent: "center",
    alignItems: "center",
  },
  tabRest: {
    flex: 1,
    backgroundColor: colors.rest,
    justifyContent: "center",
    alignItems: "center",
  },
  tabSettings: {
    flex: 1,
    backgroundColor: colors.settings,
    justifyContent: "center",
    alignItems: "center",
  }
});
