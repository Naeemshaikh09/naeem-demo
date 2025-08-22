import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      appName: 'HealthLock',
      ctaSecure: 'Secure My Health Records',
      login: 'Login',
      patient: 'Patient',
      doctor: 'Doctor',
      admin: 'Admin',
      emergency: 'Emergency',
      uploadRecord: 'Upload Record',
      shareAccess: 'Share Access',
      revokeAccess: 'Revoke Access',
    },
  },
  hi: {
    translation: {
      appName: 'हेल्थलॉक',
      ctaSecure: 'मेरे स्वास्थ्य रिकॉर्ड सुरक्षित करें',
      login: 'लॉगिन',
      patient: 'मरीज़',
      doctor: 'डॉक्टर',
      admin: 'प्रशासक',
      emergency: 'आपातकाल',
      uploadRecord: 'रिकॉर्ड अपलोड करें',
      shareAccess: 'एक्सेस साझा करें',
      revokeAccess: 'एक्सेस रद्द करें',
    },
  },
}

i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export default i18next