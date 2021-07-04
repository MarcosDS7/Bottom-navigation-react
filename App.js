import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Icon from 'react-native-ico-material-design';

var iconHeight = 26;
var iconWidth = 26;

export default class App extends React.Component{

  state = {
    screenText: 'Hello World'
  }

  changeText = (text) =>{
    console.log(text + 'Você pressionou!')
    this.setState({
      screenText: text
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <View>
          <Text style={{fontSize: 30, color:'white'}}>{this.state.screenText}</Text>
          <StatusBar style="light" />
        </View>

        <View style={styles.NavContainer}>
          <View style={styles.NavBar}>
          <Pressable onPress={() => this.changeText('Favoritos')} style={styles.IconBehave}
            android_ripple={{borderless: true, radius: 50}}>
              <Icon name="favorite-heart-button" height={iconHeight} width={iconWidth} color='#1565c0'/>
           </Pressable>

          <Pressable onPress={() => this.changeText('Chat')} style={styles.IconBehave}
            android_ripple={{borderless: true, radius: 50}}>
              <Icon name="chat-bubble" height={iconHeight} width={iconWidth} color='#1565c0'/>
           </Pressable>

          <Pressable onPress={() => this.changeText('Perfil')} style={styles.IconBehave}
            android_ripple={{borderless: true, radius: 50}}>
              <Icon name="user-shape" height={iconHeight} width={iconWidth} color='#1565c0'/>
           </Pressable>

          <Pressable onPress={() => this.changeText('Configurações')} style={styles.IconBehave}
            android_ripple={{borderless: true, radius: 50}}>
              <Icon name="settings-cogwheel-button" height={iconHeight} width={iconWidth} color='#1565c0'/>
           </Pressable>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3962ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  NavContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 20,
  },
  NavBar: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    width: '90%',
    justifyContent: 'space-evenly',
    borderRadius: 40,
  },
  IconBehave: {
    padding: 14,
  }
});
