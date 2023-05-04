import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Rodrigo Cabrera",
    location: "Buenos Aires, AR",
    email: "ContactoRodrigoCabrera@gmail.com",
    availability: "Open for work",
    brand:
      "I love looking for solutions to problems 💭. That is why I enjoy programming so much, because it allows me to think and create to solve a need. I am a detail 🔎 and I always focus on getting everything to work correctly 🎯. When I start a task, I do my best to ensure that every detail is of high quality and that the solution is effective. 💭",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
