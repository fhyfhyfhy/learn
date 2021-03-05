import React, {Component} from 'react';
import styled from 'styled-components';

const Icons = styled.View`
  margin-top: 60px;
  flex-direction: row;
  justify-content: space-between;
`;

const Icon = styled.View`
  padding: 8px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #d9d9d9;
`;

const IconImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 100%;
`;

export default class IconList extends Component {
  state = {
    icons: [
      {
        uri: 'https://s3.ax1x.com/2021/02/22/y7OSZd.png',
      },
      {
        uri: 'https://s3.ax1x.com/2021/02/22/y7xvE4.png',
      },
      {
        uri: 'https://s3.ax1x.com/2021/02/22/y7xXbF.png',
      },
      {
        uri: 'https://s3.ax1x.com/2021/02/22/y7xxUJ.png',
      },
    ],
  };
  render() {
    return (
      <Icons>
        {this.state.icons.map((v, i) => (
          <Icon key={i}>
            <IconImage source={{uri: v.uri}} />
          </Icon>
        ))}
      </Icons>
    );
  }
}
