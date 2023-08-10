import LandingPage from "./pages/LandingPage";
import ExcelDownload from "./pages/main_pages/ExcelDownload";
import ContentLayout from "./layouts/ContentLayout";

function App() {
  return (
    <>
      <ContentLayout>
        <ExcelDownload />
      </ContentLayout>
    </>
  );
}

export default App;
