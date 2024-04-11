import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import Alexa from "./images/alexa.png";
import Cortana from "./images/cortana.png";
import Siri from "./images/siri.png";

function App() {
  return (
    <div>
        <section className="hero is-primary">
            <div className="hero-body">
                <p className="title">Personal digital Assistants</p>
            </div>
        </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
            <ProfileCard title="Alexa" handle="@alesa11" image={Alexa} description="Alexa was created by Amazome "/>
            </div>
            <div className="column is-4">
            <ProfileCard title="Cortana" handle="@cortana22" image={Cortana} description="Coratana was made by Microsoft"/>
            </div>
            <div className="column is-4">
            <ProfileCard title="Siri" handle="@Siri33" image={Siri} description="Siri made by apple "/>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default App;
