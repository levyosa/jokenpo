import React from 'react';
import { StyleSheet, View, Image, Text, Button, TouchableOpacity } from 'react-native';
type Props = {};
class Retrato extends React.Component {
	constructor (props){
		super(props);
		this.state = {
		
		}
	}

	render(){
		if(this.props.vs==0){
			return (
				<View style={styles.main}> 
				         <Image source={require('../img/pedra_vs.png')}
				         style={styles.imagem}/>
			         
		       	</View>		
    		);
		}else if(this.props.vs==1){
			return (
				<View style={styles.main}> 
				         <Image source={require('../img/spock_vs.png')}
				         style={styles.imagem}/>
			         
		       	</View>		
    		);
		}else if(this.props.vs==2){
			return (
				<View style={styles.main}> 
				         <Image source={require('../img/tesoura_vs.png')}
				         style={styles.imagem}/>
			         
		       	</View>		
    		);
		}else if(this.props.vs==3){
			return (
				<View style={styles.main}> 
				         <Image source={require('../img/lagarto_vs.png')}
				         style={styles.imagem}/>
			         
		       	</View>		
    		);
		}else if(this.props.vs==4){
		return (
			<View style={styles.main}> 
			         <Image source={require('../img/papel_vs.png')}
			         style={styles.imagem}/>
		         
	       	</View>		
		);
	}
	return(
	<View>
		<Image source={require('../img/reset.png')}
			         style={styles.imagem}/>
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



export default Retrato;