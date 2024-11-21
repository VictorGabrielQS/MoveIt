import { Link, router } from 'expo-router';
import { View, Text, StyleSheet, Button } from 'react-native';

const App = () => {

  //Nome do Usuario
  let nome = "Victor"

  function handleNavigate( ) {
    {/* @ts-ignore */}
    router.replace('dashboard')
  }
  return (
    <View style={styles.container}>
     <Text style={styles.greeting}>Seja Bem vindo {nome}</Text>

     <View style={styles.container_2}>
     <Text style ={styles.title}>Pagina Home</Text>
      <Link href={"/profile"}>Ir para Profile Page</Link>
      {/* @ts-ignore */}
      <Link href={"/user/12345"}>Ir para User Page</Link>
    
     <Button title='Navegar para o Painel' onPress={handleNavigate} />
     </View>
  
     
    </View>
  );
};

const styles = StyleSheet.create({
  container :{
    flex: 1,
  },
  greeting : {

    padding:12,
    backgroundColor : "#fff",
    fontWeight: '500'
  },

  container_2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  title : {
    fontWeight: 'bold',
    marginBottom: 20,
  },

  button : {
    marginTop: 20,
  }

});

export default App;