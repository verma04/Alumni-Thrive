import React from 'react';
import {Alert, Share, View, Button, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ShareSvg from '../../../svg/ShareSvg';

const TellaFriend = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Unleash Alumni Engagement & Grow https://alumnithrive.com/',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
  return (
    <TouchableOpacity onPress={onShare} style={{paddingVertical: 15}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <ShareSvg />
        <Text
          style={{
            fontSize: 15,

            marginLeft: 5,
          }}>
          Tell a Friend
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TellaFriend;
