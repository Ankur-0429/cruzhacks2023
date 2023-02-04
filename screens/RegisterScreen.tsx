import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Input, Stack, Button, WarningOutlineIcon, InputGroup, InputLeftAddon, InputRightAddon, Icon } from 'native-base';
import React from 'react';
import { StyleSheet, Image, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';
import AppleSignInButton from '../components/AppleSignInButton';
import GoogleSignInButton from '../components/GoogleSignInButton';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';


const Example = () => {
    const [show, setShow] = React.useState(false);
    return <Stack space={4} w="95%" maxW="300px" mx="auto">
        <View style={{height: 0, width: 0, opacity: 0}}>
            <Input variant="rounded" placeholder="whatever" />
        </View>

        <Stack space={4} w="100%" alignItems="center">
            <Input variant="rounded" w={{
            md: "25%"
            }} h={10} InputLeftElement={<Icon as={<MaterialIcons name="email" />} size={5} ml="2" color="muted.400" />} placeholder="Email" />
            <Input variant="rounded" w={{
            md: "25%"
            }} h={10} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
                    <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                </Pressable>} placeholder="Password" />
              
                <Input variant="rounded" w={{
            md: "25%"
            }} h={10} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
                    <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
            </Pressable>} placeholder="Confirm Password" />
        </Stack>        
      </Stack>;
  };

const LoginScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <KeyboardAvoidingScrollView contentContainerStyle={styles.container}>    
                <Text style={styles.title}>Create Account</Text>
                {/* <Image source={require("../assets/images/slugIcon.jpeg")} style={{width: 200, height: 200, borderRadius: 100, marginVertical: 10}} /> */}
                <Text style={styles.subtitle}>Welcome! Please sign up to continue.</Text>
                <Example />
                

                <Button style={{backgroundColor: Colors.constants.secondary, marginTop: 15, width: 90, borderRadius: 10, marginRight: 10, marginLeft: 'auto'}} onPress={() => console.log("hello world")}>Sign Up</Button>

                <View style={{marginTop: 30}}>
                    <GoogleSignInButton navigation={navigation} />
                    <AppleSignInButton navigation={navigation} />
                </View>

            </KeyboardAvoidingScrollView>
            <View style={{marginTop: 'auto', marginBottom: 50, flexDirection: 'row'}}>
                <Text>Already have an account?</Text>
                <TouchableOpacity onPress={() => {navigation.navigate("Login")}}>
                    <Text style={{color: Colors.constants.secondary, marginLeft: 5}}>Log In</Text>
                </TouchableOpacity>
            </View>

    
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20
  },
  subtitle: {
    fontSize: 15,
    marginBottom: 30,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    height: 40,
    //margin: 12,
    borderWidth: 1,
    //padding: 10,
    width: 200,
  }
});

export default LoginScreen;