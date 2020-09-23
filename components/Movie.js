import React from "react";
import styled from "styled-components/native";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";

const Container = styled.View``;

const Label = styled.Text`
  color: white;
  margin: 20px 20px 0 20px;
  font-size: 20px;
`;

const MovieScroll = styled.ScrollView``;

const MovieCard = styled.View`
  margin: 10px;
`;

const MovieImages = styled.Image`
  width: ${Math.round((Dimensions.get("window").width * 20) / 100)}px;
  height: 150px;
`;

const Movie = ({ label, images }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <MovieScroll horizontal>
        {images.map((image, index) => {
          return (
            <MovieCard key={String(index)}>
              <MovieImages resizeMode={"contain"} source={image} />
            </MovieCard>
          );
        })}
      </MovieScroll>
    </Container>
  );
};

export default Movie;
