import  FontAwesome  from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout(){
    return(
        <Tabs screenOptions={{ tabBarActiveTintColor:'blue' }}>
            <Tabs.Screen
                name="home"
                options={{ 
                    tabBarIcon:({color})=> <FontAwesome size={28} name="home" color={color}/>
                 }}
            />
            <Tabs.Screen name="user" 
                options={{ 
                    tabBarIcon:({color})=> <FontAwesome size={28} name="search" color={color}/>
                 }}
            />
        </Tabs>
    )
}