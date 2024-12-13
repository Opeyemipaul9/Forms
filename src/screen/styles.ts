import {Dimensions, StyleSheet} from 'react-native';
import {LinearGradient} from 'react-native-svg';

const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  main: {
    marginLeft: 19,
    marginRight: 19,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 7,
    paddingRight: 7,
    marginBottom: 30,
    width: 351,
  },
  progressFull: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  bottomProgressFull: {
    width: screenWidth,
    flexDirection: 'row',
  },
  bottomProgressWidth: {
    width: '22%',
    height: 3,
  },
  activeBottom: {
    backgroundColor: 'green',
  },
  inactiveBottom: {
    backgroundColor: '#d9d9d9',
  },

  progressWidth: {
    width: '18%',
    borderRadius: 7,
    height: 3,
  },
  inactive: {
    backgroundColor: '#d9d9d9',
  },
  active: {
    backgroundColor: 'green',
  },
  firstText: {
    fontSize: 15,
    lineHeight: 23,
    letterSpacing: -0.12,
    color: '#50555E',
    fontWeight: 'bold',
  },
  miniContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    // marginRight: 20,
    // marginLeft: 20,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  identityText: {
    fontSize: 18,
    color: '#1A1C1F',
    // fontWeight: 'bold',
    // marginLeft: 88,
    // marginRight: 73,
    textAlign: 'center',
    fontFamily: 'MatterSQ-Regular',
  },
  about: {
    color: '#50555E',
    lineHeight: 21,
    letterSpacing: -0.12,
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'MatterSQ-Regular',
  },
  upload: {
    gap: 15,
    marginLeft: 19,
    marginRight: 68,
    width: 338,
    marginTop: 30,
  },
  innerUpload: {
    gap: 5,
  },
  valid: {
    fontSize: 13,
    lineHeight: 21,
    letterSpacing: -0.12,
    color: '#656B76',
    fontFamily: 'MatterSQ-Regular',
  },
  support: {
    fontSize: 10,
    letterSpacing: -0.06,
    lineHeight: 15,
    color: '#50555E',
    fontFamily: 'MatterSQ-Regular',
  },
  file: {
    width: 149,
    height: 60,
    backgroundColor: '#F9FAFA',
    padding: 10,
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textFile: {
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: -0.11,
    color: '#656B76',
    fontFamily: 'MatterSQ-Regular',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 58,
    borderRadius: 8,
    backgroundColor: 'black',
    // marginLeft: 24,
    // marginRight: 24,
    // width: 100,
  },

  buttonSecond: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 58,
    borderRadius: 8,
    backgroundColor: '#F9FAFA',
  },
  buttonSecondText: {
    fontSize: 14,
    color: '#1A1A1A',
    lineHeight: 23,
    letterSpacing: -0.12,
  },

  buttonText: {
    fontSize: 14,
    color: '#F9FAFA',
    lineHeight: 23,
    letterSpacing: -0.12,
  },
  inputContainer: {
    gap: 15,
    marginLeft: 19,
    marginRight: 19,
    marginTop: 40, // optional //
  },
  checkContianer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  checkStyle: {
    marginRight: 10,
  },
  modalStyle: {
    justifyContent: 'flex-end',
    // alignItems: 'center',
    // height: 200,
  },
  modalView: {
    // height: 550,
    // width: 430,
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: 'white',
    // flex: 1,
    paddingTop: 20,
    marginBottom: -15,
    paddingBottom: 25,
    // borderWidth: 2,
    // borderColor: 'red',
    width: screenWidth,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  left: {
    fontSize: 12,
    // letterSpacing: -0.12,
    lineHeight: 22,
    color: '#7B828E',
    // marginRight: -10,
  },
  testimonial: {
    fontSize: 15,
    color: '#FFFFFF',

    marginBottom: 10,
    letterSpacing: -0.39,
    fontWeight: 'light',
  },
  ceoName: {
    fontSize: 12,
    color: '#FFF',
  },
  overlay: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    marginBottom: 10,
    gap: 15,
    width: 325,
    // backgroundColor: LinearGradient( 135deg , or)
  },

  mainImage: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: screenWidth,
    height: 520,
    position: 'relative',
    backgroundColor: 'yellow',
  },

  todaysContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  description: {
    fontSize: 13,
    color: '#656b76',
    textAlign: 'center',
    width: 378,
    lineHeight: 22,
    letterSpacing: -0.12,
  },
  loginView: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  biometricView: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 80,
    gap: 15,
  },
  inputParent: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
  },
  labelInput: {
    marginBottom: 10,
    color: '#979797',
  },
  input: {
    color: '#1A1A1A',
    flex: 1,
  },
  labelContainer: {
    padding: 10,
    backgroundColor: '#f9fafa',
    borderRadius: 8,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomCotainer: {
    justifyContent: 'flex-end',
    flex: 1,
  },
});

export default styles;
