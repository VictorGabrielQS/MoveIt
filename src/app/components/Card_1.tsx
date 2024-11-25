import { View, StyleSheet } from "react-native";
import React from "react";

type CardProps = {
  children: React.ReactNode; // Define o tipo do children
};

export default function Card_1({ children }: CardProps) {
  return <View style={styles.card}>
    {children}
    </View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, 
    borderWidth: 2,
    borderColor: "#ddd",
    color: "#000",
  },
});
