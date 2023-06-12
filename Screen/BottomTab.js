import {View, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Home from './Home';
import Profile from './Profile';
import Playlist from './PlayList';
import Search from './Search';
 
const Tab = createBottomTabNavigator();

 const BottomTab = () =>{
  return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#ffc810',
          tabBarInactiveTintColor: '#fff',
          tabBarShowLabel: false,
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarBackground: () => (
            <View style={{backgroundColor: 'black', height: 50}} />
          ),
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={28} />
            ),
          }}
        />
        <Tab.Screen
          name="PlayList"
          component={Playlist}
          options={{
            tabBarLabel: 'Playlist',
            tabBarIcon: ({color, size}) => (
              <SimpleLineIcons name="playlist" color={color} size={28} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: 'Search',

            tabBarIcon: ({color, size}) => (
              <FontAwesome name="search" color={color} size={28} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <View>
                <Image
                  style={style.profile}
                  source={require('../Image/profile1.jpg')}
                />
              </View>
            ),
          }}
        />
        
      </Tab.Navigator>
   
  );
}
export default BottomTab;
const style = StyleSheet.create({
  profile: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
});
