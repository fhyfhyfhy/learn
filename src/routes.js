// In App.js in a new project

import * as React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SvgUri from 'react-native-svg-uri';
import Icon from './icons';

import Global from './utils/global';
import Login from './pages/login';
import Input from './pages/login/input';
import My from './pages/my';
import Learn from './pages/learn';
import Home from './pages/home';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      backBehavior="none"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          const data = Icon[route.name];
          return (
            <SvgUri svgXmlData={data} width={size} height={size} fill={color} />
          );
        },
      })}
      tabBarOptions={{activeTintColor: Global.blue}}>
      <Tab.Screen name="Home" component={Home} options={{title: '首页'}} />
      <Tab.Screen name="Learn" component={Learn} options={{title: '学习'}} />
      <Tab.Screen name="My" component={My} options={{title: '我的'}} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tabs" component={HomeTabs} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Input" component={Input} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
