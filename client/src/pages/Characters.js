import React from "react"
import AppNav from "../components/Navbar"
import DreamgirlsChars from "../components/Characters/Dreamgirls"
import HadestownChars from "../components/Characters/Hadestown"
import HamiltonChars from "../components/Characters/Hamilton"
import HeathersChars from "../components/Characters/Heathers"
import LastFiveChars from "../components/Characters/LastFive"

const Characters = () => {

    return (
      <>
        <AppNav />

        <DreamgirlsChars />

        <HadestownChars />

        <HamiltonChars />

        <HeathersChars />

        <LastFiveChars />

        {/* <LesMisChars /> */}

        {/* <PhantomChars /> */}

        {/* <RentChars /> */}

        {/* <SweeneyChars /> */}

        {/* <WickedChars /> */}

      </>
    );
  }
  
export default Characters;