import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../screen/styles';
import Logo from '../assets/icon/Logo.svg';
import Button from './Button';
import Quote from '../assets/icon/quote.svg';
import LinearGradient from 'react-native-linear-gradient';

const Homepage = () => {
  return (
    <>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/icon/images.png')}
          style={styles.mainImage}
          resizeMode="cover"
        />
        <View style={styles.overlay}>
          <Quote />
          <Text style={styles.testimonial}>
            'Brass with the sub-accountsfeature , make it easy to segment our
            cash and in turn optimise it for targeted goals'
          </Text>
          <View>
            <Logo style={{left: 4}} />
            <Text style={styles.ceoName}> Faranmi Ajetunmobi , CEO </Text>
          </View>
        </View>
      </View>
      <View style={styles.todaysContainer}>
        <Text style={styles.title}>Built for today's </Text>
        <Text style={styles.title}> ambitious businesses</Text>
        <Text style={styles.description}>
          Thousands of forward-thinking businesses rely on Brass everyday to
          turbo-charge theri business financial operations{' '}
        </Text>
      </View>
      <View style={styles.loginView}>
        <Button text={'Login to my account'} buttonStyle={{width: 350}} />
        <Text>
          Don't have an account?{' '}
          <Text style={{color: 'green'}}>Create Account</Text>
        </Text>
      </View>
    </>
  );
};

// });

export default Homepage;
