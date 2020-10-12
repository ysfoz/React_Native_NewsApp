import React from 'react';
import {ScrollView,Image,Dimensions, View,Text, Platform} from 'react-native';



const banner_data = [
    {
      id: 0,
      text: 'Best Prime Day 2020 Alexa',
      imageUrl:
        'https://cnet4.cbsistatic.com/img/7bnQrNgv4FtUTWdPZYO29fufx-A=/1200x630/2019/11/20/0aff1d1e-92fc-4b88-aee5-850c550e09a6/cnet-black-friday-best-buy-echo-show-5.jpg',
    },
    {
      id: 1,
      text: 'Stocks After Amazon',
      imageUrl:
        'https://s.wsj.net/public/resources/MWimages/MW-GP644_MicroS_ZG_20180906154215.jpg',
    },
    {
      id: 2,
      text: "Levi's Most Popular Jeans",
      imageUrl:
        'https://s.yimg.com/os/creatr-uploaded-images/2020-10/e9b733b0-09cf-11eb-bfce-a2a6e6d17fa5',
    },
    {
      id: 3,
      text: 'Social Security Benefits?',
      imageUrl:
        'https://s.marketwatch.com/public/resources/images/MW-IQ535_ss_pay_ZG_20201009111853.jpg',
    },
    {
      id: 4,
      text: 'Columbus Day and Veterans Day',
      imageUrl: 'https://images.mktw.net/im-242755/social',
    },
  ];

const Banner = () => {
    return(
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {
      banner_data.map(banner_item => {
        return (
            <View>
          <Image
            source={{uri: banner_item.imageUrl}}
            style={{
              width: Dimensions.get('window').width * 0.9,
              height: Dimensions.get('window').height / 4,
              margin: 5,
              borderRadius: 5,
              position:'relative'
            }}
          />
          <Text
          style = {{
              color:'azure',
              position:'absolute',
              top: Platform.OS == 'android' ? 150 : 200,
              left:20,
              fontSize:16,
              backgroundColor:'rgba(111,111,111,0.3)'
          }}
          >{banner_item.text}</Text>
          </View>
        )
      })
      }
    </ScrollView>
  
    )}

    export {Banner}
