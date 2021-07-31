import ProjectImg from "../images/projectImg.png";
import UTrackerImg from "../images/utracker.jpg";
import GreenCtgImg from "../images/greenctg.jpg";
import CoinTrackerImg from "../images/cointracker.jpg";
import CavinImg from "../images/cavinimg.jpg";

const projects = [
  {
    id: 1,
    name: "Amazon Clone",
    category: "webdev",
    desc: "This website is a clone of amazone.",
    img: UTrackerImg,
  },
  {
    id: 2,
    name: "Social Media Website",
    category: "webdev",
    desc: "A Website to connect with people and chat with them.",
    img: GreenCtgImg,
  },
  {
    id: 3,
    name: "Grocery Store Management System",
    category: "webdev",
    desc: "This webapp helps to manage orders and products of a grocery store.",
    img: CoinTrackerImg,
  },
  {
    id: 4,
    name: "React Chat App",
    category: "webdev",
    desc: "A webapp where you can chat with friends and family.",
    img: CavinImg,
  },
  {
    id: 5,
    name: "Used Car Price Prediction",
    category: "ml",
    desc: "Helps you to calculate price of a used car with the help of machine learning.",
    img: ProjectImg,
  },
  {
    id: 6,
    name: "Movie Recommender",
    category: "ml",
    desc: "This website recommends you movies based on your search history.",
    img: ProjectImg,
  },
];

export default projects;
