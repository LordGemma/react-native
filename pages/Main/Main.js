import React from 'react';
import {View} from 'react-native';
import {Header, SearchBar} from 'react-native-elements';

import {styles} from './Main.style';
import CategoriesList from './CategoriesList/CategoriesList';
import Products from './Products/Products';

const Main = props => {
  return (
    <View>
      <Header
        leftComponent={{icon: 'menu', color: '#fff'}}
        centerComponent={{
          text: 'Ecommerce Store',
          style: {color: '#fff', fontSize: 18},
        }}
        rightComponent={{icon: 'shopping-cart', color: '#fff'}}
        containerStyle={{
          backgroundColor: '#148cbf',
          paddingTop: 0,
          height: 60,
          borderBottomWidth: 0,
        }}
      />
      <SearchBar
        placeholder="Search for products..."
        lightTheme
        round
        containerStyle={styles.searchWrap}
        inputContainerStyle={styles.search}
        searchIcon={{size: 30}}
        // onChangeText={this.updateSearch}
        // value={search}
      />
      <CategoriesList />
      <Products />
    </View>
  );
};

export default Main;
