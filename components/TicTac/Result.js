import React, { Component } from 'react'
import { StyleSheet,Text,View,TouchableOpacity} from 'react-native';

import {GAME_RESULT_NO,GAME_RESULT_USER,GAME_RESULT_AI,GAME_RESULT_TIE} from './constant/game';


export default class Results extends Component {
  generateResultText(result) {
    switch (result) {
      case GAME_RESULT_USER:
        return 'You won the game!'
      case GAME_RESULT_AI:
        return 'AI won the game!'
      case GAME_RESULT_TIE:
        return 'Tie!'
      default:
        return ''
    }
  }

  render() {
    const { result, onRestart } = this.props
    return (
      <View>
        <Text style={styles.text}>{ this.generateResultText(result) }</Text>
        {
          result !== GAME_RESULT_NO && (
            <TouchableOpacity onPress={() => onRestart()}>
              <Text style={styles.instructions}>
                Touch here to play again
              </Text>
            </TouchableOpacity>
          )
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4e8d7c'
  },
  instructions: {
    marginTop: 20,
    color: '#ff4646',
    marginBottom: 5,
    textAlign: 'center'
  },
})