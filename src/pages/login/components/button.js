import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components';
import Global from '../../../utils/global';

const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  margin-top: ${(props) => props.top ?? 0}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${Global.blue};
  width: 100%;
  height: 50px;
  border-radius: 25px;
`;

const Loading = styled.ActivityIndicator`
  position: absolute;
  left: 140px;
`;

const WhiteText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 700;
`;

export default class Index extends Component {
  render() {
    return (
      <Button top={this.props.top} onPress={this.props.onPress}>
        {this.props.loading ? (
          <Loading
            style={{marginRight: 15}}
            size="small"
            color="white"
            animating={true}></Loading>
        ) : null}
        <WhiteText>{this.props.text}</WhiteText>
      </Button>
    );
  }
}
