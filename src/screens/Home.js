import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import Menu from "../component/Menu";

const Home = (props) => {
  const description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ";

  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          resizeMode="contain"
          source={require("../../assets/logo.jpeg")}
        />

        <Text style={styles.mainHeader}>Welcome to</Text>
        <Text style={[
          styles.mainHeader,
          {
            fontSize: 33,
            color: "#4c5dab",
            marginTop: 0,
          },
        ]}>My Page, {props.channelName} !!</Text>

        <Text style={styles.paraStyle}>{description}</Text>

       </View>

       <View style = {styles.menuStyle}>
       <View style={styles.lineStyle}></View>
         <Menu />
         <View style={[styles.lineStyle, {
           marginVertical: 10,
         },
         ]}></View>
       </View>
     </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
  },

  headerImage: {
    height: undefined,
    width: "50%",
    aspectRatio: 1,
    display: "flex",
    alignItems: "stretch",
    marginTop: 5,
    borderRadius: 20,

  },

  homeTop:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  mainHeader: {
    fontSize: 30,
    color: "#344055",
    textTransform: "uppercase",
    fontFamily: "Nunito_600Bold"
  },

  paraStyle: {
    textAlign: "left",
    fontSize: 19,
    color: "#7d7d7d",
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 26,
    fontFamily: "JosefinSans_400Regular"

  },

  lineStyle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "grey",
  }
});


export default Home;
