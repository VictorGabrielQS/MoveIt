import { Link, router } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import Card from './components/home/Card';
import CardWeek from './components/home/Card_Week';



const App = () => {
  
  // Nome do Usuario
  let nome = "Victor Gabriel";
  
  let days = [
    { day: "Seg", concluido: true },
    { day: "Ter", concluido: true },
    { day: "Qua", concluido: true },
    { day: "Qui", concluido: false },
    { day: "Sex", concluido: true },
    { day: "Sab", concluido: false },
    { day: "Dom", concluido: false },
  ];

  let hoursTotal = 0

  const daysCompleted = days.filter(day => day.concluido).length;


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


    //Card Week Days 

      <Card>
      <View style={styles.headerContainer}>
      <Text style={styles.title_HeaderContainer}> Essa Semana </Text>
        <Text> {daysCompleted} /7 Dias </Text>
      </View>

      <View style={styles.container_Week}>
      
      {days.map((item, index) => (
        <CardWeek key={index} day={item.day} concluido={item.concluido} />
      ))}

      </View>
      

      </Card>


      <Card>
      <View style={styles.headerContainer}>
      <Text style={styles.title_HeaderContainer}> Horas </Text>
      <Text> {hoursTotal} Horas</Text>
      </View>

      </Card>

      


       <View>
       </View>
      <View>
      </View>
      

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

  headerContainer: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   paddingBottom: 30
    
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

  container_Week: {
    flexDirection: 'row',
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
  
  title_HeaderContainer: {
    fontSize: 18,
    fontWeight: '500',
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
