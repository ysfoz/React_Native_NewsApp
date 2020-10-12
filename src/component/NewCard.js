import React from 'react';
import { SafeAreaView, View,Text,FlatList,StyleSheet,Image, Dimensions } from 'react-native';



const NewCard = ({news}) =>{

    return(
        <View style = {styles.container}>
            <Image
                source ={{uri:news.imageUrl}}
                style={styles.image}
            />
            <Text style={styles.title}>{news.title}</Text>
            <Text style={styles.desc}>{news.description}</Text>

        </View>
        )}
export {NewCard};

const styles = StyleSheet.create({
    container:{
        flex:1,
        borderWidth: 1,
        borderColor:'#eceff1',
        padding:5,
        margin:5,
        borderRadius:5,
    },
    title:{
        fontWeight:'bold',
        fontSize:17
    },
    image:{
        height:Dimensions.get('window').height *0.3,
        borderRadius:10,
    }

})