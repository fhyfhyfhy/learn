import React, {Component} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components';
import SvgUri from 'react-native-svg-uri';
import Icon from '../../../icons';
import Global from '../../../utils/global';

const LoginContainer = styled.View`
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: white;
  width: 84%;
  height: 100px;
  position: absolute;
  top: 90px;
  left: 8%;
  elevation: 2.5;
`;

const LoginContent = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

const LoginText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  margin-left: 15px;
`;

export default class Login extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.props.onPress}>
        <LoginContainer>
          <LoginContent>
            <SvgUri
              svgXmlData={Icon.Avatar}
              width={60}
              height={60}
              fill={Global.grey}></SvgUri>
            <LoginText>登录/注册</LoginText>
            <SvgUri
              style={{position: 'absolute', right: 0}}
              svgXmlData={Icon.RightArrow}
              width={18}
              height={18}
              fill={Global.grey}></SvgUri>
          </LoginContent>
        </LoginContainer>
      </TouchableWithoutFeedback>
    );
  }
}
