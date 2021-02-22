import React from "react"
import AppNav from "../components/Navbar"
import DreamgirlsChars from "../components/Characters/Dreamgirls"
import HadestownChars from "../components/Characters/Hadestown"
import HamiltonChars from "../components/Characters/Hamilton"
import HeathersChars from "../components/Characters/Heathers"
import LastFiveChars from "../components/Characters/LastFive"
import LesMisChars from "../components/Characters/LesMis"
import PhantomChars from "../components/Characters/Phantom"
import RentChars from "../components/Characters/Rent"
import SweeneyChars from "../components/Characters/Sweeney"
import WickedChars from "../components/Characters/Wicked"

const styles = {
  headline: {
    textAlign: "center",
    maxWidth:"85%",
    boxShadow:"0 0 20px 1px #555",
    margin:"auto",
    marginTop:"40px",
    marginBottom:"20px",
    padding: "20px",
    backgroundColor:"WhiteSmoke",
    border:"5px solid black",
    borderRadius:"5px"
  },
};

const Characters = () => {

    return (
      <>
        <AppNav />

        <header className="header">
          <h2 style={styles.headline}>Explore characters from different shows! 
            If one catches your fancy, click their name. 
            We'll make them your spirit animal and alter ego!</h2>
        </header>

        <DreamgirlsChars />

        <HadestownChars />

        <HamiltonChars />

        <HeathersChars />

        <LastFiveChars />

        <LesMisChars />

        <PhantomChars />

        <RentChars />

        <SweeneyChars />

        <WickedChars />

      </>
    );
  }
  
export default Characters;