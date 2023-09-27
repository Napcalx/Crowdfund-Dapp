import CreateCampaign from "./component/CreateCampaign";
import Header from "./component/Header";
import GetCampaign from "./hooks/getCampaign";


function App() {
    return (
        <div className="App">
            <Header />
            <main className="mt-10">
                <CreateCampaign />
                <GetCampaign />
            </main>
        </div>
    );
}

export default App;
