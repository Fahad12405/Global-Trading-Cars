import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    './src/**/*.{js,jsx,ts,tsx}',  // Adjust this according to your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
