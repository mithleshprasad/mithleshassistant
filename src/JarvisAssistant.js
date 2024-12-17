// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import giphy from './assists/giphy.gif'
// import Mithlesh from './assists/mithlesh.jpeg'
// const MithleshAssistant = () => {
//   const [content, setContent] = useState("Click the button to speak");
//   const [userName, setUserName] = useState("Mithlesh");

//   useEffect(() => {
//     const storedName = localStorage.getItem("userName");
//     if (storedName) setUserName(storedName);
//     speak(`Initializing Mithlesh Assistant for ${storedName || "you"}...`);
//     wishMe();
//   }, []);

//   const speak = (text) => {
//     const textSpeak = new SpeechSynthesisUtterance(text);
//     textSpeak.rate = 1;
//     textSpeak.volume = 1;
//     textSpeak.pitch = 2;
//     window.speechSynthesis.speak(textSpeak);
//   };

//   const wishMe = () => {
//     const hour = new Date().getHours();
//     if (hour >= 0 && hour < 12) {
//       speak(`Good Morning ${userName}...`);
//     } else if (hour >= 12 && hour < 17) {
//       speak(`Good Afternoon ${userName}...`);
//     } else {
//       speak(`Good Evening ${userName}...`);
//     }
//   };

//   const tellJoke = async () => {
//     try {
//       const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
//       const data = await response.json();
//       const joke = data.joke;
//       speak(joke);
//       setContent(joke);
//     } catch (error) {
//       speak("Sorry, I couldn't fetch a joke for you.");
//       setContent("Error fetching joke.");
//     }
//   };

//   const takeCommand = (message) => {
//     if (message.includes("hey") || message.includes("hello")) {
//       speak(`Hello ${userName}, how may I assist you?`);
//     } else if (message.includes("your name")) {
//       speak(`I am you Assistant  ${userName}, your virtual AI helper.`);
//     } else if (message.includes("joke")) {
//       tellJoke();
//     }else if (message.includes("open google")) {
//         window.open("https://google.com", "_blank");
//         speak("Opening Google...");
//       } else if (message.includes("open youtube")) {
//         window.open("https://youtube.com", "_blank");
//         speak("Opening YouTube...");
//       } else if (message.includes("open facebook")) {
//         window.open("https://facebook.com", "_blank");
//         speak("Opening Facebook...");
//       } else if (message.includes("open twitter")) {
//         window.open("https://twitter.com", "_blank");
//         speak("Opening Twitter...");
//       } else if (message.includes("open instagram")) {
//         window.open("https://instagram.com", "_blank");
//         speak("Opening Instagram...");
//       } else if (message.includes("open github")) {
//         window.open("https://github.com", "_blank");
//         speak("Opening GitHub...");
//       } else if (message.includes("open linkedin")) {
//         window.open("https://linkedin.com", "_blank");
//         speak("Opening LinkedIn...");
//       } else if (message.includes("open netflix")) {
//         window.open("https://netflix.com", "_blank");
//         speak("Opening Netflix...");
//       } else if (message.includes("open amazon")) {
//         window.open("https://amazon.com", "_blank");
//         speak("Opening Amazon...");
//       } else if (message.includes("open flipkart")) {
//         window.open("https://flipkart.com", "_blank");
//         speak("Opening Flipkart...");
//       } else if (message.includes("open stack overflow")) {
//         window.open("https://stackoverflow.com", "_blank");
//         speak("Opening Stack Overflow...");
//       } else if (message.includes("open reddit")) {
//         window.open("https://reddit.com", "_blank");
//         speak("Opening Reddit...");
//       } else if (message.includes("what is") || message.includes("who is") || message.includes("what are")) {
//         window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
//         speak(`This is what I found on the internet regarding ${message}`);
//       } else if (message.includes("wikipedia")) {
//         window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
//         speak(`This is what I found on Wikipedia regarding ${message}`);
//       } else if (message.includes("time")) {
//       const time = new Date().toLocaleString(undefined, {
//         hour: "numeric",
//         minute: "numeric",
//       });
//       speak(`The time is ${time}`);
//     } else if (message.includes("date")) {
//       const date = new Date().toLocaleString(undefined, {
//         month: "short",
//         day: "numeric",
//       });
//       speak(`Today's date is ${date}`);
//     }  else {
//         window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
//         speak(`I found some information for ${message} on Google`);
//       }
//     // else {
//     //   speak("I'm not sure how to respond to that.");
//     // }
//   };

//   const startListening = () => {
//     const SpeechRecognition =
//       window.SpeechRecognition || window.webkitSpeechRecognition;
//     const recognition = new SpeechRecognition();

//     recognition.onstart = () => {
//       setContent("Listening...");
//     };

//     recognition.onresult = (event) => {
//       const transcript = event.results[0][0].transcript;
//       setContent(transcript);
//       takeCommand(transcript.toLowerCase());
//     };

