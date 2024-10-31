import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  return <>
    <MainNavigation />
    <main>
      <h1>Error 404: Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </main>
  </>
}

export default ErrorPage;