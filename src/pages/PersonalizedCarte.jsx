import React, { startTransition } from "react";
import heinekenImage from "../assets/heineken.jpg";
import MargaritaImage from "../assets/Margarita.png";
import GuinnessImage from "../assets/Guinness.png";
import CoronaImage from "../assets/Corona.png";
import VodkaImage from "../assets/Vodka.png";
import Carlsberg from "../assets/Carlsberg.png";
import Daiquiri from "../assets/Daiquiri.png";
import PinaColada from "../assets/PinaColada.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


import "../style/tailwinds.css";
import ProductCard from "./ProductCard.jsx";

export default function PersonalizedCarte() {

  const navigate = useNavigate()
  

  const preferencesInputs = [
    { image: heinekenImage, title: "Heineken", price: "9$" },
    { image: MargaritaImage, title: "Margarita", price: "11$" },
    { image: GuinnessImage, title: "Guinness", price: "8$" },
    { image: Daiquiri, title: "Daiquiri", price: "13$" },
    { image: CoronaImage, title: "Corona", price: "10$" },
  ];

  const suggestionsInputs = [
    { image: VodkaImage, title: "Vodka", price: "12$" },
    { image: Carlsberg, title: "Carlsberg", price: "11$" },
    { image: Daiquiri, title: "Daiquiri", price: "13$" },
    { image: PinaColada, title: "PinaColada", price: "14$" },
    { image: CoronaImage, title: "Corona", price: "10$" },
  ];

  const historiquesInputs = [
    { image: heinekenImage, title: "Heineken", price: "9$" },
    { image: GuinnessImage, title: "Guinness", price: "8$" },
    { image: MargaritaImage, title: "Margarita", price: "11$" },
    { image: Daiquiri, title: "Daiquiri", price: "12$" },
  ];

  const creationsInputs = [
    { image: PinaColada, title: "Custom Pina Colada", price: "15$" },
    { image: CoronaImage, title: "Special Corona", price: "12$" },
    { image: heinekenImage, title: "Heineken", price: "9$" },
    { image: VodkaImage, title: "Vodka Mix", price: "16$" },
    { image: Carlsberg, title: "Unique Carlsberg", price: "13$" },
  ];

  const [preferencesIndex, setPreferencesIndex] = useState(0);
  const [suggestionsIndex, setSuggestionsIndex] = useState(0);
  const [historiquesIndex, setHistoriquesIndex] = useState(0);
  const [creationsIndex, setCreationsIndex] = useState(0);

  const handleDetailPage = () => {
    startTransition(() => {
      navigate("/detail");
    });
  };

  return (
    <>
      <div className="bg-red-200 border-2 border-black font-serif bg">
        {/* Preferences Section */}
        <div>
          <h4 className="title">Preferences</h4>
          <div className="cards">
            <div
              className="absolute -ml-16 mt-36"
              onClick={() =>
                setPreferencesIndex(
                  preferencesIndex === 0
                    ? preferencesInputs.length - 4
                    : preferencesIndex - 1
                )
              }
            >
              {/* Left Arrow SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            {preferencesInputs
              .slice(preferencesIndex, preferencesIndex + 4)
              .map((input, index) => (
                <ProductCard
                  key={index}
                  image={input.image}
                  title={input.title}
                  price={input.price}
                  callback={handleDetailPage}
                />
              ))}
            <div
              className="absolute mt-36 ml-marrow"
              onClick={() =>
                setPreferencesIndex(
                  preferencesIndex === preferencesInputs.length - 4
                    ? 0
                    : preferencesIndex + 1
                )
              }
            >
              {/* Right Arrow SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Suggestions Section */}
        <div>
          <h4 className="title">Suggestions</h4>
          <div className="cards">
            <div
              className="absolute -ml-16 mt-36"
              onClick={() =>
                setSuggestionsIndex(
                  suggestionsIndex === 0
                    ? suggestionsInputs.length - 4
                    : suggestionsIndex - 1
                )
              }
            >
              {/* Left Arrow SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            {suggestionsInputs
              .slice(suggestionsIndex, suggestionsIndex + 4)
              .map((input, index) => (
                <ProductCard
                  key={index}
                  image={input.image}
                  title={input.title}
                  price={input.price}
                />
              ))}
            <div
              className="absolute mt-36 ml-marrow"
              onClick={() =>
                setSuggestionsIndex(
                  suggestionsIndex === suggestionsInputs.length - 4
                    ? 0
                    : suggestionsIndex + 1
                )
              }
            >
              {/* Right Arrow SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Historiques Section */}
        <div>
          <h4 className="title">Historiques</h4>
          <div className="cards">
            <div
              className="absolute -ml-16 mt-36"
              onClick={() =>
                setHistoriquesIndex(
                  historiquesIndex === 0
                    ? historiquesInputs.length - 4
                    : historiquesIndex - 1
                )
              }
            >
              {/* Left Arrow SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            {historiquesInputs
              .slice(historiquesIndex, historiquesIndex + 4)
              .map((input, index) => (
                <ProductCard
                  key={index}
                  image={input.image}
                  title={input.title}
                  price={input.price}
                />
              ))}
            <div
              className="absolute mt-36 ml-marrow"
              onClick={() =>
                setHistoriquesIndex(
                  historiquesIndex === historiquesInputs.length - 4
                    ? 0
                    : historiquesIndex + 1
                )
              }
            >
              {/* Right Arrow SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Créations Section */}
        <div>
          <h4 className="title">Créations</h4>
          <div className="cards">
            <div
              className="absolute -ml-16 mt-36"
              onClick={() =>
                setCreationsIndex(
                  creationsIndex === 0
                    ? creationsInputs.length - 4
                    : creationsIndex - 1
                )
              }
            >
              {/* Left Arrow SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            {creationsInputs
              .slice(creationsIndex, creationsIndex + 4)
              .map((input, index) => (
                <ProductCard
                  key={index}
                  image={input.image}
                  title={input.title}
                  price={input.price}
                />
              ))}
            <div
              className="absolute mt-36 ml-marrow"
              onClick={() =>
                setCreationsIndex(
                  creationsIndex === creationsInputs.length - 4
                    ? 0
                    : creationsIndex + 1
                )
              }
            >
              {/* Right Arrow SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
