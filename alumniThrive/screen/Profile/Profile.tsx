import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {storage} from '../../mmkv';

const Profile = () => {
  const data = storage.getString('user');
  const profile = JSON.parse(data);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.photo}
          source={{
            uri: `https://api.alumnithrive.com/public/${profile?.profile_pic}`,
          }}
        />
        <Text style={styles.name}>
          {profile.first_name} {profile.last_name}
        </Text>
        <Text style={styles.title}>{profile.email}</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Current Company</Text>
          <View style={styles.sectionContent}>
            <Text style={styles.sectionItem}>
              <Text style={{fontWeight: '600'}}>Current_company: </Text>
              {profile.current_company}
            </Text>
            <Text style={styles.sectionItem}>
              <Text style={{fontWeight: '600'}}>Current_designation: </Text>{' '}
              {profile.current_designation}
            </Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Address</Text>
          <View style={styles.sectionContent}>
            <View style={styles.sectionItem}>
              <Text style={styles.sectionItemTitle}>Current Address</Text>
              <Text style={styles.sectionItemDesc}>
                - {profile.current_address}, {profile.current_city},
                {profile.current_state},{profile.current_country},{' '}
                {profile.current_region},
              </Text>
            </View>
            <View style={styles.sectionItem}>
              <Text style={styles.sectionItemTitle}>Permanent Address</Text>
              <Text style={styles.sectionItemDesc}>
                - {profile.permanent_address}, {profile.permanent_city},{' '}
                {profile.permanent_state},{profile.permanent_country},
                {profile.permanent_region},
              </Text>
            </View>
          </View>
        </View>
        {/* <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>
          <View style={styles.sectionContent}>
            <View style={styles.sectionItem}>
              <Text style={styles.sectionItemTitle}>Personal Blog (2021)</Text>
              <Text style={styles.sectionItemDesc}>
                - Created a personal blog using Gatsby and GraphQL - Implemented
                a custom design and added features such as dark mode and search
                - Deployed the site using AWS Amplify
              </Text>
            </View>
            <View style={styles.sectionItem}>
              <Text style={styles.sectionItemTitle}>Recipe App (2020)</Text>
              <Text style={styles.sectionItemDesc}>
                - Developed a recipe search app using React and the Spoonacular
                API - Implemented features such as saving favorite recipes and
                filtering by dietary restrictions - Published the app on the App
                Store and Google Play Store
              </Text>
            </View>
          </View>
        </View> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 16,
    color: 'gray',
  },
  body: {},
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  sectionContent: {
    marginTop: 8,
  },
  sectionItem: {
    marginVertical: 4,
  },
  sectionItemTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  sectionItemDesc: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Profile;
