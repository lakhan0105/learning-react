import { PageTitle } from "./components/PageTitle";
import { SearchBar } from "./components/SearchBar";
import { PhotosContainer } from "./components/PhotosContainer";

function App() {
  return (
    <main>
      <PageTitle></PageTitle>
      <SearchBar></SearchBar>
      <PhotosContainer></PhotosContainer>
    </main>
  );
}

export default App;
