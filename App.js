import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, View, Icon, DeckSwiper, Card, CardItem, Thumbnail, Content, Footer, FooterTab, Button, Left, Right, Body, Text } from 'native-base';
import { Tabs } from './src/Router.js';
import Contacts from './src/Contacts.js';
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
                <Tabs />
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