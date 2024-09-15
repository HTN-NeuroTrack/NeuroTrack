## Inspiration
Members of our team know multiple people who suffer from permanent or partial paralization. We wanted to build something that could be fun to develop and use, but at the same time make a real impact in people's everyday lives. We also wanted to make an affordable solution, most solutions to paralyzation cost thousands and can't get to everyone. So we wanted something that was modular, that we could 3rd print and also make open source for others to check out.

## What it does and how we built it
The main component is a bionic hand assistant called PostGrip.We use an ECG sensor in order to detect electrical signals, when it detects your muscles are trying to close your hand it uses servo motors in order to close your hand around an object (a foam baseball for example). If it stops detecting a signal (you're no longer trying to close) it will loosen your hand back to a natural resting position. Along with this at all times it sends a signal through websockets to our Amazon EC2 server and game. This is stored on a MongoDB database, using API requests we can communicate between our games, server and PostGrip. We can track live motor speed, angles, and if it's open or closed. Our website is a full-stack application (react styled with tailwind on the front end, node js on the backend). Our website also has games that communicate with the device to test the project and provide entertainment. We have one to test for continuous holding and another for rapid inputs, this could be used in recovery as well.


## Challenges we ran into
This project forced us to consider different avenues and work through difficulties. Our main problem was we fried our EMG sensor, twice! This was a major setback since an EMG sensor was going to be the main detector for the project. We tried calling around the whole city but could not find a new one. We decided to switch paths and use an ECG sensor instead, this is designed for heartbeats but we managed to make it work. This involved wiring our project completely differently and using a very different algorithm. When we thought we were free our websocket didn't work. We troubleshoot for an hour looking at the wifi, the device itself and more. Without this, we couldn't send data from PulseGrip to our server and games. We decided to ask for some mentor's help and reset the device completely, after using different libraries we managed to make it work. These experiences taught us to keep pushing even when we thought we were done, and different ways to think about the same problem.

## Accomplishments that we're proud of
Firstly just getting the device working, we had so many setbacks and times we thought the event was over for us. But we managed to keep going and got to the end, even if it wasn't exactly what we planned or expected. We are also proud of the breadth and depth of our project, we have a physical side with 3rd printed materials, sensors and complicated algorithms. But we also have a game side, with 2 (questionable original) games that can be used. But they are not just random games, but ones that test the user in 2 different ways that are critical to using the device. Short burst and hold term holding of objects. Lastly, we have a full-stack application that users can use to access the games and see live stats on the device.



## What's next for PulseGrip
- working to improve sensors, adding more games, seeing how we can help people

We think this project had a ton of potential and we cant wait to see what we can do with the ideas learned here.

## Check it out

https://hacks.pulsegrip.design

https://github.com/PulseGrip
