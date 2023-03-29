import FQA from "./Components/FQA/FQA";
import LoginForm from "./Components/Login/login";
import GlobalStyles from "./GlobalStyles/GlobalStyles";
import ContactCard from "./Components/ContactCard/ContactCard";
function App() {
  return (
    <>
      {" "}
      <div>
        <FQA
          question="What does “CSS” stand for?"
          answer="Cool Styling StrategyI've built so many little FAQ components over the years.
           Let's convert this one! The “CSS” tab should be empty, by the time you're finished.
          Note: You don't need to import styled, it's already in scope!"
        />
        {/* <LoginForm /> */}
        <ContactCard  avatarSrc={require('./assets/img/client.png')} name={"Johnnie"} email={"Johnnedom1@gmail.com"} />
      </div>

      <div>
       
      </div>
      <GlobalStyles/>
      
    </>
  );
}

export default App;
