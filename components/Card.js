import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

function Card({imageSource, rating, drinkName, desc, amount}){
    return(
        <View style={styles.rootContainer}>
            <View style={styles.imgContainer}>
                <Image source={imageSource} style={styles.img}/>
                <View style={styles.ratingContainer}>
                    <Ionicons name="star" size={10} color='#feab04ff' />
                    <Text style={styles.starText}>{rating}</Text>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.itemTitle}>{drinkName}</Text>
                <Text style={styles.itemDesc}>{desc}</Text>
                <View style={styles.subContainer}>
                    <Text style={styles.amountText}>${amount}</Text>
                    <Pressable style={styles.button}>
                    <Ionicons name="add-sharp" size={15} color="white"/>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    rootContainer:{
        backgroundColor: '#fdfcfbef',
        borderRadius: 12,
        width: '48%',
        marginTop: 25,
        marginBottom: 5
    },
    imgContainer:{
        position: 'relative'
    },
    img:{
        width: '100%',
        height: 140,
        borderRadius: 12,
    },
    ratingContainer:{
        position: 'absolute',
        backgroundColor: '#333131ff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 9,
        paddingVertical: 7,
        borderTopLeftRadius: 12,
        borderBottomRightRadius: 14,
        elevation: 2
    },
    starText:{
        fontSize: 10,
        color: '#fff'
    },
    container:{},
    itemTitle:{
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        marginHorizontal: 10,
        color:'#312e2eff',
        letterSpacing: 0.4
    },
    itemDesc:{
        fontSize:  11,
        fontWeight: '500',
        color: '#b3ababff',
        marginHorizontal: 10,
        marginTop: 3
    },
    subContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',
        padding: 10
    },
    amountText:{
        fontSize: 17,
        fontWeight: '500',
        color: '#312e2eff',
    },
    button:{
        backgroundColor: '#c5845bef',
        width: 30,
        height: 30,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    }
});