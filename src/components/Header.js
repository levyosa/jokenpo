import React from 'react';
import { StyleSheet, View, Image, Text, Button, TouchableOpacity } from 'react-native';

const Header = () => {

	return (
		<View style={styles.main}> 
          

	         <View style={{flex:1,flexDirection: 'row'}}>
			         <TouchableOpacity 
			         	onPress={() => alert("GAME")}>
				         <Text style={styles.text} >GAME</Text>
			         </TouchableOpacity>

			         <TouchableOpacity 
			         	onPress={() => alert("reset")}>
				         <Image source={require('../img/reset.png')}
				         style={{ width:40, height:40}}/>
			         </TouchableOpacity>
	         </View>
        </View>		
    );
}

const styles = StyleSheet.create({

	main: {
		
		backgroundColor: 'lime',
		flexDirection: 'row',
	},

	 text: {
	 	flex:1,
	 	fontSize:25,
	    color:'white',
	 },

});



export default Header;