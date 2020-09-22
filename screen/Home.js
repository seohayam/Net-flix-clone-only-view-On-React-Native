import React, { Component } from "react";

// モジュール
import { StatusBar, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";

// Components
import Header from "../components/Header";
import Hero from "../components/Hero";
import Movie from "../components/Movie";

// styled
import styled from "styled-components/native";

const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;

const Poster = styled.ImageBackground`
  width: 100%;
  height: ${(Dimensions.get("window").height * 80) / 100}px;
`;
//   ウィンドウをgetで受けて画面全体の８割に表示をしている
// Dimensions = 大きさ

const Gradient = styled(LinearGradient)`
  height: 100%;
`;

const Home = () => {
  return (
    <>
      {/* StatusBar = スマホの上のwifiなどの表示をするのに使う */}
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Container>
        <Poster source={require("../assets/greate.png")}>
          <Gradient
            locations={[0, 0.2, 0.6, 0.9]}
            colors={[
              "rgba(0,0,0,0.5)",
              "rgba(0,0,0,0.0)",
              "rgba(0,0,0,0.0)",
              "rgba(0,0,0,1)",
            ]}
          >
            {/* ==Header== */}
            <Header />
            {/* ==Hero== */}
            <Hero />
          </Gradient>
        </Poster>
        {/* ==Movie== */}
        <Movie />
        <Movie />
      </Container>
    </>
  );
};

export default Home;
