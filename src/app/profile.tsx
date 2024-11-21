
import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

// create a component
export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>Pagina Profile</Text>
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
