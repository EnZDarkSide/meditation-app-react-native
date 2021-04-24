import * as React from "react";

import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    TouchableOpacity,
    TextInput,
} from "react-native";

import DateTimePicker from '@react-native-community/datetimepicker';

import colors from "../assets/colors";

export function RemindersScreen({ navigation }) {

    const [date, setDate] = React.useState(new Date());
    const [mode, setMode] = React.useState('time');
    const [show, setShow] = React.useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <View style={styles.screen}>
            <View style={styles.headerView}>
                <Text style={styles.header1}>
                    What time would you like to meditate?
            </Text>
                <Text style={styles.header2}>
                    Any time you can choose but We recommend first thing in the morning.
            </Text>
            <TextInput>
                
            </TextInput>
            </View>
        </View>);
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 20,
    },
    headerView: {
        marginTop: 75,
    },
    header1: {
        fontFamily: "HelveticaNeueCyr-Bold",
        color: colors.text_lm,
        fontSize: 24,
        lineHeight: 30,
        paddingRight: 70,
    },
    header2: {
        fontFamily: "HelveticaNeueCyr-Light",
        color: colors.text_lm,
        fontSize: 16,
        marginTop: 5,
        lineHeight: 20,
        paddingRight: 30
    },
    chooseTopicText: {
        fontFamily: "HelveticaNeueCyr-Light",
        color: colors.text_lm_muted,
        fontSize: 20,
        marginTop: 10,
    },
    topic: {
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 20,
    },
    topicsView: {
        flexDirection: "row",
        marginTop: 30,
    },
    topicsColumnFirst: {
        flex: 1,
        marginRight: 12,
    },
    topicsColumnSecond: {
        flex: 1,
        marginLeft: 12,
    },
    topicImageBg: {
        flex: 1,
        resizeMode: "cover",
        flexDirection: "row",
    },
    topicTitle: {
        alignSelf: "flex-end",
        flex: 1,
        paddingBottom: 16,
        paddingHorizontal: 16,
        fontFamily: "HelveticaNeueCyr-Bold",
        fontSize: 18,
    },
    nextStepBtnContainer: {
        paddingHorizontal: 20,
    },
    nextStepBtn: {
        width: "100%",
        alignSelf: "center",
        justifyContent: "center",
        marginBottom: 20,
        marginTop: 20,
        backgroundColor: colors.control_blue,
        height: 65,
        marginHorizontal: 20,
        borderRadius: 38,
    },
    nextStepBtnText: {
        color: "#F6F1FB",
        fontFamily: "HelveticaNeueCyr-Medium",
        textAlign: "center",
        fontSize: 14,
    },
});
