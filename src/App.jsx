import GlobalStyles from "./GlobalStyles/GlobalStyles";
import ContactCard from "./Components/ContactCard/ContactCard";
import AI from "./assets/img/AI.png";
import TableCom from "./Components/ButtonSolu/Tablecom";

function App() {
  return (
    <>
      {" "}
      <div>
        <ContactCard avatarSrc={AI} name={"AI"} email={"AI@gmail.com"} />
      </div>
      <TableCom/>
      <GlobalStyles />
    </>
  );
}



export default App;