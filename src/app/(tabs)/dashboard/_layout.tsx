import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function Layout() {
return(
  <Tabs>

  <Tabs.Screen 
  name="index" 
  options={{
    headerShown : false, 
    title: "Painel",
  tabBarIcon: ({ focused , color ,size}) => {
    if (focused) {
      return <FontAwesome name="tags" color={color} size={size} />
    }
    return <FontAwesome name="tag" color={color} size={size} />
  }
   }} />


<Tabs.Screen 
name="settings" 
options={{
  headerShown : false, 
  title: "Settings",
  tabBarIcon: ({ focused , color ,size}) => {
    if (focused) {
      return <FontAwesome name="gears" color={color} size={size} />
    }
    return <FontAwesome name="gear" color={color} size={size} />
  }
   }} />


<Tabs.Screen 
name="results" 
options={{
  headerShown : false, 
  title: "Results",
  tabBarIcon: ({ focused , color ,size}) => {
    if (focused) {
      return <FontAwesome name="book" color={color} size={size} />
    }
    return <FontAwesome name="book" color={color} size={size} />
  }
   }} />



</Tabs>

)
}