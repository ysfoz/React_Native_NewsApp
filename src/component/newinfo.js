import React from 'react';
import { SafeAreaView, View,Text,FlatList } from 'react-native';
const Myarr = [1,2,3,4,4,5,6,7]
const News = () => {
        const renderData = (data) => <Text style= {{fontSize: 30 }}>{data.item}</Text>
    return(
        <SafeAreaView>
            {/* flat lsit ile ekrana bastigimiz verileri map ilede basabilirdik
            ama o zaman tum veriler ayni anda ekrana basilacagi icin buyuk vrlerde 
            cok fala yavaslama olur. ama flatlist ile ekrana boyutuna gore veri uretilr
            mesela ekran 50 tane veri aliyorsa, bu seklde ilk larak 100 ane veri olusturulur, sonrasinda 
            ekran kaydirildikca diger veriler uretilir.  */}

            <FlatList
            data ={Myarr}
            renderItem={(data) => <Text style= {{fontSize: 30 }}>{data.item}</Text>}
            />
            {/* her iki flatlist te ayni islemi yapiyor ama alttaki gibi
            fonksiyon olarak ust kisimda tanimlamak performans acisindan daha iyi */}
            <FlatList
            data = {Myarr}
            renderItem = {renderData}
            />

        </SafeAreaView>
    )
}

export default News;