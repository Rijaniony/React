import React,{useEffect,useState}from 'react'
import {View, Text,StyleSheet,ImageBackground,Animated} from 'react-native';
import { colors } from '../screens/global/styles';
import {resto} from '../screens/global/resto';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';


const RestaurantsHeader = () => {
    const index2 = 10 //variable sur l'icon coeur

    const currentValue = new Animated.Value(1)
    const [liked,setLiked]= useState(false) //lorsqu'on click sur l'icon coeur ca donne like
    
    const [counter,setCounter] = useState (-2)
    const [visible,setVisible] = useState(false)
    const navigation = useNavigation  ();//pour accéder à la navigation
    const likeHandle = () => {
        if(liked == false)
            setVisible(true)
        
        setLiked(!liked)
        setCounter(index2)
    }
    
    const {
            control, 
            handleSubmit, 
            formState:{errors},
        } = useForm();

    useEffect (()=>{ //lorsqu'on click sur le coeur ca donne cet effet
            if(liked == true){
                Animated.spring(currentValue,{
                    toValue :3,
                    friction:2,
                    useNativeDriver:true
                }).start(()=>{
                    Animated.spring(currentValue,{
                        toValue :1,
                        friction:2,
                        useNativeDriver:true
                }).start(()=>{
                    setVisible(false)
                })
            })
        }
    },[liked])

    return(
        <View style={styles.container}>
            <ImageBackground
                style={styles.container}
                source = {require("../screens/images/LaGastro.png")}
                imageStyle = {styles.image}
            >

             <View style= {styles.view1}>
                <View style ={styles.view2}>
                    <Icon //icon de retour sur la page precedente
                        name='arrow-left'
                        type='material-community'
                        color={colors.black}
                        size = {25}
                        onPress ={()=>navigation.goBack()}

                    />
                </View>
                <View style={styles.view3}>
                    <Icon //icon coeur
                            name= {liked && (index2 == counter)? "favorite":"favorite-border"}
                            type='material'
                            color='red'
                            size = {30}
                            onPress ={likeHandle}

                    />
                </View>
             </View>

             <View style={styles.view4}> 
                {visible && (index2 ==counter) &&
                    <Animated.View style={{transform:[{scale:currentValue}]}}> 
                        <Icon
                            name='favorite'
                            size={40}
                            color="red"
                            type='material'
                        />
                    </Animated.View>
                }
             </View>                       
            
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        height:150,
    },
    image:{
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
    },
    view1:{
        flexDirection:'row',
        alignItems:"baseline",
        justifyContent:"space-between",
    },
    view2:{
        margin:10,
        width:40,
        height:40,
        backgroundColor:colors.cardbackground,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20,
    },
    view3:{
        marginTop:0,
        margin:10,
        width:40,
        height:40,
        backgroundColor:colors.cardbackground,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20,
    },
    view4:{
        marginTop:0,
        alignItems:"center",
        justifyContent:"center",
    },
})
export default RestaurantsHeader;