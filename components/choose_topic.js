import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import colors from "../assets/colors";
import topics from "../assets/data/topics";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);

export function ChooseTopicScreen({ navigation }) {
  // Передача номера списка для разной высоты карточек
  const renderTopics = (item, index, numberOfList) => (
    <TouchableOpacity
      style={[
        styles.topic,
        { height: index % 2 == (numberOfList == 0 ? 1 : 0) ? 165 : 210 },
      ]}
      /* navigation */
      onPress={() => navigation.navigate('Reminders')}>
      <ImageBackground style={styles.topicImageBg} source={item.image}>
        <Text
          style={[
            styles.topicTitle,
            { color: item.lightText ? "#EBEAEC" : "#3F414E" },
          ]}>
          {item.title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../assets/images/choose_topic_bg.png")}
    >
      <SafeAreaView style={styles.screen}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Text style={styles.whatBrings}>What Brings you</Text>
            <Text style={styles.toSilentMoon}>to Silent Moon?</Text>
            <Text style={styles.chooseTopicText}>
              choose a topic to focuse on:
            </Text>
          </View>

          <View style={styles.topicsView}>
            <View style={styles.topicsColumnFirst}>
              <FlatList
                data={topics.filter(function (item, index) {
                  return index % 2 == 0;
                })}
                renderItem={({ item, index }) => renderTopics(item, index, 0)}
                keyExtractor={(item) => item.id.toString()}
              />
            </View>
            <View style={styles.topicsColumnSecond}>
              <FlatList
                data={topics.filter(function (item, index) {
                  return index % 2 == 1;
                })}
                renderItem={({ item, index }) => renderTopics(item, index, 1)}
                keyExtractor={(item) => item.id.toString()}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 75,
  },
  whatBrings: {
    fontFamily: "HelveticaNeueCyr-Bold",
    color: colors.text_lm,
    fontSize: 28,
  },
  toSilentMoon: {
    fontFamily: "HelveticaNeueCyr-Light",
    color: colors.text_lm,
    fontSize: 28,
    marginTop: 5,
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
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: colors.control_blue,
    height: 65,
    marginHorizontal: 20,
    borderRadius: 38,
  },
  nextStepBtnText: {
    color: '#F6F1FB',
    fontFamily: 'HelveticaNeueCyr-Medium',
    textAlign: 'center',
    fontSize: 14,
  },
});
