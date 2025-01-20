import { StyleSheet, Text, TouchableOpacity } from "react-native";
import {Audio} from "expo-av"
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";

export default function StartStop( {isActive, setIsActive}) {
     const playSound = async ()=>{
        const {sound}= await Audio.Sound.createAsync(
            require("@/assets/Sounds/bambu_1.mp3")
        )
        await sound.playAsync();
    }
    const handleButton = ()=>{
        playSound()
        setIsActive(!isActive)
    }
   

    return (

        <TouchableOpacity style={styles.button} onPress={handleButton}>
            <Text style={styles.textButton}>
                {isActive? "Stop" : "Start"}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textButton :{
        color: "#dbd0d0",
        fontWeight: "bold"
    },
    button:{
        backgroundColor:"#333333",
        padding:15,
        borderRadius: 15,
        alignItems:"center",
        width: "40%"
    }
})