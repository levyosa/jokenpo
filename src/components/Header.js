import React from 'react';
import { StyleSheet, View, Image, Text, Button, TouchableOpacity } from 'react-native';

const Header = () => {

	return (
		<View style={styles.main}> 
          

	         <View style={styles.barra}>

			         <TouchableOpacity onPress={() => alert("GAME")}>
				         <Text style={styles.game} >GAME</Text>
			         </TouchableOpacity>

			         <TouchableOpacity onPress={() => alert("reset")}>
				         <Image source={require('../img/reset.png')}
				         style={styles.reset}/>
			         </TouchableOpacity>

	         </View>
        </View>		
    );
}



const styles = StyleSheet.create({

	main: {
		alignSelf:'flex-start',
		backgroundColor: 'grey',
		flexDirection: 'row',
	},

	 game: {
	 	flex:1,
	 	fontSize:25,
	    color:'white',
	    fontWeight: 'bold',
	 },
	 reset:{ 
	 	width:40,
	  	height:40
	},
	 barra:{
	 	flex:1,
	 	flexDirection: 'row',
	 	justifyContent: 'space-between',
	 	paddingLeft:5,
	 	paddingRight:5,

	 },


});



export default Header;