import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [mostrar, setMostrar] = useState(false);
  return (
    <View style={styles.container}>
      {mostrar && (
        <View>
          <Text style={styles.bemVindo}>Bem Vindo!!!</Text>
          <Text>hello word</Text>
          <StatusBar style="auto" />
        </View>
      )}
      <button onClick={()=> setMostrar(!mostrar)}>Mostrar</button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bemVindo: {
    color: "red",
    fontSize: "30px",
  },
});
