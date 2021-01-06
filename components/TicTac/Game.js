import React, {Component} from 'react';
import {StyleSheet,Text,View,TouchableOpacity} from 'react-native';
import Header from './Header';
import GameBoard from './GameBoard';

class Game extends Component {
    constructor() {
        super();
        this.state = {
            gameStarted: false
        };
    };

    startGame = () => {
        this.setState({gameStarted: true});
    }

    render() {
        const {gameStarted} = this.state;
        return(
            <View style={styles.container}>
                <Header>Tic Tac Toe </Header>
                {
                    gameStarted ? <GameBoard />: (
                        <View>
                        <Text style={styles.welcome}>
                            Welcome to the game!
                        </Text>
                        <TouchableOpacity onPress={() => this.startGame()}>
                            <Text style={styles.instructions}>
                            Touch here to start
                            </Text>
                        </TouchableOpacity>
                        </View>
                    )
                }

               <Text
                 style={styles.navText}
                 onPress={() => this.props.navigation.navigate('Dashboard')}
                >
                    Back
                </Text>
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
    welcome: {
      fontSize: 20,
      marginTop: 50,
    },
    instructions: {
      textAlign: 'center',
      marginTop: 20,
      color: 'grey',
      marginBottom: 5,
    },
    navText: {
        color: '#3740FE',
        marginTop: 25,
        textAlign: 'center'
      },
  })

  export default Game;