import React from 'react';
import { StyleSheet, View, Image, Text, Button, TouchableOpacity } from 'react-native';

const Regra = () => {

	return (
		<View style={styles.main}> 
          

	         <View style={styles.container}>

			         <TouchableOpacity onPress={() => alert("REGRA")}>
				         <Image source={require('../img/regra.png')}
				         style={styles.imagem}/>
			         </TouchableOpacity>

	         </View>
        </View>		
    );
} 

// const MudaImagem = () => {
// 			int flag = 0;
// 			if(flag==0){
// 				flag=1;
// 				return	'../img/regra.png');
// 			}
// 			else if(flag==1){
// 				flag = 0;
// 				return	'../img/regra_p.png';
				
// 			} 
// }

const styles = StyleSheet.create({

	main: {
		

		flexDirection: 'column',
	},
	 imagem:{ 
	 	width:400,
	  	height:350
	},
	 container:{  
	 	flexDirection: 'column',
	 	borderRadius: 4,
	 	   borderWidth: 4,
	 	   borderColor: 'black',
	 	   
	 	

	 },


});



export default Regra;