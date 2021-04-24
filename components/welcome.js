import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import colors from '../assets/colors';

export function WelcomeScreen({navigation}) {
    return (
      <View style={styles.welcomeScreen}>
        <ImageBackground source={require('../assets/images/welcome_bg.png')} style={{flex: 1}}>
            <View style={styles.welcomeContainer}>
                <View>
                    <Image source={require('../assets/images/logo.png')} style={styles.welcomeScreenLogo}></Image>
                    <Text style={styles.welcomeName}>Hi Vladislav, Welcome</Text>
                    <Text style={styles.toSilentMoon}>to Silent Moon</Text>
                    <Text style={styles.wishText}>Explore the app, Find some peace of mind to prepare for meditation.</Text>
                </View>
                <View style={styles.getStartedBtnContainer}>
                    <TouchableOpacity style={styles.getStartedBtn} onPress={() => navigation.navigate('ChooseTopicScreen')}>
                        <Text style={styles.getStartedBtnText}>GET STARTED</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
      </View>
    );
}


const styles = StyleSheet.create({
    welcomeScreen: {
        flex: 1
    },
    welcomeContainer: {
        flex: 1,
        justifyContent: 'space-between'
    },
    welcomeScreenLogo: {
        alignSelf: 'center',
        marginTop: 50
    },
    welcomeName: {
        alignSelf: 'center',
        marginTop: 75,
        fontFamily: 'HelveticaNeueCyr-Bold',
        color: '#FFECCC',
        fontSize: 30
    },
    toSilentMoon: {
        alignSelf: 'center',
        fontFamily: 'HelveticaNeueCyr-Light',
        color: '#FFECCC',
        fontSize: 30
    },
    wishText: {
        alignSelf: 'center',
        fontFamily: 'HelveticaNeueCyr-Light',
        color: '#FFECCC',
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 16,
        marginTop: 16,
        lineHeight: 25
    },
    getStartedBtnContainer: {
        paddingHorizontal: 20
    },
    getStartedBtn: {
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: 65,
        backgroundColor: colors.control_light,
        height: 65,
        marginHorizontal: 20,
        borderRadius: 38,
    },
    getStartedBtnText: {
        color: colors.text_lm,
        fontFamily: 'HelveticaNeueCyr-Medium',
        textAlign: 'center',
        fontSize: 14,
    }
})