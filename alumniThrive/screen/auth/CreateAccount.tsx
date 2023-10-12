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
const CreateAccount = ({navigation}: any) => {
  const onPressLogin = () => {
    navigation.navigate('Login');
  };
  const onPressForgotPassword = () => {
    // Do something about forgot password operation
  };

  const [state, setState] = useState({
    email: '',
    password: '',
  });
  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={{marginBottom: 30, width: '80%', textAlign: 'center'}}>
          Create an account so you can explore all the existing jobs
        </Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#626262"
            onChangeText={text => setState({email: text})}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="#626262"
            onChangeText={text => setState({password: text})}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            secureTextEntry
            placeholder="Confirm Password"
            placeholderTextColor="#626262"
            onChangeText={text => setState({password: text})}
          />
        </View>

        <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
          <Text style={styles.loginText}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressLogin}>
          <Text style={styles.createAccountText}>Already have an account</Text>
        </TouchableOpacity>
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
    width: '80%',
    backgroundColor: '#4253F0',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
    color: 'white',
  },
});
export default CreateAccount;
