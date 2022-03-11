import React from "react";

export function AboutPage () {
    return (
        <div>
            <main>
                <div>
                    <AboutSection />
                </div>
            </main>
        </div>
    );
}

function AboutSection () {
    return (
        <section id="aboutSection">
            <h2>About</h2>
            <p>
                Moodie Foodies is here to help sort your cravings on different foods and cuisines.
            </p>
            <h2>How to Navigate</h2>
            <p>
                Click a country's cuisine to look at listings of the food and local restaraunts.
            </p>
            <h3>
                Adding a Restaurant
            </h3>
            <p>
                Add a restaurant you discovered by 
            </p>
        </section>
    );
}