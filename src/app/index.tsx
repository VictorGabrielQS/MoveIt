//Pagina Home

import { Link, router } from 'expo-router';
import { View, Text, StyleSheet, Button } from 'react-native';
import Avatar from './components/Avatar';

const App = () => {

  //Nome do Usuario
  let nome = "Victor"

  function handleNavigate( ) {
    {/* @ts-ignore */}
    router.replace('dashboard')
  }
  
  return (
    <View style={styles.container}>
        <Avatar
        name="Null"
        greeting="Bem vindo!"
        imageUrl="https://nanostack.io/_next/image?url=https%3A%2F%2Fnanostack.s3.ap-south-1.amazonaws.com%2F1708453575985Group%20460.png&w=640&q=75"
        size = {30}
        style={{
           container: { backgroundColor: '#e0f7fa', padding: 15 },
          avatar: { borderColor: '#00796b', borderWidth: 1 },
          greeting: { color: '#00796b' , fontSize: 12 },
          name: { color: '#004d40', fontWeight: 'bold' },
        }}

      />
     
    </View>
  );
};

const styles = StyleSheet.create({
  container :{
    flex: 1,
    backgroundColor : "#D6DFE2"
  },
});

export default App;