"use client";

import React, { useState } from "react";
import Header from "../components/Header"; 
import Footer from "../components/Footer"; 
import CloseBtn from "../components/CloseBtn";

const articles = [
    {
        id: 1,
        title: "Cafe Lander",
        author: "Jane Doe",
        image: "./img/testimg-cafe.jpg",
        article:
            "Industrial Loft Style cafe. Serve specialty coffees, breakfast, lunch & dessert. It's the perfect spot for relaxing and enjoying unique blends.",
    },
    {
        id: 2,
        title: "Lambretta Pizza Club",
        author: "John Smith",
        image: "./img/testimg-pizza.jpg",
        article:
            "A celebration of Italian culinary heritage with an international twist, featuring handcrafted pizzas, delectable pastas, and savory sandwiches.",
    },
    {
        id: 3,
        title: "Petit Potato",
        author: "Anna Lee",
        image: "./img/testimg-petit.jpg",
        article:
            "A trendy Asian fusion restaurant and cafe offering a variety of food, tea-inspired snacks, and desserts with Japanese flair.",
    },
];

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false); // For fade-out animation
    const [selectedArticle, setSelectedArticle] = useState(articles[0]); // Default article


    const handleOpenModal = (articleId: number) => {
        // Find the article corresponding to the clicked "Read More" button
        const article = articles.find((a) => a.id === articleId);
        if (article) {
            setSelectedArticle(article); // Set the clicked article as selected
            setIsModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setIsClosing(true); // Start fade-out animation
        setTimeout(() => {
            setIsModalOpen(false);
            setIsClosing(false); // Reset animation state
        }, 500);
    };

    return (
        <body>
            <Header />
            <section className="first-section">
                <div className="cover">
                    <h2>Cuisines Around Us</h2>
                    <p>Savor the Flavors, Discover the Stories</p>
                </div>
            </section>
            <section className="about-section">
                <h2>About The Platform</h2>
                <p>Welcome to Cuisine Around Us, where people from all areas share their favorite dishes. Whether you&apos;re a traveler, newcomer, or local, discover new flavors and the stories behind them. Join us, savor the flavors, and explore the world through food!</p>
            </section>
            <section className="trend">
                <div className="latest">
                    <h1 className="text-3xl font-bold text-center">
                        Article of The Week<hr />
                    </h1>
                    <div className="grid-container">
                        {/* Card 1 */}
                        {articles.map((article) =>
                            <div key={article.id}
                                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <img className="rounded-t-lg w-full h-48 object-cover" src={article.image} alt={article.title} />
                                <div className="p-5">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight" style={{ color: "#344D66" }}>{article.title}</h5>
                                    <p className="mb-3 font-normal" style={{ color: "#344D66" }}>Industrial Loft Style cafe. Serve
                                        {article.article.substring(0, 60)}...</p>
                                    <button
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg transition-transform duration-300"
                                        onClick={() => handleOpenModal(article.id)}>
                                        Read more
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section >

            {/*Detail Modal*/}
            {isModalOpen && (
                <div id="createPostModal" className={`modal ${isClosing ? "fadeOut" : ""}`}
                    style={{ display: "flex" }}>
                    <div className="modal-content">
                        <div className="posting-header">
                            <h2>Recommendation of the week</h2>
                            <CloseBtn onClose={handleCloseModal} />
                        </div>
                        <div className="modal-article">
                            <h3>{selectedArticle.title}</h3>
                            <p>
                                <strong>Author:</strong> {selectedArticle.author}
                            </p>
                            <img
                                src={selectedArticle.image}
                                alt={selectedArticle.title}
                                className="modal-image"
                            />
                            <p>{selectedArticle.article}</p>
                        </div>
                    </div>
                </div>
            )};
            <Footer />

        </body >
    );
}