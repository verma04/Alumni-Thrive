import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import BookMarkSvg from '../../../svg/BookMarkSvg';
import {Image} from 'react-native';
import EventWishlist from '../../../svg/EventWishlist';
import axiosInstance from '../../../axios/post/axiosInstance';
import Loading from './Loading';
import Item from '../Events/Item';
import {useNavigation} from '@react-navigation/native';
const Events = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState(false);

  const [data, setData] = React.useState([]);

  const callData = async () => {
    try {
      await setLoading(true);
      const response = await axiosInstance.get('/api/all-event');
      await setLoading(false);

      setData(response.data.data.past);
    } catch (error) {
      console.log(error);
      await setLoading(false);
    }
  };

  React.useEffect(() => {
    callData();
  }, []);
  return (
    <>
      <View
        style={{
          marginTop: 40,
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          width: '100%',
        }}>
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
            Events
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Events')}>
            <Text style={{fontFamily: 'Poppins'}}> See All </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        horizontal={true}
        style={{flex: 1, marginBottom: 40, width: '90%'}}>
        {loading ? null : (
          <>
            <FlatList
              horizontal
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
              initialNumToRender={5}
              data={data}
              renderItem={({item}) => <Item data={item} />}
              keyExtractor={item => item.id}
            />
          </>
        )}
      </ScrollView>
    </>
  );
};

export default Events;

const styles = StyleSheet.create({});
