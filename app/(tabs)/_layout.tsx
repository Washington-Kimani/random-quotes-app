import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#ffd33d',
                headerStyle: {
                    backgroundColor: '#25292e',
                },
                headerShadowVisible: false,
                headerTintColor: '#fff',
                tabBarStyle: {
                    backgroundColor: '#25292e',
                    height: '6%',
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                },
                tabBarItemStyle: {
                    flexDirection: 'column', // Align icon and label in a column
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'home-sharp' : 'home-outline'}
                            color={color}
                            size={20}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="create"
                options={{
                    title: 'Create',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'add-circle' : 'add-circle-outline'}
                            color={color}
                            size={20}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: 'About',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'information-circle' : 'information-circle-outline'}
                            color={color}
                            size={20}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
