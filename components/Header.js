import React from "react";
import styled from "styled-components/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 25px 25px 0 25px;
  align-items: center;
`;

const Logo = styled.Image`
  width: 20;
  height: 40px;
`;
const Menu = styled.Text`
  font-size: 18px;
  color: #fff;
`;

const Header = () => {
  return (
    <Container>
      <Logo resizeMode="contain" source={require("../assets/logo.png")}></Logo>
      <TouchableOpacity>
        <Menu>シリーズ</Menu>
      </TouchableOpacity>
      <TouchableOpacity>
        <Menu>映画</Menu>
      </TouchableOpacity>
      <TouchableOpacity>
        <Menu>リスト</Menu>
      </TouchableOpacity>
    </Container>
  );
};

export default Header;
