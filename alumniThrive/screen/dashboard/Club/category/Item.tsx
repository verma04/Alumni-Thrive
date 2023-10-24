import {
  View,
  Text,
  Pressable,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import BookMarkSvg from '../../../../svg/BookMarkSvg';
import {useNavigation} from '@react-navigation/native';
import axiosInstance from '../../../../axios/post/axiosInstance';

const Item = ({data}) => {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;

  const [list, setList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const callData = async () => {
    try {
      await setLoading(true);
      const response = await axiosInstance.get(
        `https://api.alumnithrive.com/api/get-clubs/${data.id}`,
      );
      await setLoading(false);
      setList(response.data.data);
    } catch (error) {
      console.log(error);
      await setLoading(false);
    }
  };
  React.useEffect(() => {
    callData();
  }, []);

  return (
    <View
      style={{
        width: windowWidth,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '90%',
          margin: 10,
          minHeight: 100,
          borderRadius: 5,

          backgroundColor: '#FFF',

          shadowColor: 'rgba(24, 25, 28, 0.03)',
          shadowOpacity: 0.8,
          shadowRadius: 2,
          shadowOffset: {
            height: 1,
            width: 1,
          },
        }}>
        <View
          style={{
            margin: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins',
              fontSize: 17,
              textTransform: 'uppercase',
              color: '#013dc4',
              fontWeight: '600',
            }}>
            {data?.type}
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins',
              textTransform: 'uppercase',
            }}>
            Sell all Group
          </Text>
        </View>
        {list.length > 0 && (
          <>
            <ScrollView horizontal={true}>
              {!loading && (
                <>
                  {list?.map(set => (
                    <Pressable
                      onPress={() => {
                        /* 1. Navigate to the Details route with params */
                        navigation.navigate('Group', {
                          title: data.name,
                          id: data.id,
                        });
                      }}
                      style={{
                        width: 200,
                        margin: 20,
                      }}>
                      <Image
                        style={{
                          width: 200,
                          height: 100,
                          objectFit: 'cover',
                        }}
                        source={{
                          uri: `https://api.alumnithrive.com/public/${set?.clubImage}`,
                        }}
                      />

                      <Text
                        style={{
                          width: 200,
                          textAlign: 'left',
                          fontFamily: 'Poppins',
                          paddingTop: 10,
                        }}>
                        {set.name}
                      </Text>
                    </Pressable>
                  ))}
                </>
              )}
            </ScrollView>
          </>
        )}

        {list.length === 0 && (
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: windowWidth,
            }}>
            <Text> No Group found</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Item;
