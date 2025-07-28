import { StatusBar } from "expo-status-bar";
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View, FlatList } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Card from "../components/Card";
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from "react";


function HomeScreen({navigation}){
    const [selectedCategory, setSelectedCategory] = useState("Cappuccino");
    const categories = ["Cappuccino", "Macchiato", "Latte", "Americano", "Mochas"];

    // useEffect(() => {
    //     getItemList();
    // }, []);
    
    // const getItemList = () =>{
    //      const URL = "https://fakestoreapi.com/products";
    //      fetch(URL).then(res =>{
    //         return res.json()
    //      }).then(data =>{
    //         console.log(data);
    //      })
    // }

    const cardData = [
        {
            id: '1',
            imageSource: require('../assets/images/Frame1.png'),
            rating: '4.8',
            drinkName: 'Cappuccino',
            desc: 'with Chocolate',
            amount: '4.53',
        },
        {
            id: '2',
            imageSource: require('../assets/images/Frame2.png'),
            rating: '4.9',
            drinkName: 'Cappuccino',
            desc: 'with Oat Milk',
            amount: '3.90',
        },
        {
            id: '3',
            imageSource: require('../assets/images/Frame3.png'),
            rating: '4.5',
            drinkName: 'Cappuccino',
            desc: 'with Chocolate',
            amount: '4.53',
        },
        {
            id: '4',
            imageSource: require('../assets/images/Frame4.png'),
            rating: '4.0',
            drinkName: 'Cappuccino',
            desc: 'with Chocolate',
            amount: '4.53',
        },
        {
            id: '5',
            imageSource: require('../assets/images/Macchiato1.png'),
            rating: '4.5',
            drinkName: 'Macchiato',
            desc: 'Caramel',
            amount: '3.78',
        },
        {
            id: '6',
            imageSource: require('../assets/images/Macchiato2.png'),
            rating: '4.8',
            drinkName: 'Macchiato',
            desc: 'Iced',
            amount: '4.34',
        },
        {
            id: '7',
            imageSource: require('../assets/images/Macchiato3.png'),
            rating: '4.9',
            drinkName: 'Macchiato',
            desc: 'Hazelnut',
            amount: '4.53',
        },
        {
            id: '8',
            imageSource: require('../assets/images/Macchiato4.png'),
            rating: '4.6',
            drinkName: 'Macchiato',
            desc: 'Vanilla',
            amount: '4.53',
        },
        {
            id: '9',
            imageSource: require('../assets/images/Latte1.png'),
            rating: '4.7',
            drinkName: 'Latte',
            desc: 'Cinnamon',
            amount: '4.89',
        },
        {
            id: '10',
            imageSource: require('../assets/images/Latte2.png'),
            rating: '4.5',
            drinkName: 'Latte',
            desc: 'Vanilla',
            amount: '3.75',
        },
        {
            id: '11',
            imageSource: require('../assets/images/Frame3.png'),
            rating: '4.9',
            drinkName: 'Latte',
            desc: 'with Chocolate',
            amount: '4.53',
        },
        {
            id: '12',
            imageSource: require('../assets/images/Frame4.png'),
            rating: '4.8',
            drinkName: 'Latte',
            desc: 'with Chocolate',
            amount: '4.53',
        },
    ];

    const filteredData = cardData.filter(
        (item) => item.drinkName === selectedCategory
        );


    return(
        <>
        <StatusBar style="light" />
            <View style={styles.rootContainer}>
                <View style={styles.topContainer}>
                    <LinearGradient
                        colors={['#1e1c1cff', 'black']}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                        style={StyleSheet.absoluteFill}
                    />
                    <View style={styles.headerContainer}>
                        <View>
                            <Text style={styles.labelText}>Location</Text>
                            <Text style={styles.locationText}>Bilzen, Tanjungbalai v</Text>
                        </View>
                        <Pressable onPress={()=> navigation.navigate('Profile')}>
                            <Ionicons name="person-circle-outline" size={45} color='#fff'/>
                        </Pressable>
                    </View>
                    <View style={styles.searchContainer}>
                        <Ionicons name="search" size={25} color="#fff" />
                        <TextInput
                            placeholder="Search coffee"
                            placeholderTextColor="#aaa"
                            style={styles.searchInput}
                        />
                        <Pressable style={styles.optionButton}>
                            <Ionicons name="options" size={20} color="#fff" />
                        </Pressable>
                    </View>
                </View>
                <View style={styles.imgContainer}>
 
                    <View style={StyleSheet.absoluteFill}>
                        <View style={{ flex: 1, backgroundColor: 'black' }} />
                        <View style={{ flex: 1, backgroundColor: 'white' }} />
                    </View>

                    <Image
                        source={require('../assets/images/Frame.png')}
                        style={styles.promoCard}
                    />
                </View>

                <View style={styles.lightSection}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {categories.map((category) => (
                            <Pressable
                                key={category}
                                style={[
                                    styles.categoriesTab,
                                    selectedCategory === category && styles.selectedTab,
                                ]}
                                onPress={() => setSelectedCategory(category)}
                            >
                                <Text
                                    style={[
                                        styles.tabText,
                                        selectedCategory === category && styles.selectedTabText,
                                    ]}
                                >
                                    {category}
                                </Text>
                            </Pressable>
                        ))}
                    </ScrollView>
                </View>
                
                <View style={styles.lightSection2} >
                    <FlatList
                        style={{flex: 1,}}
                        data={filteredData}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <Card
                                imageSource={item.imageSource}
                                rating={item.rating}
                                drinkName={item.drinkName}
                                desc={item.desc}
                                amount={item.amount}
                                navigation={navigation}
                            />
                        )}
                        numColumns={2}
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 30 }}
                    />
                </View>
            </View>
        </>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        backgroundColor: '#fffefeff',
    },
     topContainer: {
        backgroundColor: '#191818ff',
        paddingTop: 60,
        paddingHorizontal: 30,
        paddingBottom: 10,
    },
    headerContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    labelText: {
        color: '#B7B7B7',
        fontSize: 12,
    },
    locationText: {
        color: '#fff',
        fontSize: 14,
    },
    locationContainer:{
        flexDirection: 'column'
    },
    profileText: {
        color: '#fff',
    },
    searchContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#292928ff',
        borderRadius: 10,
        paddingLeft: 12,
        paddingRight: 4,
        height: 56,
        marginTop: 10,
    },
    searchInput:{
        flex: 1,
        marginHorizontal: 2,
        color: '#fff',
    },
    optionButton:{
        backgroundColor: '#C67C4E',
        width: 45,
        height: 45,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
     lightSection: {
        marginHorizontal: 30,
        paddingTop:0,
    },
    lightSection2: {
        flex:1,
        paddingHorizontal: 30,
        paddingTop:10,
    },
    imgContainer:{ 
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
    },
    promoCard:{
        width: '85%',
        height: '85%',
        resizeMode: 'contain',
    },
    categoryScroll: {
        
    },
    categoriesTab:{
       backgroundColor: 'hsla(20, 60%, 98%, 1.00)',
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 12,
        marginRight: 10,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    selectedTab: {
        backgroundColor: '#c5845bef', 
    },
    tabText: {
        color: '#333',
        fontWeight: '500',
    },
    selectedTabText: {
        color: '#fff', 
        fontWeight: '700',
    }   
});