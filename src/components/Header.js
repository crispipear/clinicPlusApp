import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SiteConsumer} from '../SiteContext'


const headerColor = ['#4D60A1', '#8478BA']

const Header = () => (
    <SiteConsumer>
        {({screenName}) => (
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={headerColor} style={styles.header}>
                <Text style={styles.title}>{screenName}</Text>
            </LinearGradient>
        )}
    </SiteConsumer>
)


const styles = StyleSheet.create({
    header: {
        display: 'flex',
        height: 200,
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 25
    },
    title: {
        color: 'white',
        fontSize: 25
    }
  })

export default Header