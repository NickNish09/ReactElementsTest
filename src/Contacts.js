import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, View, Icon, DeckSwiper, Card, CardItem, Thumbnail, Content, Footer, FooterTab, Button, Left, Right, Body, Text } from 'native-base';


export default class Contacts extends Component {

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
            <Card key={contact.id}>
                <CardItem
                    header
                    button
                    style={{borderBottomWidth: 1,borderColor: "#d2d4d8"}}
                    onPress={() => {
                        console.log(contact);
                        // axios.get('http://192.168.1.126:3000/contacts'+"/"+contact.id)
                        //     .then(response => this.setState({ contacts: response.data }));
                    }
                    }
                >
                    <Icon name="contact" style={{fontSize: 30}} />
                    <Text style={styles.boldStyle}>{contact.name}</Text>
                    <Right>
                        {contact.gender == "female" ? (
                            <Icon name="md-female" />
                        ) : (<Icon name="md-male" />
                        )}
                    </Right>
                </CardItem>
                <Body style={{alignItems: 'flex-start'}}>
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
                </Body>
            </Card>
        );
    }

    render() {
        return (
            <Container>
                <Content contentContainerStyle={{padding: 5}}>
                    {this.renderContacts()}
                    {this.renderContactsList()}
                </Content>
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