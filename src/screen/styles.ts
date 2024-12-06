import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  main: {
    marginLeft: 19,
    marginRight: 19,
    gap: 30,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressFull: {
    width: 392,
    flexDirection: 'row',
  },

  progressfirst: {
    width: 70,
    backgroundColor: '#108e43',
    borderRadius: 7,
    height: 3,
    marginRight: 6,
  },
  progressSecond: {
    width: 65,
    backgroundColor: '#d9d9d9',
    borderRadius: 7,
    height: 3,
    marginRight: 6,
  },
  firstText: {
    fontSize: 15,
    lineHeight: 23,
    letterSpacing: -0.12,
    color: '#50555E',
  },
  miniContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 7,
  },
  identityText: {
    fontSize: 18,
    color: '#1A1C1F',
    lineHeight: 26,
    letterSpacing: -0.2,
    fontWeight: '600',
    fontFamily: 'MatterSQRegular',
  },
  about: {
    color: '#50555E',
    lineHeight: 21,
    letterSpacing: -0.12,
    fontSize: 14,
  },
  upload: {
    gap: 10,
    marginLeft: 19,
    marginRight: 68,
    width: 338,

    marginTop: 30,
  },
  innerUpload: {
    gap: 5,
  },
  valid: {
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: -0.12,
    color: '#656B76',
  },
  support: {
    fontSize: 10,
    letterSpacing: -0.06,
    lineHeight: 15,
    color: '#50555E',
    fontFamily: 'MatterSQ-Bold',
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
    fontSize: 15,
    lineHeight: 19,
    letterSpacing: -0.11,
    color: '#656B76',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 58,
    borderRadius: 8,
    backgroundColor: 'black',
    marginTop: 70,
    marginLeft: 24,
    marginRight: 24,
  },
  buttonText: {
    fontSize: 16,
    color: '#F9FAFA',
    lineHeight: 23,
    letterSpacing: -0.12,
  },
  inputContainer: {
    gap: 15,
    marginLeft: 19,
    marginRight: 19,
    marginTop: 60,
  },
  checkContianer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  checkStyle: {
    marginRight: 10,
  },
});

export default styles;
