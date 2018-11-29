import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './components/Header'
import Container from './components/Container'
import {SiteProvider} from './SiteContext'

console.disableYellowBox = true;
export default class App extends Component {
    render() {
        return (
            <SiteProvider>
              <View style={styles.container}>
                <Header/>
                <Container/>
              </View>
            </SiteProvider>
          );
        }
      }
      
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
