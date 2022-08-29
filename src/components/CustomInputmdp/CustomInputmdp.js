import React from "react";
import {View, Text, TextInput,StyleSheet} from 'react-native'

/*Pour recevoir la valeur entrée dans le TextInput*/
const CustomInputmdp = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <TextInput 
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={true} /*masquer le mdp*/
            />
            
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        backgroundColor:'white',
        width:'100%',

        borderColor:'#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal:10,
        marginVertical:5,
    },
    input:{

    },
});
export default CustomInputmdp;