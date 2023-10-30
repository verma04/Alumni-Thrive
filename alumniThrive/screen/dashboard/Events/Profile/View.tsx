import {
  ActivityIndicator,
  FlatList,
  Pressable,
  RefreshControl,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  SafeAreaView,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import BookMarkSvg from '../../../../svg/BookMarkSvg';
import axiosInstance from '../../../../axios/post/axiosInstance';

import {windowWidth} from '../../../hooks/dimension';

import {Button} from '@rneui/themed';
import moment from 'moment';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CalenderSvg from '../../../../svg/CalenderSvg';
import {LocalSvg} from 'react-native-svg';
import LocationSvg from '../../../../svg/LocationSvg';
import RenderHTML from 'react-native-render-html';
import Loading from '../Loading';
const ViewEvents = ({route}: any) => {
  const {id} = route.params;
  const [loading, setLoading] = React.useState(false);

  const [data, setData] = React.useState({});

  const callData = async () => {
    try {
      await setLoading(true);
      const response = await axiosInstance.get(`/api/single-event/${id}`);
      await setLoading(false);
      setData(response.data.data);
    } catch (error) {
      console.log(error);
      await setLoading(false);
    }
  };

  React.useEffect(() => {
    callData();
    console.log(data);
  }, []);

  const insets = useSafeAreaInsets();
  const source = {
    html: `
<p style='text-align:center;'>
  Hello World!
</p>`,
  };
  const {width} = useWindowDimensions();
  return (
    <>
      <ScrollView
        horizontal={true}
        style={{
          flex: 1,
          paddingTop: insets.top,

          marginBottom: 50,
          position: 'relative',
        }}>
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
          }}></View>
        {loading ? (
          <Loading />
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
                  width: '100%',
                  height: 200,
                  objectFit: 'cover',
                }}
                source={{
                  uri: `https://api.alumnithrive.com/public/${data?.eventImage}`,
                }}
              />

              <Text
                style={{
                  paddingTop: 20,
                  fontFamily: 'Poppins',
                  fontSize: 17,
                  textAlign: 'left',
                  width: '90%',
                }}>
                {data.title}
              </Text>
              <View style={{width: '90%', marginTop: 10}}>
                <View
                  style={{
                    display: 'flex',

                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <CalenderSvg />
                  <Text
                    style={{padding: 5, fontFamily: 'Poppins', fontSize: 13}}>
                    {data.date}
                  </Text>
                </View>

                <View
                  style={{
                    display: 'flex',

                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <LocationSvg />
                  <Text
                    style={{padding: 5, fontFamily: 'Poppins', fontSize: 13}}>
                    {data.venue}
                  </Text>
                </View>
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
              <View
                style={{
                  width: width * 0.9,
                  backgroundColor: 'red',
                }}>
                {/* <RenderHTML
                  contentWidth={width / 2}
                  source={data?.description}
                /> */}
              </View>
            </View>
          </>
        )}
      </ScrollView>
    </>
  );
};

export default ViewEvents;

const styles = StyleSheet.create({});
