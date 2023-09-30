import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <section className="bg-slate-900 flex-grow">
        <div className="container mx-auto px-6">
          <h1>Hello world</h1>
        </div>
      </section>
    </div>
  );
}

export default App;
