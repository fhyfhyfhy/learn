import React, {Component} from 'react';
import {TouchableHighlight} from 'react-native';
import styled from 'styled-components';
import SvgUri from 'react-native-svg-uri';
import Icon from '../../../icons';
import Global from '../../../utils/global';
import showToast from '../../../utils/toast';

const ListItem = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: white;
  padding-left: 8%;
  padding-right: 8%;
  padding-top: 18px;
  padding-bottom: 18px;
`;

const ListText = styled.Text`
  font-size: 17px;
  margin-left: 10px;
`;

export default class ArrowList extends Component {
  props: {
    icon: String,
    iconSize: Number,
    text: String,
  };
  state: {
    size: Number,
  };
  constructor(props) {
    super(props);
    this.state = {
      size: 23,
    };
    this.onPress = this.onPress.bind(this);
  }
  onPress() {
    showToast('功能开发中,敬请期待');
  }
  render() {
    const {size} = this.state;
    const {iconSize} = this.props;
    return (
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor={Global.grey}
        onPress={this.onPress}>
        <ListItem>
          <SvgUri
            svgXmlData={Icon[this.props.icon]}
            width={iconSize || size}
            height={iconSize || size}></SvgUri>
          <ListText>{this.props.text}</ListText>
          <SvgUri
            style={{position: 'absolute', right: '8%'}}
            svgXmlData={Icon.RightArrow}
            width={18}
            height={18}
            fill={Global.grey}></SvgUri>
        </ListItem>
      </TouchableHighlight>
    );
  }
}
