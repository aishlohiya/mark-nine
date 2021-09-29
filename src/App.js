import "./styles.css";
import React, { useState } from "react";

const appDatabase = {
  classicMovies: [
    {
      name: "The Pursuit of Happyness",
      rating: "⭐⭐⭐⭐⭐",
      description: "Classic story about a person who never gave up."
    },
    {
      name: "The Shawshank Redemption",
      rating: "⭐⭐⭐⭐⭐",
      description: "A prison escape story unlike any other."
    },
    {
      name: "Forrest Gump",
      rating: "⭐⭐⭐⭐⭐",
      description:
        "Just an average guy who lived in present and focused on his task at hand."
    }
  ],
  bollywoodMovies: [
    {
      name: "Yeh Jawani Hai Deewani",
      rating: "⭐⭐⭐⭐⭐",
      description: "Friendship story with wonderful music."
    },
    {
      name: "Zindagi Na Milegi Dobara",
      rating: "⭐⭐⭐⭐⭐",
      description: "Some old friends on one amazing trip."
    },
    {
      name: "SherShaah",
      rating: "⭐⭐⭐⭐⭐",
      description:
        "Bravery story of an Army Officer who sacrificed his life for the nation."
    }
  ],
  webSeries: [
    {
      name: "Special Ops",
      rating: "⭐⭐⭐⭐⭐",
      description: "Glimpse in life of an Intelligence officer."
    },
    {
      name: "Criminal Justice",
      rating: "⭐⭐⭐⭐⭐",
      description: "Thriller series on Indian Justice."
    },
    {
      name: "The Family Man",
      rating: "⭐⭐⭐⭐⭐",
      description: "Manoj Bajpayee at his best."
    }
  ]
};

const appList = Object.keys(appDatabase);

export default function App() {
  const [oneList, setListGenre] = useState("webSeries");

  function baseHandler(data) {
    setListGenre(data);
  }

  return (
    <div className="app">
      <h1>Movies recommendation app</h1>
      <p>Some movies that I would recommend.</p>
      <div>
        {appList.map(function (data) {
          return (
            <button
              style={{
                padding: "0.5rem 2rem",
                margin: "1rem 0.5rem",
                borderRadius: "1rem",
                cursor: "pointer"
              }}
              onClick={() => baseHandler(data)}
            >
              {data}
            </button>
          );
        })}
      </div>

      <hr />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {appDatabase[oneList].map(function (item) {
            return (
              <li
                key={item.name}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid #D1D5DB",
                  width: "70%",
                  margin: "1rem 0rem",
                  borderRadius: "0.5rem",
                  fontSize: "larger"
                }}
              >
                <div> {item.name}</div>
                <div> {item.rating}</div>
                <div> {item.description}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
