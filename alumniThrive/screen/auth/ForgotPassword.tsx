import React, {useCallback, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';

import {FastField, Formik} from 'formik';
import * as yup from 'yup';
import Background from './Background';
import {Alert} from 'react-native';

import {Button} from '@rneui/base';
import Toast from 'react-native-toast-message';
import axiosInstance from '../../axios/post/axiosInstance';
import ViewSvg from '../../svg/ViewSvg';
import HideSvg from '../../svg/HideSvg';
import {trigger} from 'react-native-haptic-feedback';
import {AuthContext} from '../../context/context';

const ForgotPassword = ({navigation, route}: any) => {
  const {signIn} = React.useContext(AuthContext);
  interface MyFormValues {
    email: string;
  }
  const onPress = useCallback(() => {
    const options = {
      enableVibrateFallback: true,
      ignoreAndroidSystemSettings: false,
    };
    trigger('impactLight', options);
  }, []);
  const [loading, setLoading] = React.useState(false);
  const [view, setView] = React.useState(false);

  const login = async (data: MyFormValues) => {
    try {
      await setLoading(true);
      const response = await axiosInstance.post('/api/forgot-passwords', data);
      await setLoading(false);

      // Replace with your API endpoint
    } catch (error) {
      console.log(error.response.status);
      if (error.response.status === 500) {
        Toast.show({
          type: 'error',
          text1: 'Something went wrong',
        });
      }

      if (error?.response?.data.message) {
        Toast.show({
          type: 'error',
          text1: error?.response?.data.message,
        });
      }
      await setLoading(false);
      // Handle the error here
    }
  };

  const onPressLogin = () => {
    route.params.changeState();
    // Do something about login operation
  };
  const onPressForgotPassword = () => {
    // Do something about forgot password operation
  };
  const onPressSignUp = () => {
    navigation.navigate('Register');
    // Do something about signup operation
  };

  const initialValues: MyFormValues = {email: '', password: ''};

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
  });

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={{marginBottom: 30, fontFamily: 'Poppins'}}>
          Enter Your email to change password
        </Text>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            login(values);
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <>
              <View style={styles.inputView}>
                <TextInput
                  style={styles.inputText}
                  placeholder="Email"
                  placeholderTextColor="#626262"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
                {errors.email && touched.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
              </View>

              <Button
                containerStyle={styles.loginBtn}
                loading={loading}
                buttonStyle={{
                  backgroundColor: '#4253F0',
                  borderRadius: 3,
                }}
                onPress={handleSubmit}
                title={'Continue'}
              />
            </>
          )}
        </Formik>
      </View>
    </Background>
  );
};
const styles = StyleSheet.create({
  loginText: {
    fontFamily: 'Poppins',
    color: 'white',
    fontSize: 18,
  },
  createAccountText: {
    textAlign: 'right',
    fontSize: 15,
    marginTop: 20,
    fontFamily: 'Poppins',
  },
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#4253F0',
    marginBottom: 10,
  },
  inputView: {
    fontFamily: 'Poppins',
    width: '90%',
    position: 'relative',
    borderRadius: 25,
    height: 70,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  errorText: {
    marginTop: 5,
    fontSize: 10,
    color: 'red',
  },
  inputText: {
    height: 50,
    color: '#1F41BB',
    backgroundColor: '#F1F4FF',
    width: '100%',
    borderRadius: 10,
    paddingLeft: 10,
    fontFamily: 'Poppins',
  },
  forgotAndSignUpText: {
    color: '#1F41BB',
    textAlign: 'right',
    fontSize: 15,
    fontFamily: 'Poppins',
  },
  loginBtn: {
    fontFamily: 'Poppins',
    width: '80%',
    backgroundColor: '#4253F0',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
    color: 'white',
  },
});
export default ForgotPassword;
