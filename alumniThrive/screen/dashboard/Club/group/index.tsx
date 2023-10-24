import {
  ActivityIndicator,
  FlatList,
  Pressable,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import BookMarkSvg from '../../../../svg/BookMarkSvg';
import axiosInstance from '../../../../axios/post/axiosInstance';
import Loaidng from '../Loaidng';
import Item from './Item';
import {windowWidth} from '../../../hooks/dimension';

const Category = () => {
  const [loading, setLoading] = React.useState(false);

  const [data, setData] = React.useState([]);

  const callData = async () => {
    try {
      await setLoading(true);
      const response = await axiosInstance.get('/api/get-clubs/3');
      await setLoading(false);
      setData(response.data.data);
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
      style={{flex: 1, marginTop: 20, marginBottom: 50}}>
      {loading ? (
        <Loaidng />
      ) : (
        <>
          {/* <View style={{width: windowWidth}}>
            {isRefreshing ? <ActivityIndicator /> : null}
          </View> */}
          <FlatList
            initialNumToRender={5}
            data={data}
            renderItem={({item}) => <Item data={item} />}
            keyExtractor={item => item.id}
          />
        </>
      )}
    </ScrollView>
  );
};

export default Category;

const styles = StyleSheet.create({});
