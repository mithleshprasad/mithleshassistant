import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import giphy from './assists/giphy.gif'
import Mithlesh from './assists/mithlesh.jpeg'
const MithleshAssistant = () => {
  const [content, setContent] = useState("Click the button to speak");
  const [userName, setUserName] = useState("Mithlesh");

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) setUserName(storedName);
    speak(`Initializing Mithlesh Assistant for ${storedName || "you"}...`);
    wishMe();
  }, []);

  const speak = (text) => {
    const textSpeak = new SpeechSynthesisUtterance(text);
    textSpeak.rate = 1;
    textSpeak.volume = 1;
    textSpeak.pitch = 1;
    window.speechSynthesis.speak(textSpeak);
  };

  const wishMe = () => {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 12) {
      speak(`Good Morning ${userName}...`);
    } else if (hour >= 12 && hour < 17) {
      speak(`Good Afternoon ${userName}...`);
    } else {
      speak(`Good Evening ${userName}...`);
    }
  };

  const tellJoke = async () => {
    try {
      const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
      const data = await response.json();
      const joke = data.joke;
      speak(joke);
      setContent(joke);
    } catch (error) {
      speak("Sorry, I couldn't fetch a joke for you.");
      setContent("Error fetching joke.");
    }
  };

  const takeCommand = (message) => {
    if (message.includes("hey") || message.includes("hello")) {
      speak(`Hello ${userName}, how may I assist you?`);
    } else if (message.includes("your name")) {
      speak(`I am you Assistant  ${userName}, your virtual AI helper.`);
    } else if (message.includes("joke")) {
      tellJoke();
    }else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
      } else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening YouTube...");
      } else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
      } else if (message.includes("open twitter")) {
        window.open("https://twitter.com", "_blank");
        speak("Opening Twitter...");
      } else if (message.includes("open instagram")) {
        window.open("https://instagram.com", "_blank");
        speak("Opening Instagram...");
      } else if (message.includes("open github")) {
        window.open("https://github.com", "_blank");
        speak("Opening GitHub...");
      } else if (message.includes("open linkedin")) {
        window.open("https://linkedin.com", "_blank");
        speak("Opening LinkedIn...");
      } else if (message.includes("open netflix")) {
        window.open("https://netflix.com", "_blank");
        speak("Opening Netflix...");
      } else if (message.includes("open amazon")) {
        window.open("https://amazon.com", "_blank");
        speak("Opening Amazon...");
      } else if (message.includes("open flipkart")) {
        window.open("https://flipkart.com", "_blank");
        speak("Opening Flipkart...");
      } else if (message.includes("open stack overflow")) {
        window.open("https://stackoverflow.com", "_blank");
        speak("Opening Stack Overflow...");
      } else if (message.includes("open reddit")) {
        window.open("https://reddit.com", "_blank");
        speak("Opening Reddit...");
      } else if (message.includes("what is") || message.includes("who is") || message.includes("what are")) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        speak(`This is what I found on the internet regarding ${message}`);
      } else if (message.includes("wikipedia")) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        speak(`This is what I found on Wikipedia regarding ${message}`);
      } else if (message.includes("time")) {
      const time = new Date().toLocaleString(undefined, {
        hour: "numeric",
        minute: "numeric",
      });
      speak(`The time is ${time}`);
    } else if (message.includes("date")) {
      const date = new Date().toLocaleString(undefined, {
        month: "short",
        day: "numeric",
      });
      speak(`Today's date is ${date}`);
    }  else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        speak(`I found some information for ${message} on Google`);
      }
    // else {
    //   speak("I'm not sure how to respond to that.");
    // }
  };

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.onstart = () => {
      setContent("Listening...");
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setContent(transcript);
      takeCommand(transcript.toLowerCase());
    };

    recognition.start();
  };

  const updateUserName = () => {
    const newName = prompt("Please enter your name:", userName);
    if (newName) {
      setUserName(newName);
      localStorage.setItem("userName", newName);
      speak(`Hello ${newName}, I've updated your name.`);
    }
  };

  return (
    <div className="container text-center mt-5">
      <div className="card shadow-lg">
        <div className="card-body">
          <img
            src={Mithlesh}
            alt="Assistant"
            className="img-fluid mb-4"
            style={{ maxWidth: "200px" }}
          />
          <h1 className="card-title display-4 text-primary">Mithlesh Assistant</h1>
          <p className="lead text-light">I'm your virtual assistant, how may I help you?</p>
          <div className="mt-4">
            <button
              className="btn btn-primary btn-lg"
              onClick={startListening}
            >
              <i className="fas fa-microphone-alt"></i> Speak
            </button>
            <button
              className="btn btn-secondary btn-lg ms-3"
              onClick={updateUserName}
            >
              Update Name
            </button>
          </div>
          <div className="mt-3">
            <h3 className="text-secondary">{content}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MithleshAssistant;
