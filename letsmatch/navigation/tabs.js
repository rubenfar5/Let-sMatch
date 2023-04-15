import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const tabs = () => {} 
    return (
        <Tab.Navigator
            tabBarOptions={{
                showlabel: false,
                style: {
                    position: 'absolute',
                    bottom:25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 20,
                    height:90 }
            }}>

            </Tab.Navigator>

        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
  }

const style = StyleSheet.create({
    shadow:{

    }
});

export default tabs