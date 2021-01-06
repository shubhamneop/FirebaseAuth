import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import firebase from '../database/firebase';
import Header from './TicTac/Header';


class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            uid: '',
            errorMessage: '',
            displayName: ''
        }
    }

    signOut = () => {
        firebase.auth().signOut().then(() => {
            this.props.navigation.navigate('Login')
        }).catch(error =>  this.setState({errorMessage: error.message
        }))
    }
    render(){
        this.state = {
            displayName: firebase.auth().currentUser.displayName,
            uid: firebase.auth().currentUser.uid
        }

        return (
            <View style={styles.container}>
                <Header>
                Hello, {this.state.displayName}
                </Header>
                <Text
                 style={styles.textStyle}
                 onPress={() => this.props.navigation.navigate('Game')}
                >
                    Play Tic tac toe
                </Text>
                
                <Button color="#f05454" title="Logout" onPress={() => this.signOut()} />

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    textStyle: {
      fontSize: 15,
      margin: 20,
      color: '#54e346',
      fontSize: 20
    }
  });

export default Dashboard;