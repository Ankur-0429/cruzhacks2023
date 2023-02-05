
import { View, Text } from '../components/Themed';
import { Pressable, StyleSheet } from "react-native";

import {Avatar } from 'react-native-elements';
import { useAtom } from 'jotai';
import { currentUser } from '../constants/Atoms';
import {Button, Icon, Input, Stack} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';

const Example = () => {
  const [show, setShow] = React.useState(false);
  return <Stack space={4} w="95%" maxW="300px" mx="auto">
      <View style={{height: 0, width: 0, opacity: 0}}>
          <Input variant="rounded" placeholder="whatever" />
      </View>

      <Stack space={4} w="100%" alignItems="center">
          <Input variant="rounded" w={{
          md: "25%"
          }} h={10} placeholder="Enter your Slug Points Amount" />
          <Input variant="rounded" w={{
          md: "25%"
          }} h={10} type={show ? "text" : "password"} size={5} mr="2" color="muted.400" placeholder="Choose a Dining Hall" />
      </Stack>        
    </Stack>;
};

export default function CreatePostScreen() {

  const [currUser] = useAtom(currentUser);

  return (
    <View style={styles.container}>

        <Button style={{width: 90, marginLeft: 'auto', marginBottom: 50, marginRight: 20, borderRadius: 10, backgroundColor: '#dcb650', opacity: 0.7}} onPress={async () => {}}>
            <Text style={{fontSize: 12, color: 'white'}}>
                Post
            </Text>
        </Button>
    
      
      {/* @ts-ignore */}
      <Avatar
        size="medium"
        rounded
        containerStyle={{marginLeft: 60}}
        source={{
          uri:
            currUser?.image,
        }}
        >
      </Avatar>
      <Example/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
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
