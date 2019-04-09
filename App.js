/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Header from './src/components/Header';
import Regra from './src/components/Regra';
import Cabeca from './src/components/Cabeca';
import CampoBatalha from './src/components/CampoBatalha';



type Props = {};
export default class App extends Component<Props> {

  constructor (props){
    super(props);
    this.state = {
      champ:5,
      bot:5,
      champScore:0,
      botScore:0
    }

  }

  escolheChamp(id){
    this.setState({ champ:id });
    this.escolheBot();
    
  }

  escolheBot(){
    val = Math.floor(Math.random() * 5);
    this.setState({
      bot: val}
      );
    this.vitoria();

  }

  vitoria(){

        if(this.state.champ == 0 && this.state.bot != 0){
          if(this.state.bot == 2||this.state.bot ==3 ){
            this.state.champScore++;
          }else{
            this.state.botScore++;
          }
        } 

        else if(this.state.champ == 1 && this.state.bot != 1){
          if(this.state.bot == 2||this.state.bot == 0 ){
            this.state.champScore++;
          }else{
            this.state.botScore++;
          }
        }

        else if(this.state.champ == 2 &&this.state.bot != 2){
          if(this.state.bot == 3||this.state.bot == 4 ){
            this.state.champScore++;
          }else{
            this.state.botScore++;
          }
        }

        else if(this.state.champ == 3 && this.state.bot != 3){
          if(this.state.bot == 4||this.state.bot == 1 ){
            this.state.champScore++;
          }else{
            this.state.botScore++;
          }
        }

        else if(this.state.champ == 4 && this.state.bot != 4){
          if(this.state.bot == 0||this.state.bot == 1 ){
            this.state.champScore++;
          }else{
            this.state.botScore++;
          }
        }

        


    
    
  }





  render() {
    
    return (
      <View style={styles.container}>
        <Header onPressReset={ () => {
          this.setState({ champScore:0, botScore:0 });
        }}
        />
        <Regra />
        <View style={styles.cabecalho}>
          <Cabeca vs={0} onPress={() => this.escolheChamp(0)}/>
          <Cabeca vs={1} onPress={() => this.escolheChamp(1)}/>
          <Cabeca vs={2} onPress={() => this.escolheChamp(2)}/>
          <Cabeca vs={3} onPress={() => this.escolheChamp(3)}/>
          <Cabeca vs={4} onPress={() => this.escolheChamp(4)}/>

        </View>
        
        <CampoBatalha champ = {this.state.champ} bot = {this.state.bot} champScore={this.state.champScore} botScore={this.state.botScore}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#5A00A2',

  },
  cabecalho:{
    flexDirection: 'row',
  }
  
});  
