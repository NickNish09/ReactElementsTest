import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, View, Icon, DeckSwiper, Card, CardItem, Thumbnail, Content, Footer, FooterTab, Button, Left, Right, Body, Text } from 'native-base';
import Contacts from './src/Contacts';

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
            <Content contentContainerStyle={{padding: 5}}>
                <Contacts/>
            </Content>
                <Footer>
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
                        <Button active>
                            <Icon name="person" />
                        </Button>
                        </FooterTab>
                </Footer>
            </Container>
        );
    }
}

var styles = StyleSheet.create({
    flexStyle: {
        flex: 1
    },
    boldStyle:{
        fontWeight: 'bold',
        fontSize: 20
    }
});