import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="presence"
        options={{
          title: 'Attendance History',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="tasks" color={color} />,
        }}
      />
       {/* <Tabs.Screen
        name="user"
        options={{
          title: 'Users',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
        }}
      /> */}
    </Tabs>
  );
}
