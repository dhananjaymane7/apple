import React from "react";
import "./Down.css";
import banner from "./banner.jpg";
import banner1 from "./banner2.jpg";
import banner2 from "./banner3.png";
import video from "./video1.mp4";
import video1 from "./vidoe2.mp4";
import video2 from "./video3.mp4";

import banner3 from "./diamond.png";
import banner4 from "./diamond1.png";
import banner5 from "./banner5.jpg";
import banner6 from "./banner6.png";

const Down = () => {
  return (
    <div>
      <div className="Down">
        <p>
          Get $200–$650 in credit toward iPhone 15<br></br> when you trade in
          iPhone 11 or higher.* Buy
        </p>
        <h2>iPhone</h2>
        <img src={banner} alt="banner-image" />
      </div>

      <div className="Down1">
        <h1>Take a closer look.</h1>
        <img src={banner1} alt="banner-image1" />
      </div>

      <div className="Down2">
        <h1>Explore the full story.</h1>
        <h2>
          Dynamic Island.<br></br>
          For when things<br></br>
          just pop up.<br></br>
        </h2>
        <p>
          Dynamic Island bubbles up alerts and Live Activities — so you don’t
          miss them while you’re doing something else. You can track your next
          ride, see who’s calling, check your flight status, and so much more.
        </p>
        <img src={banner2} alt="banner-image1" />
      </div>

      <div className="Down3">
        <h1>
          Color through<br></br>
          and through.<br></br>
          Tough all around.
        </h1>
        <br></br>

        <p>
          The innovative new design features back glass that has color infused
          throughout the material. A custom dual ion-exchange process for the
          glass, and an aerospace-grade aluminum enclosure, help make iPhone 15
          incredibly durable. Dependably durable. The Ceramic Shield front is
          tougher than any smartphone glass. Remarkably resistant. iPhone is
          splash, water, and dust resistant.4 What a relief.
        </p>

        <video src={video} alt="video-1"  controls loop autoPlay muted />
      </div>

      <div className="Down5">
        <div className="Donw11">
          <img src={banner3} alt="diamond" />
          <p>
            Dependably durable. <br></br>The Ceramic Shield<br></br> front is
            tougher than<br></br> any smartphone glass.
          </p>
        </div>

        <div className="Donw12">
          <img src={banner4} alt="diamond" />
          <p>
            Remarkably resistant.<br></br>
            iPhone is splash, water, and dust<br></br> resistant.4 What a
            relief.
          </p>
        </div>
      </div>

      <div className="Down6">
        <h1>
          All-new 48MP Main camera.<br></br>
          For breathtaking, smile-<br></br>making picture taking.
        </h1>
        <video src={video1} alt="video-1"  controls loop autoPlay muted />
      </div>

      <div className="Down7">
        <h1>
          Focus‑pocus,<br></br> magical new portraits
        </h1>
        <p>
          More detail and richer color make a dramatic difference<br></br> in your
          portraits. And now you can tap to shift the<br></br> focus between subjects —
          even after you take the shot.<br></br> Presto chango.
        </p>
        <video src={video2} alt="video-1" controls loop autoPlay muted/>
      </div>

      <div className="Down8">
        <h1>All-day battery life.<br></br> For all the things you<br></br> want to keep doing.</h1>
        <img src={banner5} alt="banner-5"/>
      </div>

      <div className="Down9">
        <h1>USB-Compatible.</h1>
        <p>The new USB-C connector lets you charge your Mac or iPad with the <br></br>same cable you use to charge iPhone 15.<br></br> You can even use iPhone 15 to charge Apple Watch or AirPods.6 Bye-bye, cable clutter.</p>
        <img src={banner6} alt="banner-6"/>
      </div>
    </div>

  );
};

export default Down;
