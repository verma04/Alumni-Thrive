import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import BookMarkSvg from '../../../svg/BookMarkSvg';

const List = () => {
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
          marginTop: 20,
        }}>
        {data.map((set, index) => (
          <View
            style={{
              width: '85%',
              margin: 20,
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
            <View style={{padding: 20}}>
              <Text>Techical Support Specialist</Text>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <View
                  style={{
                    backgroundColor: '#E7F6EA',
                    padding: 2,
                    marginRight: 10,
                    width: 75,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: '#0BA02C'}}>Part-time</Text>
                </View>
                <Text style={{color: '#767F8C'}}>
                  Salary: ₹10,00,000 - ₹12,00,000
                </Text>
              </View>

              <View
                style={{
                  marginTop: 20,
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <View>
                  <Text>Google Inc.</Text>
                  <Text>Pune, Mumbai</Text>
                </View>

                <Pressable onPress={() => bookmarkCarrer(set)}>
                  <BookMarkSvg active={bookmark.includes(set)} />
                </Pressable>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default List;

const styles = StyleSheet.create({});
