/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}",
  "./src/index.html", "./index.html"],
  theme: {
    backgroundColor:  theme => ({ ...theme('colors'), 
        'primary': '#CC2D4A', 
        'secondary': '#8FA206', 
        'tertiary': '#61AEC9', 
      }),
      textColor:  theme => ({ ...theme('colors'), 
        'primary': '#CC2D4A', 
        'secondary': '#8FA206', 
        'tertiary': '#61AEC9', 
      }),
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      },
    extend: {
      backgroundImage: { 
        'sanFrancisco': "url('https://firebasestorage.googleapis.com/v0/b/travel-8ec65.appspot.com/o/sanFrancisco.jpg?alt=media&token=b21d6b32-950d-422e-b7fe-bbf56f671fae')", 
        'sanFranciscoDesktop': "url('https://firebasestorage.googleapis.com/v0/b/travel-8ec65.appspot.com/o/sanFranciscoDesktop.jpg?alt=media&token=a56b6363-0a4a-4976-a9a7-0a936c510aac')", 
        'yosemite': "url('https://firebasestorage.googleapis.com/v0/b/travel-8ec65.appspot.com/o/yosemite.jpg?alt=media&token=c476eb7d-5dbc-42ad-ab2f-d587daa9075b')", 
        'LA': "url('https://firebasestorage.googleapis.com/v0/b/travel-8ec65.appspot.com/o/LA.jpg?alt=media&token=472b39bc-a882-4c55-b641-aa3ed7399cec')", 
        'seattle': "url('https://firebasestorage.googleapis.com/v0/b/travel-8ec65.appspot.com/o/seattle.jpg?alt=media&token=0f8630dd-0d50-4025-8bb5-3ec2bf0d52e1')", 
        'new_york': "url('https://firebasestorage.googleapis.com/v0/b/travel-8ec65.appspot.com/o/new_york.jpg?alt=media&token=176e1fe8-b2e7-461e-a9c3-249ba4f46f9d')", 
        'norway': "url('https://firebasestorage.googleapis.com/v0/b/travel-8ec65.appspot.com/o/norway.jpg?alt=media&token=20e526a2-4eb9-4e97-976d-7448ca26ce15')", 
        'sydney': "url('https://firebasestorage.googleapis.com/v0/b/travel-8ec65.appspot.com/o/sydney.jpg?alt=media&token=702d855c-55b2-49f3-a79b-778d60b0a60b')", 
        'miami': "url('https://firebasestorage.googleapis.com/v0/b/travel-8ec65.appspot.com/o/miami.jpg?alt=media&token=731b4ca8-58e5-40df-b27e-d458a9c41c4c')",
        'switzerland': "url('https://firebasestorage.googleapis.com/v0/b/travel-8ec65.appspot.com/o/switzerland.jpg?alt=media&token=a9ba936c-e324-41d8-bd99-0ab18f65aef6')", 
        'bali': "url('https://firebasestorage.googleapis.com/v0/b/travel-8ec65.appspot.com/o/bali.jpg?alt=media&token=5a729e20-328b-4f9b-9253-c27472646b1c')", 
        'chicago': "url('https://firebasestorage.googleapis.com/v0/b/travel-8ec65.appspot.com/o/chicago.jpg?alt=media&token=9f4f68a1-6529-426e-bdc8-bdca5c4b06be')", 
        'europe': "url('https://firebasestorage.googleapis.com/v0/b/travel-8ec65.appspot.com/o/europe.jpg?alt=media&token=f4ec185b-dbb7-4766-af76-b9bbde03c97d')", 
        'iceland': "url('https://firebasestorage.googleapis.com/v0/b/travel-8ec65.appspot.com/o/iceland.jpg?alt=media&token=5dd32b84-56e4-4dbf-a226-25fe9d841e0f')",
      }
    },
  },
  plugins: [],
}
