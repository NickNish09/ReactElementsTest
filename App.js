import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, View, Icon, DeckSwiper, Card, CardItem, Thumbnail, Content, Footer, FooterTab, Button, Left, Right, Body, Text } from 'native-base';

export default class App extends Component {

    state = { contacts: [] };

    componentWillMount() {

        axios.get('http://192.168.1.126:3000/contacts')
            .then(response => this.setState({ contacts: response.data }));
    }

    renderContacts() {
        console.log(this.state.contacts);
    }
    renderContactsList() {
        return this.state.contacts.map(contact =>
            <Card>
                <CardItem header>
                    <Icon name="contact" />
                        <Text>{contact.name}</Text>
                    <Right>
                        {contact.gender == "female" ? (
                            <Icon name="md-female" />
                        ) : (<Icon name="md-male" />
                        )}
                    </Right>
                </CardItem>
                <CardItem>
                    <Icon active name="md-mail" />
                    <Text>Email: {contact.email}</Text>
                </CardItem>
                <CardItem>
                    <Icon active name="md-calendar" />
                    <Text>Aniversário: {contact.birthdate}</Text>
                </CardItem>
                <CardItem>
                    <Icon active name="logo-octocat" />
                    <Text>Idade: {contact.age} anos</Text>
                </CardItem>
                <CardItem>
                    <Icon active name="ios-briefcase" />
                    <Text>Curso: {contact.course}</Text>
                    <Right>
                        <Text>Semestre: {contact.semester}</Text>
                    </Right>
                    </CardItem>
            </Card>
        );
    }

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
                    {this.renderContacts()}
                    {this.renderContactsList()}
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

var styles = StyleSheet.create({
    flexStyle: {
        flex: 1
    }
});