import { Link, router } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import Card_1 from './components/Card_1';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const App = () => {
  // Nome do Usuario
  let nome = "Victor Gabriel";
  let lastDays = 4
  const dayWeek = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"][new Date().getDay()];

  function handleNavigate() {
    {/* @ts-ignore */}
    router.replace('dashboard');
  }

  function notifications() {
    alert("Notificações ⚙️")
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Bem Vindo De Volta</Text>
          <Text style={styles.title_2}>{nome}</Text>
        </View>
        
        <TouchableOpacity onPress={notifications} style={styles.notification}>
          <Icon name="notifications-outline" size={24} color="#000"/>
        </TouchableOpacity>
      </View>

      <Card_1>

      <View style={styles.headerContainer}>
      <Text> Essa Semana </Text>
        <Text> {lastDays}/7 Dias </Text>
      </View>

      <View>


      </View>

      </Card_1>

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor:"#fff",
    color:"#000"
    
  },
  


  headerContainer : {
   flexDirection: 'row',
    justifyContent: 'space-between',
    
  },

  weekContainer: {
    alignContent: 'center',
    textAlign: 'center',
    backgroundColor: '#000',
    width: 50,
    height: 70,
    borderWidth: 1,
    borderRadius: 5
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: 20,
    marginBottom: 10,
    gap:10
  },

  title: {
    fontSize: 12,
    fontWeight: '500',
    color: "#ADA4A5",
    paddingBottom: 3
  },

  title_2: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  weekText:{
    color:"#ffff"
  },




  notification: {
    backgroundColor: "#F7F8F8",
    borderRadius: 5,
    padding: 7,
    marginRight: 15
  },

  icon: {
    alignSelf: "center", 
  }

});

export default App;
