import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddMeetUps from "./pages/AddMeetUps";
import Favorites from "./pages/Favorites";
import { MeetupsContextProvider } from "./strore/meetups-context";

const App = () => {
  return (
    <MeetupsContextProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-meetup" element={<AddMeetUps />} />
          <Route path="favorites" element={<Favorites />} />
        </Routes>
      </Layout>
    </MeetupsContextProvider>
  );
};

export default App;

/* 
#192819
#2c4928
#2e6409
#719b25
#cbe368
 */

/* 
#006f7a
#cc3035
#e66a6d
#d89288
#e2dcd1
 */
