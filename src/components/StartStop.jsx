import { StyleSheet, Text, TouchableOpacity } from "react-native";


export default function StartStop( {isActive, setIsActive}) {
    const handleButton = ()=>{
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