import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import BookMarkSvg from '../../../svg/BookMarkSvg';
import {Image} from 'react-native';
import EventWishlist from '../../../svg/EventWishlist';

const Week = () => {
  const data = [1, 2, 3, 4, 5, 6, 7];

  const [bookmark, setBookMark] = React.useState([]);

  const bookmarkCarrer = (index: any) => {
    let find = bookmark.find(t => t === index);

    if (find) {
      let findIndex = bookmark.findIndex(x => x === index);

      console.log(bookmark);
    } else {
      setBookMark([...bookmark, index]);
    }
  };
  return (
    <ScrollView style={{flex: 1}}>
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
        {data.map((set, index) => (
          <Pressable
            style={{
              width: '85%',

              borderRadius: 5,

              shadowColor: 'rgba(24, 25, 28, 0.03)',
              shadowOpacity: 0.8,
              shadowRadius: 2,
              shadowOffset: {
                height: 1,
                width: 1,
              },
            }}>
            <ImageBackground
              style={{
                width: '100%',
                height: 150,
                borderRadius: 10,
                display: 'flex',
              }}
              source={require('../../../assets/eventBanner.png')}
              resizeMode="cover">
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  width: '100%',
                  height: '100%',
                  padding: 20,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 15,
                    marginBottom: 5,
                    fontFamily: 'Poppins',
                  }}>
                  Fintech & Key Investment Seminar
                </Text>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'left',
                    fontFamily: 'Poppins',
                  }}>
                  Date: 11 September 2021
                </Text>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'left',
                    fontFamily: 'Poppins',
                  }}>
                  Location : 1280 McKay Ave, Alameda, CA
                </Text>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'left',
                    fontFamily: 'Poppins',
                  }}>
                  94501 Ticket : Free
                </Text>
              </View>
            </ImageBackground>

            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../../assets/eventFrame.png')}
                  style={{
                    height: 80,
                    width: 80,
                    borderRadius: 40,
                    marginBottom: 10,
                    objectFit: 'contain',
                  }}
                />
                <Text style={{marginLeft: 10}}>Pune, Mumbai</Text>
              </View>

              <Pressable onPress={() => bookmarkCarrer(set)}>
                <EventWishlist active={bookmark.includes(set)} />
              </Pressable>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

export default Week;

const styles = StyleSheet.create({});
