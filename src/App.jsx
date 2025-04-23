import Portfolioproject from "./components/Portfolioproject"
import screenshot1 from "./assets/typing-game.png";
import screenshot2 from "./assets/genesis-project.png";
import screenshot3 from "./assets/bank.png";

function App() {

  return (
    <div>
      <Portfolioproject name="Typing game" screenshot={screenshot1} github="https://github.com/Garla-mantix/js-seventh-assignment.git" 
      tech="Javascript + CSS + HTML" func="A fun little game that makes you spell random words against the clock." 
      lesson="Taught me to use user input to affect the backend and show it back on the screen." role="Solo project" 
      challenge="Randomizing words to create re-playability, creating an up to date score-tracker and timer, putting user input to use." />

      <Portfolioproject name="Genesis project" screenshot={screenshot2} github="https://github.com/Garla-mantix/genesis-portfolio.git" 
      tech="Javascript + SCSS" func="A functional website for a portfolio." lesson="Taught me to execute a design from Figma and make it into a reality."
      role="Solo project" challenge="Recreating design from Figma, making a dynamic user experience with responsive design." />

      <Portfolioproject name="Bank app" screenshot={screenshot3} github="https://github.com/Garla-mantix/js-fifth-assignment.git" 
      tech="Javascript + HTML" func="A simple banking app that allows you to deposit and withdraw money from your account."
      lesson="Taught me to display the effects of user input." role="Solo project" 
      challenge="Using the most basic tools to create a functioning app with a intuitive user experience." />
    </div>
  )
}

export default App
