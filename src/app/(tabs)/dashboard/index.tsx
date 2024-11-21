import { Link, router } from 'expo-router';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text>Pagina Painel</Text>
      <Button title='Ir para a Home'  onPress={() => router.replace("/")}/>
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

