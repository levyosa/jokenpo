import React from 'react';
import { StyleSheet, View, Image, Text, Button, TouchableOpacity } from 'react-native';
type Props = {};
class Regra extends React.Component {
	constructor (props){
		super(props);
		this.state = {
			imagem: 0,
		}
	}


	mudaImagem(){
		if(this.state.imagem==0){
			this.setState({
				imagem:1,
			});
		
		}else{
			
			this.setState({
				imagem:0,
			});
		}
		
	}

	render(){
		if (this.state.imagem==0) {
			return(
				<View style={styles.main}> 
		             <TouchableOpacity onPress={() => this.mudaImagem()}>
				         <Image source={require('../img/regra_p.png')}
				         style={styles.imagem}/>
			         </TouchableOpacity>
		         
	        </View>	
			);	
		}else{
			return (
				<View style={styles.main}> 
		            <TouchableOpacity onPress={() => this.mudaImagem()}>
				         <Image source={require('../img/regra.png')}
				         style={styles.imagem}/>
			         </TouchableOpacity>
			         
		       	</View>		
    		);
		}
	}
} 



const styles = StyleSheet.create({

	main: {
	  	
	  	height:250,
	 	width:400,
		backgroundColor:'white',
	 	margin:10,

	},
	 imagem:{ 
	 	height:250,
	 	width:400,
	 	resizeMode:'stretch',
	},
	 

});



export default Regra;