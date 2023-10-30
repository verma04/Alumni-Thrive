import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import axiosInstance from '../../../axios/post/axiosInstance';

import {useNavigation} from '@react-navigation/native';
const Club = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState(false);

  const [data, setData] = React.useState([]);

  const callData = async () => {
    try {
      await setLoading(true);
      const response = await axiosInstance.get('/api/all-clubType');
      await setLoading(false);
      console.log(response.data.data);
      setData(response.data.data);
    } catch (error) {
      console.log(error);
      await setLoading(false);
    }
  };

  React.useEffect(() => {
    callData();
  }, []);

  const [bookmark, setBookMark] = React.useState([]);

  return (
    <>
      <View
        style={{
          width: '90%',
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            fontFamily: 'Poppins',
            fontSize: 17,
            color: '#013DC4',
            fontWeight: '600',
          }}>
          Community
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Community')}>
          <Text style={{fontFamily: 'Poppins'}}> See All </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={true}
        style={{flex: 1, marginBottom: 50, marginTop: 10, width: '100%'}}>
        {loading ? null : (
          <>
            {data.map((set, index) => (
              <TouchableOpacity
                style={{marginBottom: 50}}
                onPress={() => navigation.navigate('Community')}>
                <Image
                  source={{
                    uri: `https://api.alumnithrive.com/public/${set.club_type_image}`,
                  }}
                  style={{
                    height: 100,
                    width: 100,
                    margin: 10,

                    borderRadius: 5,
                  }}
                />
                <Text style={{marginLeft: 10, fontFamily: 'Poppins'}}>
                  {set.type}
                </Text>
              </TouchableOpacity>
            ))}

            {/* <View style={{width: windowWidth}}>
            {isRefreshing ? <ActivityIndicator /> : null}
          </View> */}
          </>
        )}
      </ScrollView>
    </>
  );
};

export default Club;

const styles = StyleSheet.create({});
