import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Input, Button, Overlay } from 'react-native-elements';
import { Link } from '@react-navigation/native';
import { RegisterUser } from '../apicalls/users';
import { router } from 'expo-router';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';


const Register = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const submit = async () => {
    if (form.name === '' || form.email === '' || form.password === '') {
      setErrorMessage('Please fill in all fields');
      setErrorVisible(true);
      return;
    }

    setIsSubmitting(true);
    try {
      await RegisterUser(form.email, form.password, form.name);
      router.push('/Profile');
    } catch (error) {
      setErrorMessage(error.message);
      setErrorVisible(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.content}>
            <Text style={styles.heading}>Ready? Are you!</Text>
            <Text style={styles.headingText}>
              Connexus: Your one-stop app for news, events, and campus life.
            </Text>

            <FormField
              value={form.name}
              handleChangeText={(text) => setForm({ ...form, name: text })}
              placeholder="Enter your name"
              otherStyles={styles.input}
            />
            <FormField
            value={form.email}
            handleChangeText={(text) => setForm({ ...form, email: text })}
            placeholder="Enter your email"
            otherStyles={styles.input}
            keyboardType="email-address"
          />

          <FormField
            value={form.password}
            handleChangeText={(text) => setForm({ ...form, password: text })}
            placeholder="Enter your password"
            otherStyles={styles.input}
            secureTextEntry
          />

          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles={styles.button}
            isLoading={isSubmitting}
          />

            <Text style={styles.middleText}>Already have an account?</Text>
            <Link to="/login" style={styles.linkText}>
              <Text>Log In</Text>
            </Link>

            <Text style={styles.middleText}>
              By clicking sign up, you agree to our Terms of Service and Privacy Policy
            </Text>

            <Text style={styles.footer}>Connexus</Text>
          </View>
        </ScrollView>
      </GestureHandlerRootView>

      <Overlay isVisible={errorVisible} onBackdropPress={() => setErrorVisible(false)}>
        <Text>{errorMessage}</Text>
      </Overlay>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'beige',
    padding: 24,
  },
  heading: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  headingText: {
    fontSize: 25,
    color: '#333',
    marginBottom: 20,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    width: '100%',
  },
  input: {
    height: 40,
    width: '150%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  button: {
    width: '100%',
    backgroundColor: 'black',
    padding: 14,
    borderRadius: 8,
    marginTop: 24,
    minWidth: 180,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  middleText: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
  },
  linkText: {
    fontSize: 16,
    marginBottom: 20,
    textDecorationLine: 'underline',
  },

  footer: {
    marginTop: 20,
    fontSize: 60,
    fontWeight: 'bold',
  },
});

export default Register;
