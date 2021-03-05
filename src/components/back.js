import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';

const BackWrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  justify-content: center;
  padding: 0 5%;
`;

const BackIcon = styled.View`
  width: 10px;
  height: 10px;
  border-top-width: 1px;
  border-top-color: ${(props) => props.color ?? 'black'};
  border-left-width: 1px;
  border-left-color: ${(props) => props.color ?? 'black'};
  transform: rotate(-45deg);
`;

export default class Back extends Component {
  render() {
    return (
      <BackWrapper onPress={() => this.props.navigation.goBack()}>
        <BackIcon></BackIcon>
      </BackWrapper>
    );
  }
}
