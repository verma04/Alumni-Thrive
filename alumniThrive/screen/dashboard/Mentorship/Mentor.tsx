import {
  FlatList,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import axiosInstance from '../../../axios/post/axiosInstance';
import Loading from './Loading';
import Item from './Item';

const Mentor = () => {
  const [loading, setLoading] = React.useState(false);

  const [data, setData] = React.useState([]);

  const callData = async () => {
    try {
      await setLoading(true);
      const response = await axiosInstance.get('/api/allMentorMentee');
      await setLoading(false);

      setData(response.data.data.Mentor);
    } catch (error) {
      console.log(error);
      await setLoading(false);
    }
  };

  React.useEffect(() => {
    callData();
  }, []);

  return (
    <ScrollView style={{flex: 1}}>
      {loading ? (
        <Loading />
      ) : (
        <View
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: '100%',
            marginBottom: 100,
            marginTop: 10,
          }}>
          <FlatList
            initialNumToRender={5}
            data={data}
            renderItem={({item}) => <Item data={item} />}
            keyExtractor={item => item.id}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default Mentor;

const styles = StyleSheet.create({});
