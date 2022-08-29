import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'
import CustomButton from '../CustomButton/CustomButton'
import {SocialIcon} from "react-native-elements"
const SocialSignInButtons = () => {
    
     /*fonction lorsque connection avec fb */
     const onSignInFacebook = () => {
        console.warn("onSignInFacebook");
    };

    /*fonction lorsque connection avec google */
    const onSignInGoogle = () => {
        console.warn("onSignInGoogle");
    };

    return(
        <View>
             <SocialIcon
                title ="Sign In with Facebook"
                onPress={onSignInFacebook} /*lorsqu'on presse le boutton Sign in se sera cette fonction onSignInPressed qui va etre executer */
                bgColor = "#E7EAF4"
                fgColor= "#4765A9"
                type= "facebook"
                button
                style={styles.SocialIcon}

            />
            {/*<CustomButton
                text="Sign In with google"
                onPress={onSignInGoogle} /*lorsqu'on presse le boutton Sign in se sera cette fonction onSignInPressed qui va etre executer */
                /*bgColor = "#FAE9EA"
                fgColor= "#DD4D44"
                
            />*/}

        </View>
    );
};

const styles = StyleSheet.create({
    SocialIcon:{
        borderRadius: 15,
        
        height: 50,
        

    },
});
export default SocialSignInButtons;