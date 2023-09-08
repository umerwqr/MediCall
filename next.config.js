/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/login',
        destination: 'https://www.medicall.pk/medi-app-api/login', // Replace with the actual API URL
      },
      {
        source: '/api/register',
        destination: 'https://www.medicall.pk/medi-app-api/register-doctor', // Replace with the actual API URL
      },
      {
        source: '/api/update',
        destination: 'https://www.medicall.pk/medi-app-api/auth/doctor/profile/update', // Replace with the actual API URL
      },
      {
        source:'/api/getMcqs',
        destination:'https://www.medicall.pk/medi-app-api/get-subjects-for-mcqs'
      },
      {
        source:'/api/guideData',
        destination:'https://www.medicall.pk/medi-app-api/medistudy/med/guidelines/get'
      },
      {
        source:'/api/getGuide',
        destination:'https://www.medicall.pk/medi-app-api/medistudy/specialities/guidelines/get'
      },
      {
        source:'/api/get_past_paper/Medicine',
        destination:'https://www.medicall.pk/medi-app-api/past-papers/program/get'
      },
      {
        source:'/api/get_Core_Data',
        destination:'https://www.medicall.pk/medi-app-api/get-medistudy-core-list'
      }
    ];
  },
};