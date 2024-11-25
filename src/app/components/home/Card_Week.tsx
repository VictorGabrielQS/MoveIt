import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function CardWeek({ day, concluido }) {
  return (
    <View style={[styles.card, concluido ? styles.concluido : styles.naoConcluido]}>
      <Text style={[styles.dayText, concluido ? styles.textConcluido : styles.textNaoConcluido]}>
        {day}
      </Text>
      <FontAwesome
        name="check-circle"
        size={20}
        color={concluido ? "#18F262" : "#E9E9E9"}
        style={styles.icon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  
  card: {
    width: 40,
    height: 75,
    borderRadius: 25,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    marginHorizontal: 5,
  },

  concluido: {
    backgroundColor: "black",
  },

  naoConcluido: {
    backgroundColor: "#f0f0f0",
  },

  dayText: {
    fontSize: 12,
    fontWeight: "400",
  },

  textConcluido: {
    color: "white",
  },

  textNaoConcluido: {
    color: "gray",
  },

  icon: {
    marginBottom: 7,
  },

});
