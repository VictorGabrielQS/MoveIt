import { View, Text, StyleSheet } from 'react-native';

// create a component
export default function Settings() {
  return (
    <View style={styles.container}>
      <Text>Configurações</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

