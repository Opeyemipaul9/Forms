import {Dimensions, StyleSheet} from 'react-native';
import {LinearGradient} from 'react-native-svg';

const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  main: {
    marginLeft: 20,
    marginRight: 20,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  progressFull: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 30,
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
  placeholderstyle: {
    fontSize: 16,
    color: '#979797',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#979797',
  },
  iconStyle: {
    width: 25,
    height: 25,
    color: 'black',
  },
  dropdowncontainer: {
    backgroundColor: '#f9fafa',
    padding: 10,
    height: 60,
    justifyContent: 'center',
    borderRadius: 8,
  },
  dropdown: {
    borderColor: 'gray',
    borderRadius: 8,
  },
  inputSearchStyle: {
    height: 40,
    borderRadius: 8,
    fontSize: 16,
  },
  pdfView: {
    marginTop: 30,
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    height: 60,
  },
  pdfimage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 20,
    top: 10,
  },
  pdfmini: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
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
    color: '#black',
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
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'MatterSQ-Regular',
  },
  upload: {
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

  modeText: {
    fontSize: 11.5,
    color: '#656b76',
  },
  texts: {
    fontSize: 15,
    fontWeight: '500',
    left: -5,
  },
  inputContainer: {
    gap: 10,
  },

  checkBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150,
  },
  politicalContainer: {
    gap: 5,
    marginTop: 30,
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
  sucessContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  sucessView: {
    alignItems: 'center',
    width: 259,
    gap: 10,
  },
  verifyContainer: {
    alignItems: 'center',
    marginTop: 50,
    gap: 5,
  },
  textSuccess: {
    color: 'black',
    fontWeight: '700',
  },
  codeBoxContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
  textBox: {
    fontSize: 35,
    color: '#1A1C1F',
    lineHeight: 38,
  },
  codeBox: {
    height: 60,
    width: 48,
    backgroundColor: '#F9FAFA',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
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
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  biometricView: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 200,
    gap: 15,
  },
  inputParent: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
  },
  inputView: {
    padding: 10,
    backgroundColor: '#f9fafa',
    borderRadius: 8,
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelInput: {
    marginBottom: 10,
    color: '#979797',
  },
  textBiometric: {
    color: '#656b76',
    fontSize: 12,
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