//     recognition.start();
//   };

//   const updateUserName = () => {
//     const newName = prompt("Please enter your name:", userName);
//     if (newName) {
//       setUserName(newName);
//       localStorage.setItem("userName", newName);
//       speak(`Hello ${newName}, I've updated your name.`);
//     }
//   };

//   return (
//     <div className="container text-center mt-5">
//       <div className="card shadow-lg">
//         <div className="card-body">
//           <img
//             src={Mithlesh}
//             alt="Assistant"
//             className="img-fluid mb-4"
//             style={{ maxWidth: "200px" }}
//           />
//           <h1 className="card-title display-4 text-primary">Mithlesh Assistant</h1>
//           <p className="lead text-light">I'm your virtual assistant, how may I help you?</p>
//           <div className="mt-4">
//             <button
//               className="btn btn-primary btn-lg"
//               onClick={startListening}
//             >
//               <i className="fas fa-microphone-alt"></i> Speak
//             </button>
//             <button
//               className="btn btn-secondary btn-lg ms-3"
//               onClick={updateUserName}
//             >
//               Update Name
//             </button>
//           </div>
//           <div className="mt-3">
//             <h3 className="text-secondary">{content}</h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MithleshAssistant;
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import giphy from "./assists/giphy.gif";
import Mithlesh from "./assists/mithlesh.jpeg";

const MithleshAssistant = () => {
  const [content, setContent] = useState("Click the button to speak");
  const [userName, setUserName] = useState("Mithlesh");
  const [darkMode, setDarkMode] = useState(false);
  const [batteryLevel, setBatteryLevel] = useState(null);

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) setUserName(storedName);
    speak(`Initializing AI Assistant for ${storedName || "you"}...`);
    wishMe();
  }, []);

  const speak = (text) => {
    const textSpeak = new SpeechSynthesisUtterance(text);
    textSpeak.rate = 1;
    textSpeak.volume = 1;
    textSpeak.pitch = 2;
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

  const getWeather = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=auto:ip`
      );
      const data = await response.json();
      const weatherInfo = `The current temperature is ${data.current.temp_c} degrees Celsius with ${data.current.condition.text}.`;
      speak(weatherInfo);
      setContent(weatherInfo);
    } catch (error) {
      speak("Sorry, I couldn't fetch the weather data.");
    }
  };

  const fetchNews = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_NEWS_API_KEY`
      );
      const data = await response.json();
      const headlines = data.articles.slice(0, 5).map((a) => a.title).join(" ");
      speak(`Here are the top headlines: ${headlines}`);
      setContent("Top news headlines fetched successfully!");
    } catch (error) {
      speak("Sorry, I couldn't fetch the news.");
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
        setContent(`Reminder: ${task}`);
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
    if (message.includes("hey") || message.includes("hello")) {
      speak(`Hello ${userName}, how may I assist you?`);
    } else if (message.includes("your name")) {
      speak(`I am AI Assistant, your virtual AI helper.`);
    } else if (message.includes("joke")) {
      tellJoke();
    } else if (message.includes("weather")) {
      getWeather();
    } else if (message.includes("news")) {
      fetchNews();
    } else if (message.includes("motivation")) {
      fetchMotivation();
    } else if (message.includes("time")) {
      getCurrentTime();
    } else if (message.includes("battery")) {
      checkBatteryLevel();
    } else if (message.includes("lock phone")) {
      lockPhone();
    }else if (message.includes("date")) {
      getCurrentDate();
    } else if (message.includes("reminder")) {
      setReminder();
    } else if (message.includes("calculator")) {
      const query = message.replace("calculator", "").trim();
      calculate(query);
    } else if (message.includes("copy")) {
      navigator.clipboard.writeText(content);
      speak("Content copied to clipboard.");
    } else if (message.includes("play music")) {
      window.open("https://spotify.com", "_blank");
      speak("Playing music on Spotify.");
    } else {
      window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
      speak(`Here is what I found for ${message}`);
    }
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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
  className={`container text-center mt-5 ${
    darkMode ? "bg-dark text-light" : ""
  }`}
>
  <div className="card shadow-lg">

    <div className="card-body">
      <img
        src={giphy}
        alt="Assistant"
        className="img-fluid mb-4"
        style={{ maxWidth: "200px" }}
      />
      <h1 className="card-title display-4 text-primary">AI Assistant</h1>
      <p className="lead">I'm your virtual assistant, how may I help you?</p>
      <div className="mt-3 border-dark">
            <h3 className="text-dark">{content}</h3>
           </div>
      <div className="mt-4">
        <button className="btn btn-primary btn-lg" onClick={startListening}>
          <i className="fas fa-microphone-alt"></i> Speak
        </button>
        <button className="btn btn-secondary btn-lg ms-3" onClick={updateUserName}>
          Update Name
        </button>
        
      </div>
    </div>
  </div>
</div>
  );
};

export default MithleshAssistant;
