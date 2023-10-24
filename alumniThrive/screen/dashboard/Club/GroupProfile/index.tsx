import {
  ActivityIndicator,
  FlatList,
  Pressable,
  RefreshControl,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import BookMarkSvg from '../../../../svg/BookMarkSvg';
import axiosInstance from '../../../../axios/post/axiosInstance';
import Loaidng from '../Loaidng';

import {windowWidth} from '../../../hooks/dimension';

import {Button} from '@rneui/themed';
import moment from 'moment';

const GroupProfile = () => {
  const [loading, setLoading] = React.useState(false);

  const [data, setData] = React.useState({});

  const callData = async () => {
    try {
      await setLoading(true);
      const response = await axiosInstance.get('/api/single-club/4');
      await setLoading(false);
      setData(response.data.data[0]);
    } catch (error) {
      console.log(error);
      await setLoading(false);
    }
  };

  React.useEffect(() => {
    callData();
  }, []);

  return (
    <ScrollView
      horizontal={true}
      style={{flex: 1, marginTop: 20, marginBottom: 50, position: 'relative'}}>
      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 20,
          zIndex: 100,
          width: windowWidth,
          display: 'flex',
          justifyContent: 'center',

          alignItems: 'center',
        }}>
        <Button
          style={{
            width: windowWidth / 1.1,
            padding: 10,
          }}
          title={'Join group'}
        />
      </View>
      {loading ? (
        <Loaidng />
      ) : (
        <>
          {/* <View style={{width: windowWidth}}>
            {isRefreshing ? <ActivityIndicator /> : null}
          </View> */}
          <View
            style={{
              width: windowWidth,
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: '90%',
                height: 200,
                objectFit: 'cover',
              }}
              source={{
                uri: `https://api.alumnithrive.com/public/${data?.clubImage}`,
              }}
            />

            <View style={{width: '90%', marginTop: 10}}>
              <Text style={{padding: 5, fontFamily: 'Poppins', fontSize: 17}}>
                {data?.name}
              </Text>
              <Text style={{padding: 5, fontFamily: 'Poppins', fontSize: 17}}>
                Created Date:{' '}
                {moment(data?.created_at).format('MMMM Do YYYY, h:mm:ss a')}
              </Text>
              <Text style={{padding: 5, fontFamily: 'Poppins', fontSize: 17}}>
                Group Type: {data?.type}
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'flex-start',

                width: '90%',
              }}>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={{marginLeft: 10}}>3 members</Text>
              </View>
            </View>
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default GroupProfile;

const styles = StyleSheet.create({});
