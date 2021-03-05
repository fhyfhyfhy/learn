import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';
import styled from 'styled-components';

import Login from './components/login';
import ArrowList from './components/arrow';

const BackgroundContainer = styled.View`
  justify-content: center;
`;

const Background = styled.Image.attrs({
  source: {uri: 'https://s3.ax1x.com/2021/03/04/6EO4Dx.jpg'},
})`
  height: 160px;
  width: 120%;
  border-bottom-left-radius: 90px;
  border-bottom-right-radius: 90px;
  margin-bottom: 50px;
  position: relative;
  left: -10%;
`;

class List extends Component {
  state = {
    list: Array,
  };
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          icon: 'Share',
          text: '分享APP',
        },
        {
          icon: 'Feedback',
          text: '反馈BUG',
        },
      ],
    };
  }
  render() {
    return this.state.list.map((v) => (
      <ArrowList key={v.text} {...v}></ArrowList>
    ));
  }
}

export default class Index extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar
          backgroundColor="transparent"
          translucent={true}
          animated={false}></StatusBar>
        <BackgroundContainer>
          <Background></Background>
          <Login
            onPress={() => this.props.navigation.navigate('Login')}></Login>
        </BackgroundContainer>
        <List></List>
      </View>
    );
  }
}
