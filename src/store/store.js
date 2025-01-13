import {create} from 'zustand';

const businessStore = create(set => ({
  business: [],
  businessForm: {
    state: '',
    city: '',
    landmark: '',
    description: '',
    industry: '',
    companyType: '',
    name: '',
    address: '',
    phone: 0,
    utility: '',
    email: '',
  },
  setBusinessForm: businessFormValues => {
    set(state => ({
      businessForm: {...state.businessForm, ...businessFormValues},
    }));
  },
  addBusiness: () =>
    set(state => ({
      business: [...state.business, state.businessForm],
      businessForm: {
        city: '',
        landmark: '',
        description: '',
        industry: '',
        companyType: '',
        name: '',
        address: '',
        phone: 0,
        utility: '',
        email: '',
      },
    })),
  personal: [],
  personalInfo: {
    nationality: '',
    gender: '',
    dob: '',
    bvn: '',
    politics: false,
  },
  setPersonalInfo: personalValues => {
    set(state => ({personalInfo: {...state.personalInfo, ...personalValues}}));
  },
  identity: {
    idType: '',
    idNumber: '',
    file: '',
    passport: '',
  },
  setIdentity: identityValues => {
    set(state => ({identity: {...state.identity, ...identityValues}}));
  },
}));

export default businessStore;
