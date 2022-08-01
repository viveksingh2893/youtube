import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  Button,
  TextInput,
  Dimensions,
  Alert,
  View,
} from 'react-native';
import YouTube from 'react-native-youtube';

const {width,height}=Dimensions.get('window')

const App= () => {
  const [url, seturl]=useState('d_19YqwNVYw')


  var id = url.slice(1).split("&")[0].split("=")[1]

  const onPress=()=>{
    seturl('')
  }


  return (
    <View stye={styles.container}>
      <YouTube
        videoId={url} // The YouTube video ID
        play // control playback of video with true/false
        // fullscreen
        loop // control whether the video should loop when ended
        apiKey='AIzaSyBVCZtF-JEjDtiLMSou1zfQjwwQoZA3XaA'
        style={{ alignSelf: 'center', width:width, height: 300}}
      />
      <View style={styles.url}>
        <TextInput
            style={styles.input}
            placeholder='enter YouTube URL'
            placeholderTextColor='lightgrey'
            onChangeText={(text) => seturl(text)}
            multiline={true}
            value={url}
            autoCompleteType='off'
          />
        <View style={{flexDirection:'row', width:width, justifyContent:'space-around', marginTop:(20/812)*height}}>
          <Button title='Update YouTube URL' color='green' onPress={()=>seturl(id)} />
          <Button title='Clear URL' color='red' onPress={onPress} />
        </View>
          
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  },
  url:{
    width: '100%',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginTop: 5,
  },
  input: {
    width: (350/375)*width,
    height: (40/812)*height,
    padding: 5,
    margin: 5,
    borderWidth: 1,
    borderColor: 'grey',
    borderStyle: 'solid',
    borderRadius: 3
  },
});

export default App;
