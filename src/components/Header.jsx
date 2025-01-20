import { TimerMode } from "@/app";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";




export default function Header({ setTime, currentTime, setCurrentTime }) {
  
const options = ["Pomodoro","Short Break","Long Break"]
  const handlePress = (index)=>{
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15
    setCurrentTime(index)
    setTime(newTime*60)
  }
  return (
    <View style={styles.headers}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          onPress={()=>handlePress(index)}
          style={[
            styles.itemStyle,currentTime!= index &&{borderColor: "transparent"}
          ]}
        >
          <Text style={{fontWeight:"bold"}}>{option}</Text>
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
    marginVertical:20,
    borderRadius: 10,
    borderColor: "#eaba7f",
    alignItems: "center"
  },
});
