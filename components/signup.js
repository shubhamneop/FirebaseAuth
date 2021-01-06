import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import firebase from '../database/firebase';


class Signup extends Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            isLoading: false,
            errorMessage: ''
        } 
    }
    componentDidMount() {
        this.setState({isLoading: false});
    }
    updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }
    
    registerUser = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let result = reg.test(this.state.email);
        if(!result) {
            Alert.alert('Enter Correct Email Id!');
            return false;
        }
        
        if(this.state.email === '' && this.state.password === '') {
            Alert.alert('Enter details to signup!');
        } else {
            this.setState({isLoading: true});
            firebase.auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((res) => {
                res.user.updateProfile({
                    displayName: this.state.displayName
                })
                console.log('User registered successfully!');
                this.setState({
                    isLoading: false,
                    displayName: '',
                    email: '',
                    password: '',
                    errorMessage: ''
                });
                this.props.navigation.navigate('Login');
            })
            .catch((error) => { 
                this.setState({isLoading: false});
                Alert.alert(error.message);
             })
        }
    }

    render(){
        if(this.state.isLoading) {
            return(
                <View style={styles.preloader}>
                    <ActivityIndicator size='large' color="#583d72" />
                </View>
            );
        }
        return(
            <View style={styles.container}>
                <TextInput
                 style={styles.inputStyle}
                 placeholder="Name"
                 value={this.state.displayName}
                 onChangeText={(val) => this.updateInputVal(val,'displayName')}
                />
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Email"
                  value={this.state.email}
                  onChangeText={(val) => this.updateInputVal(val,'email')}
                />
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Password"
                  value={this.state.password}
                  onChangeText={(val) => this.updateInputVal(val,'password')}
                  maxLength={12}
                  secureTextEntry={true}
                />
                <Button
                 color="#83AF9B"
                 title="Signup"
                 onPress={() => this.registerUser()}
                /> 
                <Text
                 style={styles.loginText}
                 onPress={() => this.props.navigation.navigate('Login')}
                >
                    Already Registered? Click here to login
                </Text>
                <Text
                 style={styles.loginText}
                 onPress={() => this.props.navigation.navigate('Check')}
                >
                    CheckBox
                </Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: 35,
      backgroundColor: '#fff'
    },
    inputStyle: {
      width: '100%',
      marginBottom: 15,
      paddingBottom: 15,
      alignSelf: "center",
      borderColor: "#ccc",
      borderBottomWidth: 1
    },
    loginText: {
      color: '#3740FE',
      marginTop: 25,
      textAlign: 'center'
    },
    preloader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
    }
  });

export default Signup;