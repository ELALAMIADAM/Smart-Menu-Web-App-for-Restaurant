import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../style/nouveaute.css';

export default function NewDrinks() {

    const images = [
        'src/assets/img/carrossel2.webp',
        'src/assets/img/carrossel1.jpg',
        'src/assets/img/carrossel3.jpg',
    ];

    const Article = ({ image, title, description }) => {
        return (
            <article>
                <img src={image} alt={title} className="drink-image" />
                <h3>{title}</h3>
                <p>{description}</p>
                <button>Acheter</button>
            </article>
        );
    };

    const beers = [
        { image: 'src/assets/img/OIP (1).jpeg', title: 'Bière Blonde', description: 'Description de la bière blonde.' },
        { image: 'src/assets/img/OIP (2).jpeg', title: 'Bière Brune', description: 'Description de la bière brune.' },
        { image: 'src/assets/img/OIP (3).jpeg', title: 'Bière Rousse', description: 'Description de la bière rousse.' },
        { image: 'src/assets/img/OIP (4).jpeg', title: 'Bière Rousse', description: 'Description de la bière rousse.' },
        { image: 'src/assets/img/OIP (5).jpeg', title: 'Bière Rousse', description: 'Description de la bière rousse.' },
        { image: 'src/assets/img/OIP (6).jpeg', title: 'Bière Rousse', description: 'Description de la bière rousse.' },
        { image: 'src/assets/img/OIP.jpeg', title: 'Bière Rousse', description: 'Description de la bière rousse.' },
    ];

    const cocktails = [
        { image: 'src/assets/img/pexels-amar-17494021.jpg', title: 'Mojito', description: 'Description du Mojito.' },
        { image: 'src/assets/img/pexels-marceloverfe-16148201.jpg', title: 'Piña Colada', description: 'Description de la Piña Colada.' },
        { image: 'src/assets/img/pexels-teresa-jang-6930116-16768103.jpg', title: 'Daiquiri', description: 'Description du Daiquiri.' },
        { image: 'src/assets/img/pexels-timur-weber-8679607.jpg', title: 'Bière Rousse', description: 'Description de la bière rousse.' },
        { image: 'src/assets/img/pexels-isabella-mendes-107313-338713.jpg', title: 'Bière Rousse', description: 'Description de la bière rousse.' },
        { image: 'src/assets/img/pexels-leeloothefirst-5379882.jpg', title: 'Bière Rousse', description: 'Description de la bière rousse.' },
    ];

    // Carrousel principal
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Carrousel des bières
    const [currentBeerIndex, setCurrentBeerIndex] = useState(0);

    // Carrousel des cocktails
    const [currentCocktailIndex, setCurrentCocktailIndex] = useState(0);

    const beerCarouselRef = useRef(null);
    const cocktailCarouselRef = useRef(null);

    const handleTouchStart = (e, type) => {
        const touchStartX = e.touches[0].clientX;

        const handleTouchMove = (e) => {
            const touchEndX = e.touches[0].clientX;
            const deltaX = touchStartX - touchEndX;

            if (deltaX > 50) {
                // Swipe gauche - suivant
                if (type === 'beer') nextBeer();
                else nextCocktail();
            } else if (deltaX < -50) {
                // Swipe droite - précédent
                if (type === 'beer') prevBeer();
                else prevCocktail();
            }
        };

        const handleTouchEnd = () => {
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
        };

        document.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('touchend', handleTouchEnd);
    };

    // Gestion de l'image principale (carrousel)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change l'image toutes les 5 secondes

        return () => clearInterval(interval); // Nettoyage de l'intervalle au démontage
    }, [images.length]);

    // Gestion du carrousel des bières
    const nextBeer = () => {
        setCurrentBeerIndex((prevIndex) =>
            prevIndex === beers.length - 5 ? 0 : prevIndex + 1
        );
    };

    const prevBeer = () => {
        setCurrentBeerIndex((prevIndex) =>
            prevIndex === 0 ? beers.length - 5 : prevIndex - 1
        );
    };

    // Gestion du carrousel des cocktails
    const nextCocktail = () => {
        setCurrentCocktailIndex((prevIndex) =>
            prevIndex === cocktails.length - 5 ? 0 : prevIndex + 1
        );
    };

    const prevCocktail = () => {
        setCurrentCocktailIndex((prevIndex) =>
            prevIndex === 0 ? cocktails.length - 5 : prevIndex - 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };


    return (
        <div style={{background:"linear-gradient(90deg, rgba(255,255,255,1) 20%, rgba(255,86,86,0.7595413165266106) 100%)"}}>
            {/* Carrousel Principal */}
            <div className="carousel">
                <div className="carousel-images">
                    <img className="image-caroussel" src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
                </div>
                <button onClick={prevImage} className="prev-button"><FontAwesomeIcon icon={faArrowLeft} style={{ marginLeft: '5px' }} /></button>
                <button onClick={nextImage} className="next-button"><FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '5px' }} /></button>
            </div>

            {/* Carrousel de Bières */}
            <section className="beer" onTouchStart={(e) => handleTouchStart(e, 'beer')}>
                <div className="section_head">
                    <h2>Liste de Bières</h2>
                    <div class="dropdown">
                        <button class="dropbtn">Filtrer
                            <FontAwesomeIcon icon={faFilter} style={{ marginLeft: '5px' }} /></button>
                        <div class="dropdown-content">
                            <button class="filter-button" onclick="filterDrinks('all')">Tous</button>
                            <button class="filter-button" onclick="filterDrinks('blonde')">Bière Blonde</button>
                            <button class="filter-button" onclick="filterDrinks('brune')">Bière Brune</button>
                            <button class="filter-button" onclick="filterDrinks('rouge')">Bière Rousse</button>
                            <button class="reset-button" onclick="resetFilter()">Réinitialiser</button>
                        </div>
                    </div>
                </div>

                <div ref={beerCarouselRef} className="beer-list carousel-items" style={{ transform: `translateX(-${currentBeerIndex * 20}%)` }}>
                    {beers.map((beer, index) => (
                        <Article key={index} image={beer.image} title={beer.title} description={beer.description} />
                    ))}
                </div>
                <button onClick={prevBeer} className="carousel-arrow left-arrow">❮</button>
                <button onClick={nextBeer} className="carousel-arrow right-arrow">❯</button>
            </section>

            {/* Carrousel de Cocktails */}
            <section className="cocktail" onTouchStart={(e) => handleTouchStart(e, 'cocktail')}>
                <div className="section_head">
                    <h2>Liste de Coctails</h2>
                    <div class="dropdown">
                        <button class="dropbtn">Filtrer
                            <FontAwesomeIcon icon={faFilter} style={{ marginLeft: '5px' }} /></button>
                        <div class="dropdown-content">
                            <button class="filter-button" onclick="filterDrinks('all')">Tous</button>
                            <button class="filter-button" onclick="filterDrinks('blonde')">Avec Alcool</button>
                            <button class="filter-button" onclick="filterDrinks('brune')">Sans Alcool</button>
                            <button class="filter-button" onclick="filterDrinks('rouge')">Mini</button>
                            <button class="reset-button" onclick="resetFilter()">Max</button>
                        </div>
                    </div>
                </div>
                <div ref={cocktailCarouselRef} className="cocktail-list carousel-items" style={{ transform: `translateX(-${currentCocktailIndex * 20}%)` }}>
                    {cocktails.map((cocktail, index) => (
                        <Article key={index} image={cocktail.image} title={cocktail.title} description={cocktail.description} />
                    ))}
                </div>
                <button onClick={prevCocktail} className="carousel-arrow left-arrow">❮</button>
                <button onClick={nextCocktail} className="carousel-arrow right-arrow">❯</button>
            </section>
        </div>
    )
}
