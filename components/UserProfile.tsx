import { View, Text } from "./Themed"
import { StyleSheet, Image } from "react-native";
import FollowButton from "./FollowButton";
import Colors from "../constants/Colors";
import React from "react";
import { Rating } from "react-native-ratings";

interface UserProfileProps {
  profileUri: string;
  name: string;
  bio: string;
  collegeAffiliation: string;
  slugPoints: number;
  wantsSlugPoints: boolean;
  uid: string;
}

const UserProfile = ({profileUri, name, bio, collegeAffiliation, slugPoints, wantsSlugPoints, uid}: UserProfileProps) => {
    const boxColor = Colors.light.box;
    return (
      <View style={{marginBottom: 20, borderRadius: 20, elevation: 5, shadowColor: '#000',
      shadowOffset: { width: 2, height: 10 },
      shadowOpacity: 0.3}}>
        <View style={styles.container}>
            <View style={{backgroundColor: boxColor, borderRadius: 10, width: 350, alignSelf: 'center', paddingVertical: 10}}>
              <View style={{flexDirection: 'row', backgroundColor: boxColor, marginBottom: 10}}>
                <Image source={{uri: profileUri}} style={{width: 50, height: 50, borderRadius: 25, overflow: 'hidden', marginHorizontal: 10}} />
                <View style={{backgroundColor: boxColor, marginBottom: 10}}>
                  <Text style={{fontWeight: '500', fontSize: 17}}>{name}</Text>
                  <View style={{backgroundColor: 'transparent', flexDirection: 'row'}}>
                    <Rating
                      showRating={false}
                      ratingColor="#f59e0b"
                      style={{backgroundColor: "#000", width: 65, marginTop: 5}}
                      imageSize={14}
                      onFinishRating={() => {}}
                    />
                    <Text style={{color: '#3E3E3EA1', marginLeft: 8, fontSize: 10.5, marginTop: 6}}>2.5 Rating / 943 Reviews</Text>
                  </View>
                </View>
              </View>
              <Text style={styles.paragraph}>
                {bio}
              </Text>
              <Text style={styles.paragraph}>{slugPoints} slug points, {collegeAffiliation}</Text>
              <View style={{backgroundColor: 'transparent', marginHorizontal: 20, marginTop: 10}}>
                <FollowButton uid={uid} wantsSlugPoints={wantsSlugPoints} />
              </View>
            </View>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    paragraph: {
      fontSize: 12,
      paddingHorizontal: 20,
    },
  });
  

export default UserProfile;