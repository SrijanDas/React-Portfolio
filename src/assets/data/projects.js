import ProjectImg from "../images/projectImg.png";
// import AmazonCloneImg from "../images/amazon-clone.jpg";
import SocialsImg from "../images/socials.jpg";
import GroceryStoreImg from "../images/grocery-store.jpg";
// import CavinImg from "../images/cavinimg.jpg";
import ImageClassificationImg from "../images/image_class.png";
import UsedCarPriceImg from "../images/car_price.png";
import SalaryPredImg from "../images/sal_pred.png";

const projects = [
  {
    id: 1,
    name: "Social Media Website",
    category: "webdev",
    desc: "A Website to connect with people and chat with them.",
    img: SocialsImg,
    tags: ["MongoDb", "Express", "React", "Node", "Firebase", "Heroku"],
    code: "https://github.com/SrijanDas/socials-ui",
    demo: "https://socials-2bccb.web.app/",
  },
  {
    id: 2,
    name: "Grocery Store Management System",
    category: "webdev",
    desc: "This webapp helps to manage orders and products of a grocery store.",
    img: GroceryStoreImg,
    tags: ["React", "Python", "Flask", "MySql", "Heroku", "Firebase"],
    code: "https://github.com/SrijanDas/Grocery-Store-App-UI",
    demo: "https://github.com/SrijanDas/Grocery-Store-App-UI",
  },
  // {
  //   id: 3,
  //   name: "RChat",
  //   category: "webdev",
  //   desc: "A webapp where you can chat with friends and family.",
  //   img: CavinImg,
  //   tags: ["React", "Firebase"],
  //   code: "#",
  //   demo: "#",
  // },
  // {
  //   id: 4,
  //   name: "E-Commerce Website",
  //   category: "webdev",
  //   desc: "ecommerce website",
  //   img: CavinImg,
  //   tags: ["React", "Django"],
  //   code: "#",
  //   demo: "#",
  // },
  {
    id: 5,
    name: "Used Car Price Prediction",
    category: "ml",
    desc: "Helps you to calculate price of a used car with the help of machine learning.",
    img: UsedCarPriceImg,
    tags: ["Python", "Flask", "Machine Learning", "Heroku"],
    code: "https://github.com/SrijanDas/used-car-price-prediction",
    demo: "https://used-car-price-predic.herokuapp.com/",
  },
  {
    id: 6,
    name: "Movie Recommender",
    category: "ml",
    desc: "This website recommends you movies based on your search history.",
    img: ProjectImg,
    tags: ["Python", "Flask", "Machine Learning", "Heroku"],
    code: "#",
    demo: "#",
  },
  {
    id: 7,
    name: "Sports Person Classifier",
    category: "ml",
    desc: "Classifies images of sports persons.",
    img: ImageClassificationImg,
    tags: ["Python", "Flask", "Machine Learning", "JavaScript", "Heroku"],
    code: "https://github.com/SrijanDas/Sports-person-image-classification",
    demo: "https://sports-person-classify.netlify.app/",
  },
  {
    id: 8,
    name: "Developer Salary Prediction",
    category: "ml",
    desc: "Predicts the salary of developers based on some factors.",
    img: SalaryPredImg,
    tags: ["Python", "Machine Learning", "Streamlit", "Heroku"],
    code: "#",
    demo: "#",
  },
];

export default projects;
