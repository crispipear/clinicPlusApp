import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SiteConsumer} from '../SiteContext'
import User from './User'

const headerColor = ['#4D60A1', '#8478BA']

const Header = () => (
    <SiteConsumer>
        {({screenName}) => (
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={headerColor} style={styles.header}>
                {screenName=='home'
                    ?<Text style={styles.title}>{screenName}</Text>
                    :<User/>
                }
            </LinearGradient>
        )}
    </SiteConsumer>
)


const styles = StyleSheet.create({
    header: {
        display: 'flex',
        height: 176,
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 25
    },
    title: {
        color: 'white',
        fontSize: 35,
        fontWeight: '300',
        letterSpacing: 5
    }
  })

export default Header