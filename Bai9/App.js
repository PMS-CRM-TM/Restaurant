import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';

const options = [
  { icon: 'pizza-slice', label: 'PIZZA', type: 'font-awesome-5' },
  { icon: 'hamburger', label: 'BURGER', type: 'font-awesome-5' },
  { icon: 'cocktail', label: 'DRINK', type: 'font-awesome-5' },
  { icon: 'utensils', label: 'RICE', type: 'font-awesome-5' },
];
const HeaderComponent = () => {
  const [selectedOption, setSelectedOption] = useState('PIZZA');
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { label: 'BURGER', uri: 'https://cdn.glitch.global/329145d3-e63d-4380-a7c9-94ca08c159a2/Screenshot%202024-07-23%20225126.png?v=1721750911384'},
    { label: 'BURGER', uri: 'https://cdn.glitch.global/329145d3-e63d-4380-a7c9-94ca08c159a2/Screenshot%202024-07-23%20225126.png?v=1721750911384'}
  ];
  const popularItems = [
    { label: 'BURGER', uri: 'https://cdn.glitch.global/329145d3-e63d-4380-a7c9-94ca08c159a2/Screenshot%202024-07-23%20232140.png?v=1721751720167', time: '30 min', sales: '200 sell' },
    { label: 'PIZZA', uri: 'https://cdn.glitch.global/329145d3-e63d-4380-a7c9-94ca08c159a2/Screenshot%202024-07-23%20232146.png?v=1721751728342', time: '30 min', sales: '200 sell' },
    { label: 'BURGER', uri: 'https://cdn.glitch.global/329145d3-e63d-4380-a7c9-94ca08c159a2/Screenshot%202024-07-23%20232140.png?v=1721751720167', time: '30 min', sales: '200 sell' },
    { label: 'PIZZA', uri: 'https://cdn.glitch.global/329145d3-e63d-4380-a7c9-94ca08c159a2/Screenshot%202024-07-23%20232146.png?v=1721751728342', time: '30 min', sales: '200 sell' },
  ];
  const handleOptionPress = (label) => {
    setSelectedOption(label);
  };
  const handleScroll = (event) => {
    const slideWidth = Dimensions.get('window').width - 32; 
    const index = Math.floor(event.nativeEvent.contentOffset.x / slideWidth);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerTop}>
          <Image
            source={{ uri: 'https://cdn.glitch.global/329145d3-e63d-4380-a7c9-94ca08c159a2/Screenshot%202024-07-19%20210835.png?v=1721744756942' }}
            style={styles.profilePic}
          />
          <View style={styles.locationWrapper}>
            <View style={styles.locationContainer}>
              <Text style={styles.locationText}>Your Location</Text>
              <Text style={styles.locationPlace}>Savar, Dhaka</Text>
            </View>
          </View>
          <Icon name="bell" type="font-awesome" color="black" style={styles.notificationIcon} />
        </View>
        <View style={styles.searchBarContainer}>
          <Icon name="search" type="font-awesome" color="#ccc" style={styles.filterIcon} />
          <TextInput
            placeholder="Search your food"
            placeholderTextColor="#ccc"
            style={styles.searchInput}
          />
          <Icon name="sliders-h" type="font-awesome-5" color="#ccc" style={styles.filterIcon} />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.optionsContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.menuitem}>
          {options.map((option) => (
            <TouchableOpacity
              key={option.label}
              style={[
                styles.option,
                selectedOption === option.label && styles.selectedOption
              ]}
              onPress={() => handleOptionPress(option.label)}
            >
              <Icon name={option.icon} type={option.type} color={selectedOption === option.label ? '#fff' : '#000'} />
              <Text style={[styles.optionText, selectedOption === option.label && styles.selectedOptionText]}>
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View>
       <ScrollView
         horizontal={true} showsHorizontalScrollIndicator={false}
         onScroll={handleScroll}
       >
         {images.map((image, index) => (
           <View key={index} style={styles.imageContainer}>
             <Image source={{ uri: image.uri }} style={styles.image} />
           </View>
        ))} 
       </ScrollView>
       <View style={styles.dotsContainer}>
         {images.map((_, index) => (
           <View key={index} style={[styles.dot, currentIndex === index && styles.activeDot]} />
         ))}
       </View>
      </View>
      <View>
      <View style={styles.popularItemsContainer}>
        <Text style={styles.popularItemsTitle}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.popularItemsScrollView}
      >
        {popularItems.map((item, index) => (
          <View key={index} style={styles.popularItem}>
            <Image source={{ uri: item.uri }} style={styles.popularItemImage} />
            <Text style={styles.popularItemLabel}>{item.label}</Text>
            <Text style={styles.popularItemDetails}>{item.time} | {item.sales}</Text>
          </View>
        ))}
      </ScrollView>
      </View>
    </View>
    
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginTop: 10,
    backgroundColor: '#FEFFBF',
    padding: 16,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingBottom: 30,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  locationWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  locationContainer: {
    alignItems: 'center',
    flex: 1,
  },
  locationText: {
    fontSize: 12,
    color: '#888',
    marginRight: 5,
  },
  locationPlace: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  notificationIcon: {
    marginLeft: 'auto',
    color: "white",
  },
  searchBarContainer: {
    position: 'absolute',
    bottom: -30, 
    left: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4834d4',
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 15,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    marginLeft: 8,
    borderWidth: 0,
    backgroundColor: 'transparent', 
  },
  filterIcon: {
    marginLeft: 8,
    marginRight: 8,
  },
  optionsContainer: {
    marginTop: 50, 
    paddingHorizontal: 16,
  },

  option: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginHorizontal: 8,
    width:100,
    height: 100    
  },
  menuitem:{
    flexDirection: 'row',
     alignItems: 'flex-start',
  },
  selectedOption: {
    backgroundColor: '#29D697',
  },
  optionText: {
    marginTop: 5,
    color: '#000',
  },
  selectedOptionText: {
    color: '#fff',
  },
  popularItemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  popularItemsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  viewAllText: {
    fontSize: 16,
    color: '#29D697',
  },
  popularItemsScrollView: {
    paddingHorizontal: 16,
  },
  popularItem: {
    width: 150,
    marginRight: 16,
  },
  popularItemImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  popularItemLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  popularItemDetails: {
    fontSize: 14,
    color: '#888',
  },
  imageContainer: {
    width: Dimensions.get('window').width - 32,
    height: 200,
    marginHorizontal: 16,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },

  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',

  },
  activeDot: {
    backgroundColor: '#000',
  },
});

export default HeaderComponent;