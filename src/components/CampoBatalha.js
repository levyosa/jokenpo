import React from 'react';
import { StyleSheet, View, Image, Text, Button, TouchableOpacity } from 'react-native';
import Cabeca from './Cabeca';
import Retrato from './Retrato';
type Props = {};
class CampoBatalha extends React.Component {
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
		
			return(
				<View style={styles.main}> 

	             	<View style={styles.banner}>
			         <Image source={require('../img/bar_versus2.png')} style={styles.banner}/>
			     	</View>

			     	<View style={styles.versus}>
			     		<Retrato />
			     		<Image source={require('../img/versus.png')} style={styles.versusImg}/>
			     		<Retrato />
			     	</View>
			     	<Text>a</Text>

				    
			        	
			        
	       		 </View>	
			);	
		
	}
} 



const styles = StyleSheet.create({

	main: {
		flexDirection:'column',
	  	backgroundColor:'white',
	 	margin:10,
	},
	banner:{ 
	 	height:70,
	 	width:400,
	 	marginBottom:20
	 	
	},
	versus:{
		flex:1,
		flexDirection:'row',
		justifyContent:'center',
		backgroundColor:'blue'

	},

	placar:{

	},
	versusImg:{
		flex:1,
		maxHeight:70,
	 	maxWidth:100,

	}
	 

});



export default CampoBatalha;