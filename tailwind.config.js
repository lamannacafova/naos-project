/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        screens:{
          xs:"200px",
          sm: '300px',
          xmd: '550px',
          md: '768px',
          lmd: '992px',
          lg: '1024px',
          xl: '1280px',
          "2xl":'1400px',
          '2xsm': '375px',
          xsm: '425px',
          '3xl': '2000px',
        }
      },
      colors:{
       grey:"#C7CACE",
       lightBlack:"#444A51",
       gray:"#ECEFF2",
       grayColor:"#ACACAC",
       blue:"#009BC7",
       lightgray:"#757575",
       blackColor:"#040404",
       blackText:"#101010",
       greyColor:"#9CA3AF"
      },
      backgroundColor:{
       lightBlue:"#6BACC8",
       red:"#DB3333",
       greyBg:"#EEE",
       orange:"#FFC52D",
       grayBg:"#E5DAD4",
       blueBg:"#009BC7",
      },
      fontFamily:{
        poppins:['Poppins', "sans-serif"]
      }
    },
  },
  plugins: [],
}