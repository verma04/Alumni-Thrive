import React from 'react';
import {Tab, Text, TabView} from '@rneui/themed';
import {View} from 'react-native';
import OverView from './OverView';
import Job from './Job';
import Life from './Life';

export default () => {
  const [index, setIndex] = React.useState(0);

  return (
    <>
      <Tab
        value={index}
        onChange={e => setIndex(e)}
        containerStyle={{
          backgroundColor: '#013Dc4',
        }}
        indicatorStyle={{
          backgroundColor: 'white',
          height: 3,
        }}
        variant="primary">
        <Tab.Item
          title="Overview"
          titleStyle={{fontSize: 12, textTransform: 'uppercase'}}
        />
        <Tab.Item
          title="Job"
          titleStyle={{fontSize: 12, textTransform: 'uppercase'}}
        />
        <Tab.Item
          title="Life"
          titleStyle={{fontSize: 12, textTransform: 'uppercase'}}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{backgroundColor: 'red', width: '100%'}}>
          <OverView />
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'blue', width: '100%'}}>
          <Job />
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'green', width: '100%'}}>
          <Life />
        </TabView.Item>
      </TabView>
    </>
  );
};
