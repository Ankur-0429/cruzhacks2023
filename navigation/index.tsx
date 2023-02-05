/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { AntDesign, Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAtom } from 'jotai';
import * as React from 'react';
import { Pressable } from 'react-native';
import { Avatar } from 'react-native-elements';
import { currentUser, ifSignedIn } from '../constants/Atoms';

import Colors from '../constants/Colors';
import CreatePostScreen from '../screens/CreatePostScreen';
import CreateUserScreen from '../screens/CreateUserScreen';
import LoginScreen from '../screens/LoginScreen';
import MessageScreen from '../screens/MessageScreen';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import RegisterScreen from '../screens/RegisterScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation() {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const headerRight = () => {
  const [currUser] =  useAtom(currentUser);
  const navigation = useNavigation();
  return (
    <Avatar onPress={() => {navigation.navigate('Modal')}} rounded source={{uri: currUser?.image}} />
  )
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {

  const [checkIfSignedIn] = useAtom(ifSignedIn);

  return (
    <Stack.Navigator>
      {checkIfSignedIn
      ?
      <Stack.Group>
        <Stack.Screen name="Root" component={BottomTabNavigator} options={{headerTransparent: true, headerBlurEffect: 'systemUltraThinMaterialLight', headerTitle: '', headerBackVisible: false, headerRight: headerRight}} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
        <Stack.Screen name="message" component={MessageScreen} initialParams={{uid: ''}} options={{headerRight: () => <AntDesign name="heart" size={24} color="#dcb650" />}} />
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="Modal" options={{headerTitle: 'Edit Profile'}} component={ModalScreen} />
          <Stack.Screen name="CreatePost" component={CreatePostScreen} options={{headerTitle: 'Create Post'}} />
        </Stack.Group>
      </Stack.Group>
      :
      <Stack.Group screenOptions={{headerTransparent: true, headerBlurEffect: 'systemUltraThinMaterialLight', headerTitle: '', headerBackVisible: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="UserCreate" component={CreateUserScreen} />
      </Stack.Group>
      }
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors.light.tint,
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Tab One',
          tabBarIcon: ({ color }) => <Feather name="home" color={color} size={30} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors.light.text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="message-text-outline" size={30} color={color} />,
        }}
      />

      <BottomTab.Screen
        name="TabThree"
        component={TabThreeScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account" size={30} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
