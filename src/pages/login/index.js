import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';
import IconList from './components/iconList';

const Background = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 30% 10% 10%;
`;

const BottomView = styled.View`
  width: 100%;
`;

const BackgroundImage = styled.Image.attrs({
  source: {uri: 'https://s3.ax1x.com/2021/02/22/y7hEWj.png'},
  resizeMode: 'cover',
})`
  height: 80px;
  width: 80px;
`;

const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  margin-top: 200px;
  align-items: center;
  justify-content: center;
  background-color: #007aff;
  width: 100%;
  height: 50px;
  border-radius: 25px;
`;

const WhiteText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 700;
`;

export default class Login extends Component {
  render() {
    return (
      <Background>
        <BackgroundImage />
        <BottomView>
          <Button onPress={() => this.props.navigation.navigate('Input')}>
            <WhiteText>手机号登录</WhiteText>
          </Button>
          <IconList></IconList>
        </BottomView>
      </Background>
    );
  }
}
