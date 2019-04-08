import React from 'react';
import { StyleSheet, View, Image, Text, Button, TouchableOpacity } from 'react-native';
type Props = {};
class Cabeca extends React.Component {
	constructor (props){
		super(props);
		this.state = {
		
		}
	}

	render(){
		if(this.props.vs==0){
			return (
				<View style={styles.main}> 
		            <TouchableOpacity onPress={() => this.props.onPress(0)}>
				         <Image source={require('../img/pedra_vs.png')}
				         style={styles.imagem}/>
			         </TouchableOpacity>
			         
		       	</View>		
    		);
		}else if(this.props.vs==1){
			return (
				<View style={styles.main}> 
		            <TouchableOpacity onPress={() => this.props.onPress(1)}>
				         <Image source={require('../img/spock_vs.png')}
				         style={styles.imagem}/>
			         </TouchableOpacity>
			         
		       	</View>		
    		);
		}else if(this.props.vs==2){
			return (
				<View style={styles.main}> 
		            <TouchableOpacity onPress={() => this.props.onPress(2)}>
				         <Image source={require('../img/tesoura_vs.png')}
				         style={styles.imagem}/>
			         </TouchableOpacity>
			         
		       	</View>		
    		);
		}else if(this.props.vs==3){
			return (
				<View style={styles.main}> 
		            <TouchableOpacity onPress={() => this.props.onPress(3)}>
				         <Image source={require('../img/lagarto_vs.png')}
				         style={styles.imagem}/>
			         </TouchableOpacity>
			         
		       	</View>		
    		);
		}else if(this.props.vs==4){
			return (
				<View style={styles.main}> 
		            <TouchableOpacity onPress={() => this.props.onPress(4)}>
				         <Image source={require('../img/papel_vs.png')}
				         style={styles.imagem}/>
			         </TouchableOpacity>
			         
		       	</View>		
    		);
		}
		return (
			<View style={styles.main}> 
	            <TouchableOpacity onPress={() => this.props.onPress(5)}>
			         <Image source={require('../img/reset.png')}
			         style={styles.imagem}/>
		         </TouchableOpacity>
		         
	       	</View>		
		);
		
	}
} 


	
const styles = StyleSheet.create({

	main: {
	  
	},
	
	 imagem:{ 
	 	height:80,
	 	width:80,
	 	resizeMode:'cover'
	},
	 

});



export default Cabeca;