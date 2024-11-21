import { Stack , Tabs} from 'expo-router';

export default function Layout() {
  return (
    <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: "#fff"
      },
      headerTintColor: "#000"
    }}
    >
      <Stack.Screen name="index" options={{ title : 'Home' , headerShown : false }} />
      <Stack.Screen name="profile" options={{ title : 'Profile' }} />
      <Stack.Screen name="user/[id]" options={{ title : 'Usuario' }} />
      <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
    </Stack>
  );
}
