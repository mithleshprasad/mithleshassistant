
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import giphy from "./assists/giphy.gif";
import Mithlesh from "./assists/mithlesh.jpeg";
import Faq from "./Faq"
import { AiFillAudio } from "react-icons/ai";
import { IoPersonSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";
import { MdRememberMe } from "react-icons/md";

const MithleshAssistant = () => {
  const [content, setContent] = useState("Click the button to speak");
  const [userName, setUserName] = useState("Mithlesh");
  const [darkMode, setDarkMode] = useState(false);
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) setUserName(storedName);
    speak(`Initializing Jarvis Assistant for ${storedName || "you"}...`);
    wishMe();
    startRoutineCheck();
  }, []);
  
  const speak = (text) => {
    const textSpeak = new SpeechSynthesisUtterance(text);
    textSpeak.rate = 1;
    textSpeak.volume = 1;
    textSpeak.pitch = 0;
    window.speechSynthesis.speak(textSpeak);
  };
  const addRoutine = () => {
    const name = prompt("Enter routine name:");
    const time = prompt("Enter routine time in HH:MM format (24-hour):");
    const description = prompt("Enter routine description:");
    if (name && time && description) {
      const newRoutine = { name, time, description };
      const updatedRoutines = [...routines, newRoutine];
      setRoutines(updatedRoutines);
      localStorage.setItem("routines", JSON.stringify(updatedRoutines));
      speak(`Routine ${name} added successfully.`);
    }
  };
  const startRoutineCheck = () => {
    setInterval(() => {
      const now = new Date();
      const currentTime = `${now.getHours().toString().padStart(2, "0")}:${now
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
      routines.forEach((routine) => {
        if (routine.time === currentTime) {
          speak(`Reminder: ${routine.name} - ${routine.description}`);
          setContent(`Routine Reminder: ${routine.name}`);
        }
      });
    }, 60000); // Check every minute
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





  const fetchMotivation = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      const quote = data.content;
      speak(`Here's a motivational quote: ${quote}`);
      setContent(quote);
      
    } catch (error) {
      speak("Sorry, I couldn't fetch a motivational quote.");
    }
  };

  const getCurrentTime = () => {
    const now = new Date();
    const time = now.toLocaleTimeString();
    speak(`The current time is ${time}`);
    setContent(`Current Time: ${time}`);
  };

  const getCurrentDate = () => {
    const now = new Date();
    const date = now.toDateString();
    speak(`Today's date is ${date}`);
    setContent(`Today's Date: ${date}`);
  };
  const setReminder = () => {
    const task = prompt("What would you like me to remind you about?");
    if (task) {
      setTimeout(() => {
        speak(`Reminder: ${task}`);
        alert(`Reminder: ${task}`);
      }, 5000); // Reminder in 5 seconds for demo
      speak(`Reminder set for: ${task}`);
    }
  };
  

  const calculate = (query) => {
    try {
      const result = eval(query);
      speak(`The result is ${result}`);
      setContent(`Result: ${result}`);
    } catch {
      speak("Invalid calculation query.");
    }
  };
  const checkBatteryLevel = () => {
    if (navigator.getBattery) {
      navigator.getBattery().then((battery) => {
        setBatteryLevel(Math.floor(battery.level * 100));
        speak(`Your device is charged at ${Math.floor(battery.level * 100)} percent.`);
        setContent(`Battery Level: ${Math.floor(battery.level * 100)}%`);
      });
    } else {
      speak("Battery status is not supported on this device.");
      setContent("Battery status not supported.");
    }
  };

  const lockPhone = () => {
    speak("Sorry, I cannot lock your phone, but you can manually lock it for security.");
    setContent("Locking the phone is not supported via web.");
  };
  const takeCommand = (message) => {
    const lowerMessage = message.toLowerCase().trim();
  
    const actions = {
      "hey": () => speak(`Hello ${userName}, how may I assist you?`),
      "hello": () => speak(`Hello ${userName}, how may I assist you?`),
      "your name": () => speak(`I am AI Assistant, your virtual AI helper.`),
      "joke": tellJoke,
      "motivation": fetchMotivation,
      "time": getCurrentTime,
      "battery": checkBatteryLevel,
      "lock phone": lockPhone,
      "date": getCurrentDate,
      "reminder": setReminder,
      "play music": () => {
        window.open("https://spotify.com", "_blank");
        speak("Playing music on Spotify.");
      },
      "copy": () => {
        navigator.clipboard.writeText(content);
        speak("Content copied to clipboard.");
      },
    };
  
    // Handle calculator command separately to extract the query
    if (lowerMessage.includes("calculator")) {
      const query = lowerMessage.replace("calculator", "").trim();
      calculate(query);
      return;
    }
  
    // Find and execute the appropriate action
    for (const key in actions) {
      if (lowerMessage.includes(key)) {
        actions[key]();
        return;
      }
    }
  
    // Fallback: Open Google search for unknown commands
    const searchQuery = encodeURIComponent(lowerMessage);
    window.open(`https://www.google.com/search?q=${searchQuery}`, "_blank");
    speak(`Here is what I found for ${message}`);
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
    <div
  className={`container text-center mt-5 ${
    darkMode ? "bg-dark text-light" : ""
  }`}
>
  <div className="card shadow-lg">
    <div className="d-flex text-start">


    </div>

    <div className="card-body">
  
      <img
        src={giphy}
        alt="Assistant"
        className="img-fluid mb-4"
        style={{ maxWidth: "150px" }}
      />
        <Faq></Faq>
      {/* <h3 className="card-title display-4 text-primary">Jarvis Assistant    
      </h3>  */}
      {/* <p className="lead">I'm your Jarvis assistant, how may I help you?</p> */}
      <div className="mt-3 border-dark">
            <h3 className="text-dark">{content}</h3>
           </div>
      <div className="mt-4">
        <button className="btn btn-primary btn-lg" onClick={startListening}>
        <AiFillAudio />
        
        </button>
        <button className="btn btn-secondary btn-lg ms-3" onClick={updateUserName}>
        <IoPersonSharp />
        </button>
          <button className="btn btn-light text-light bg-dark btn-lg ms-3" onClick={setReminder}>
          <FaBell />
          </button>
            <button className="btn btn-primary btn-lg ms-3" onClick={addRoutine}>
            <MdRememberMe />
            </button>
            <div className="mt-4">
            <h4>Your Routines:</h4>
            <ul className="list-group">
              {routines.map((routine, index) => (
                <li key={index} className="list-group-item">
                  <strong>{routine.name}</strong> - {routine.time} - {routine.description}
                </li>
              ))}
            </ul>
          </div>
     
      </div>
    </div>
  </div>
</div>
  );
};

export default MithleshAssistant;
