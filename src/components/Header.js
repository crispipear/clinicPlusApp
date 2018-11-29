import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SiteConsumer} from '../SiteContext'
import User from './User'
import HeaderTop from './header_top'

const headerColor = ['#4D60A1', '#8478BA']

const Header = ({navigation}) => (
    <SiteConsumer>
        {({screenName}) => (
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={headerColor} style={styles.header}>
                <HeaderTop navigation={navigation}/>
                <View style={styles.bottom}>
                    {(screenName=='Home' || screenName=='home')
                        ?<User/>
                        :<Text style={styles.title}>{screenName}</Text>
                    }
                </View>
            </LinearGradient>
        )}
    </SiteConsumer>
)


const styles = StyleSheet.create({
    header: {
        display: 'flex',
        height: 200,
        padding: 25
    },
    title: {
        color: 'white',
        fontSize: 28,
        fontWeight: '300',
        letterSpacing: 3,
        textAlign: 'right'
    },
    bottom: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'flex-end'
    }
  })

export default Header