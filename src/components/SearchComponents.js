import React, {useState,useRef} from 'react'
import {View, Text,StyleSheet,TouchableWithoutFeedback, Modal, TextInput, FlatList, Keyboard} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import { colors } from '../screens/global/styles';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useForm, Controller} from 'react-hook-form';
import {Data} from '../screens/global/Data';
import filter from 'lodash/filter';

const SearchComponents = () => {
    //const [Data,setData] = useState([...Data])
    const [modalVisible ,setModalVisible] = useState(false)
    const [textInputFossued, setTextInputFossued] = useState(true)
    const textInput = useRef(0);
    const navigation = useNavigation();//pour accéder à la navigation
    
    //fonction qui va parametrer les noms des produits
    //lorsque la personne entre un nom du produit,on va tester si c'est parmi les noms des produits deja dans Data
    const contains = ({name},query)=>{
        if(name.includes(query)){
            return true
        }
        return false
    }

    //fonction qui va gérer la recherche
    const handleSearch = text => {
        const dataS = filter(Data, userSearch =>{ //dataS est un array avec des objets de Data
                                            //il va filtrer les elements qui se trouve dans Data et mettre dans le variable userSearch
            return contains(userSearch, text)
        })
       setData([...dataS])
    }
    
    
    const {
            control, 
            handleSubmit, 
            formState:{errors},
        } = useForm();


    return (
        <View style={{alignItems:'center'}}>
            <TouchableWithoutFeedback
                onPress={()=>(
                    setModalVisible(true)
                )}
            >
                <View style ={styles.SearchArea}>
                    <Icon
                        name = 'search'
                        style = {styles.searchIcon}
                        type = "material"
                        iconStyle = {{marginLeft:5}}
                        size = {32}
                    />

                    <Text style={{fontSize:15}}>What are you looking for?</Text>
                
                </View>

            </TouchableWithoutFeedback>
            
            <Modal //concernant la barre de recherche
                animationType='fade'
                transparent = {false}
                visible = {modalVisible}
            >
                <View style = {styles.modal}>
                    <View style={styles.view1}>
                        <View style={styles.TextInput}>
                            <Animatable.View
                                animation = {textInputFossued ? "fadeInRight" : "fadeInLeft"}
                                duration = {400}
                            >
                                <Icon name= {textInputFossued ? "arrow-back":"search"}
                                        onPress = {()=>{
                                            if(textInputFossued)
                                            setModalVisible(false)
                                            setTextInputFossued(true)
                                        }}
                                        style ={styles.icon2}
                                        type = "material"
                                        iconStyle={{marginRight:5}}
                                />
                            </Animatable.View>

                            <TextInput
                                style = {{width:'50%'}}
                                placeholder = " "
                                autoFocus = {false}
                                ref = {textInput}

                                onFocus = {() => {
                                    setTextInputFossued(true)
                                }}

                                onBlur = {() => {
                                    setTextInputFossued(false)
                                }}

                                onChangeText = {handleSearch}

                            />

                            <Animatable.View
                                 animation = {textInputFossued ? "fadeInLeft" : "fadeInRight"}
                                 duration = {400}
                            >
                                <Icon name= {textInputFossued ? "cancel":null}
                                        style ={{marginRight:10}}
                                        type = "material"
                                        iconStyle= {{color:colors.grey3}}
                                        onPress = {()=>{
                                            textInput.current.clear()
                                            //handleSearch()
                                        }}
                                        
                                />
                            </Animatable.View>
                            
                        </View>
                    </View>
                
                    <FlatList //on va mettre dans FlatList tout ce qui sont dans Data.js pour faire une liste dans recherche
                            //il se comporte comme une boucle
                            data = {Data}
                            renderItem = {({item,index})=>(
                                <TouchableOpacity
                                    onPress={()=>{
                                        Keyboard.dismiss
                                        navigation.navigate("RestaurantsSearchScreen",{item:item.name})
                                        setModalVisible(false)
                                        setTextInputFossued(true)
                                    }} > 
                                    <View style={styles.view2}>
                 
                                            <Text style={{color:colors.grey2, fontSize:15}}>{item.name}</Text> 
                                        
                                    </View>
                                </TouchableOpacity>   
                            )}

                            keyExtractor={item => item.id}
                    />
                </View>
            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex:1,
    },
    text1:{
        color:colors.grey3,
        fontSize:16,
    },
    TextInput:{
        borderWidth:1,
        borderRadius:12,
        marginHorizontal:0,
        borderColor: "#86939e",
        flexDirection: "row",
        justifyContent:"space-evenly",
        alignContent:"center",
        alignItems:"center",
        paddingLeft:10,
        paddingRight:10,
    },
    SearchArea:{
        marginTop:10,
        width:"94%",
        height:50,
        backgroundColor:colors.grey5,
        borderRadius:12,
        borderWidth:1,
        borderColor:colors.grey4,
        flexDirection:"row",
        alignItems:"center",
        
    },
    searchIcon:{
        fontSize:24,
        padding:5,
        color:colors.grey2,
    },
    view1:{
        height:70,
        justifyContent:"center",
        paddingHorizontal:10,
    },
    view2:{
        flexDirection:'row',
        padding:15,
        alignItems:"center",
    },
    icon2:{
        fontSize:24,
        padding:5,
        color:colors.grey2,
    },
    modal :{
        flex:1,
    }
})
export default SearchComponents;