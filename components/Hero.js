import React from "react";
import styled from "styled-components/native";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const Container = styled.View`
  position: absolute;
  width: 100%;
  align-items: center;
  bottom: 80px;
`;
const Bannar = styled.Image`
  height: 100px;
`;
const MenuHero = styled.View`
  flex-direction: row;
  width: 90%;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
`;

const Button = styled.TouchableOpacity`
  align-items: center;
`;

const TextButton = styled.Text`
  color: #fff;
  font-size: 10px;
`;

const Hero = () => {
  return (
    <Container>
      <Bannar resizeMode="contain" source={require("../assets/banner.png")} />
      <MenuHero>
        <Button>
          <AntDesign name="pluscircleo" size={35} color="white" />
          <TextButton></TextButton>
        </Button>
        <Button>
          <AntDesign name="playcircleo" size={35} color="white" />
          <TextButton></TextButton>
        </Button>
        <Button>
          <SimpleLineIcons name="info" size={35} color="white" />
          <TextButton>info</TextButton>
        </Button>
      </MenuHero>
    </Container>
  );
};

export default Hero;
