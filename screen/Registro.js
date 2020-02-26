import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body,Button, Item, Label, Input,Icon } from 'native-base';

export default class CardHeaderFooterExample extends Component {
  render() {
    return (
      <Container>
       
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
          <Header />
          
            <CardItem >
              <Body>
               <Button iconLeft>
            <Icon type =  'FontAwesome' name = 'facebook-official' />
            <Text>facebook</Text>
             <Button style={{backgroundColor: 'skyblue'}}>
             <Icon type =  'FontAwesome' name = 'twitter' />
            <Text>twitter</Text>
            
          </Button>
          </Button>
              <Item inlineLabel>
              <Icon type = 'FontAwesome' name = 'user'></Icon> 
              <Input placeholder= "Nombre" />
            </Item>
            <Item inlineLabel>
              <Icon type = 'FontAwesome' name = 'user-o'></Icon> 
              <Input placeholder= "Nombre de usuario" />
            </Item>

            <Item inlineLabel>
              <Icon type = 'MaterialIcons' name = 'email'></Icon> 
              <Input placeholder= "Correo" />
            </Item>

            <Item inlineLabel last>
              <Icon type = 'FontAwesome' name = 'lock'></Icon> 
              <Input placeholder="contraseña" />
            </Item>


              </Body>
            </CardItem>
            <CardItem footer bordered>
            <Button primary style ={misEstilos.boton}><Text>Ingresar</Text></Button>
            </CardItem>
         </Card>
        </Content>

             </Container>

    );
  }
}

const misEstilos=StyleSheet.create({
  content:{
    flex: 1,
    justifyContent: 'center',
},
  boton:{
    marginLeft: "70%"
  },
});
