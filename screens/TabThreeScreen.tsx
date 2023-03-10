
import { View, Text } from '../components/Themed';
import { Pressable, StyleSheet } from "react-native";

import {Accessory, Avatar } from 'react-native-elements';
import { useAtom } from 'jotai';
import { currentUser } from '../constants/Atoms';
import {Button, Icon, Input, Stack} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import AddPostButton from '../components/AddPostButton';

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

export default function TabThreeScreen() {

  const [currUser] = useAtom(currentUser);

  return (
    <View style={styles.container}>
        <AddPostButton />

        <Button style={{width: 90, marginLeft: 'auto', marginBottom: 50, marginRight: 20, borderRadius: 10, backgroundColor: '#dcb650'}} onPress={async () => {}}>
            <Text style={{fontSize: 12, color: 'white'}}>
                Save
            </Text>
        </Button>
    
      
      <Text style={{width: 300, color: '#3E3E3E', lineHeight: 24, marginBottom: 30, fontWeight: "400", alignSelf: 'center', textAlign: 'center'}}>Add a photo, username, and bio let people know who you are.</Text>
      {/* @ts-ignore */}
      <Avatar
        size="xlarge"
        rounded
        containerStyle={{alignSelf: 'center'}}
        source={{
          uri:
            currUser?.image,
        }}
        >
        <Accessory size={35} />
      </Avatar>
      <Example/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 120,
    flex: 1,
  },
  title: {
    fontSize: 15,
    width: 200,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    height: 40,
    width: 250,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 0.5,
    padding: 10,
  },
});
