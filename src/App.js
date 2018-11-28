import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from './components/Header'
import Container from './components/Container'
import {SiteProvider} from './SiteContext'

console.disableYellowBox = true;
const backgroundColor = ['#FFFFFF', '#EDF0E7']

export default class App extends Component {
    render() {
        return (
            <SiteProvider>
              <LinearGradient start={{x: 0, y: 0.75}} end={{x: 0, y: 1}} colors={backgroundColor} style={styles.container}>
                <Header/>
                <Container/>
              </LinearGradient>
            </SiteProvider>
          );
        }
      }
      
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
