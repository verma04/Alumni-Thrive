import * as React from 'react';
import {Dimensions, ImageBackground, Pressable, Text, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Dashboard from './Dashboard';
import axiosInstance from '../../../axios/post/axiosInstance';
import Loading from './Loading';
import {useNavigation} from '@react-navigation/native';

function CarouselDashboard() {
  const navigation = useNavigation();
  const width = Dimensions.get('window').width;
  const [loading, setLoading] = React.useState(false);

  const [data, setData] = React.useState([]);

  const callData = async () => {
    try {
      await setLoading(true);
      const response = await axiosInstance.get('/api/all-event');
      await setLoading(false);

      setData(response.data.data.upcoming);
    } catch (error) {
      console.log(error);
      await setLoading(false);
    }
  };
  React.useEffect(() => {
    callData();
  }, []);

  return (
    <View style={{flex: 1}}>
      {loading ? (
        <Loading />
      ) : (
        <Carousel
          loop
          width={width}
          height={230}
          autoPlay={true}
          data={data}
          scrollAnimationDuration={5000}
          //   onSnapToItem={index => console.log('current index:', index)}
          renderItem={({index}) => (
            <Pressable
              style={{
                flex: 1,

                justifyContent: 'center',
              }}
              onPress={() => navigation.navigate('Events')}>
              <ImageBackground
                source={{
                  uri: `https://api.alumnithrive.com/public/${data[index].eventImage}`,
                }}
                style={{
                  flex: 1,

                  justifyContent: 'center',
                }}>
                <Text style={{textAlign: 'center', fontSize: 30}}></Text>
              </ImageBackground>
            </Pressable>
          )}
        />
      )}
    </View>
  );
}

export default CarouselDashboard;
