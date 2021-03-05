import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {inject} from 'mobx-react';
import styled from 'styled-components';
import Back from '../../components/back';
import Button from './components/button';
import global from '../../utils/global';

const Background = styled.View`
  flex: 1;
  background-color: white;
`;

const Head = styled.View`
  margin-top: ${global.StatusBarHeight}px;
  flex-direction: row;
  height: 56px;
`;

const Container = styled.View`
  padding: 0 5%;
`;

const Title = styled.Text`
  text-align: center;
  font-size: 22px;
  font-weight: 600;
`;

const Form = styled.View`
  margin: 20px 0;
`;

const InputContainer = styled.View`
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.05);
`;

const Label = styled.View`
  height: 50px;
  flex: none;
  flex-basis: 50px;
  justify-content: center;
`;

const Input = styled.TextInput`
  flex: auto;
  padding: 0;
  font-size: 15px;
`;

class FormItem extends Component {
  render() {
    return (
      <InputContainer>
        <Label>
          <Text style={{fontSize: 15}}>{this.props.label}</Text>
        </Label>
        <Input {...this.props}></Input>
      </InputContainer>
    );
  }
}

@inject('Store')
export default class Index extends Component {
  state: {
    phone: String,
    password: String,
    loading: Boolean,
  };
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  /**
   * 登录
   */
  async handleSubmit() {
    try {
      const {phone, password} = this.state;
      this.setState({loading: true});
      await this.props.Store.login({phone, password});
      console.log('success');
    } finally {
      this.setState({loading: false});
    }
  }

  render() {
    return (
      <Background>
        <Head>
          <Back navigation={this.props.navigation}></Back>
        </Head>
        <Container>
          <Title>手机号登录</Title>
          <Form>
            <FormItem
              label="+86"
              placeholder="请输入手机号"
              value={this.state?.phone ?? ''}
              maxLength={11}
              keyboardType="phone-pad"
              onChangeText={(text) => this.setState({phone: text})}></FormItem>
            <FormItem
              label="密码"
              placeholder="请输入密码"
              value={this.state?.password ?? ''}
              maxLength={15}
              keyboardType="visible-password"
              onChangeText={(text) =>
                this.setState({password: text})
              }></FormItem>
          </Form>
          <Button
            top="10"
            text="登 录"
            onPress={this.handleSubmit}
            loading={this.state.loading}></Button>
        </Container>
      </Background>
    );
  }
}
