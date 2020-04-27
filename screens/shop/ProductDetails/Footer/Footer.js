import React, {useState} from 'react';
import {View} from 'react-native';
import {ButtonGroup, Button, CheckBox, Text} from 'react-native-elements';
import {styles} from './Footer.style';

const Footer = () => {
  const [isWishList, setIsWishList] = useState(false);

  const buttons = [
    {
      element: () => (
        <CheckBox
          center
          title="WishList"
          iconType="font-awesome"
          checkedIcon="heart"
          uncheckedIcon="heart"
          checked={isWishList}
          containerStyle={styles.wishBtn}
          onPress={() => setIsWishList(!isWishList)}
        />
      ),
    },
    'Add To Cart',
  ];
  return (
    <View style={styles.container}>
      <ButtonGroup
        buttons={buttons}
        containerStyle={{borderColor: 'transparent'}}
        buttonStyle={{backgroundColor: '#148cbf'}}
        textStyle={{color: '#fff'}}
      />
    </View>
  );
};

export default Footer;
