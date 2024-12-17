import React from 'react';
import {View, Text, Dimensions} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);

const Box = ({rightComponent, TextPrimary, leftComponent, TextSecondary}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F9FAFA',
        borderRadius: 8,
        flexDirection: 'row',
        gap: 5,
        height: 95,
        paddingRight: 10,
        paddingLeft: 10,
        marginBottom: 20,
      }}>
      {rightComponent}
      <View style={{gap: 5, width: 261}}>
        <Text STYLE={{fontSize: 16, color: '#1A1A1A'}}>{TextPrimary}</Text>
        <Text style={{color: '#50555E', fontSize: 13}}>{TextSecondary}</Text>
      </View>
      {leftComponent}
    </View>
  );
};

export default Box;
