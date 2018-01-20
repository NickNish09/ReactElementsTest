import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Title, View, DeckSwiper, Card, CardItem, Thumbnail, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class App extends Component {
    render() {
        return (
            <Container>
                <Header style={{backgroundColor: 'purple'}}
                        androidStatusBarColor='#b769c6'
                >
                    <Left style={{flex: 1}}>
                        <Button transparent
                        >
                            <Icon name='menu'
                                color='#ffffff'
                            />
                        </Button>
                    </Left>
                    <Body style={{alignItems: 'center',flex: 1}}>
                        <Title >First App</Title>
                    </Body>
                    <Right style={{flex: 1}}>
                        <Button transparent>
                            <Icon name='home'
                                  color='#ffffff'
                            />
                        </Button>
                    </Right>
                </Header>
                <Content contentContainerStyle={{alignItems: 'center',padding: 5}}>
                    <Image
                        style={{marginTop: 15}}
                        source={require('./src/img/concentro.png')}/>
                </Content>
                <Footer >
                    <FooterTab style={{backgroundColor: 'purple'}}>
                        <Button>
                            <Icon name="apps"/>
                        </Button>
                        <Button>
                            <Icon name="camera" />
                        </Button>
                        <Button>
                            <Icon active name="navigate" />
                        </Button>
                        <Button>
                            <Icon name="person" />
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}