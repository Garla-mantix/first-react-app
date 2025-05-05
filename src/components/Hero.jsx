'use client'

import { useState } from 'react'
import Card from "../components/card";
import screenshot1 from "../assets/typing-game.png";
import screenshot2 from "../assets/genesis-project.png";
import screenshot3 from "../assets/bank.png";

export default function Hero() {
  const [visa, setVisa] = useState(false);

  const toggleVisa = () => {
    setVisa(!visa);
  };

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              Take a look at some projects
            </h1>
            <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl">
              These are some of the small projects we have been doing lately.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={toggleVisa}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {visa ? 'Hide Projects' : 'Show Projects'}
              </button>
            </div>
          </div>

          {visa && (
            <div className="mt-10 text-center">
              <div className="mt-6 space-y-8">
                <Card 
                  name="Typing game" 
                  screenshot={screenshot1} 
                  github="https://github.com/Garla-mantix/js-seventh-assignment.git" 
                  tech="Javascript + CSS + HTML" 
                  func="A fun little game that makes you spell random words against the clock." 
                  lesson="Taught me to use user input to affect the backend and show it back on the screen." 
                  role="Solo project" 
                  challenge="Randomizing words to create re-playability, creating an up to date score-tracker and timer, putting user input to use." 
                />
                
                <Card 
                  name="Genesis project" 
                  screenshot={screenshot2} 
                  github="https://github.com/Garla-mantix/genesis-portfolio.git" 
                  tech="Javascript + SCSS" 
                  func="A functional website for a portfolio." 
                  lesson="Taught me to execute a design from Figma and make it into a reality."
                  role="Solo project" 
                  challenge="Recreating design from Figma, making a dynamic user experience with responsive design." 
                />

                <Card 
                  name="Bank app" 
                  screenshot={screenshot3} 
                  github="https://github.com/Garla-mantix/js-fifth-assignment.git" 
                  tech="Javascript + HTML" 
                  func="A simple banking app that allows you to deposit and withdraw money from your account."
                  lesson="Taught me to display the effects of user input." 
                  role="Solo project" 
                  challenge="Using the most basic tools to create a functioning app with an intuitive user experience." 
                />
              </div>
            </div>
          )}
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
