import React, {useState} from 'react';
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
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Background from './Background';
import Logo from '../../components/Logo';
const StartScreen = ({navigation}: any) => {
  const onPressLogin = () => {
    navigation.navigate('Login');
    // Do something about login operation
  };
  const onPressForgotPassword = () => {
    // Do something about forgot password operation
  };
  const onPressSignUp = () => {
    navigation.navigate('Register');
  };
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  return (
    <Background>
      <View style={styles.container}>
        <Logo />
        <Text style={styles.title}>Alumni Thrive</Text>
        <Text style={{marginBottom: 30, width: '80%', textAlign: 'center'}}>
          Explore all the existing job roles based on your interest and study
          major
        </Text>

        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            width: '90%',
          }}>
          <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
            <Text style={styles.loginText}>Login </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerBtn} onPress={onPressSignUp}>
            <Text
              style={[
                styles.loginText,
                {
                  color: 'black',
                },
              ]}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
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
    width: '80%',
    backgroundColor: '#F1F4FF',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: '#1F41BB',
  },
  forgotAndSignUpText: {
    color: '#1F41BB',
    textAlign: 'right',
    fontSize: 15,
    fontFamily: 'Poppins',
  },
  loginBtn: {
    fontFamily: 'Poppins',
    width: '40%',
    backgroundColor: '#4253F0',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
    color: 'white',
  },
  registerBtn: {
    fontFamily: 'Poppins',
    width: '40%',

    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
    color: 'white',
  },
});
export default StartScreen;
