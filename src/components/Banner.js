import React from "react"

const Banner = ()=> {

function handleExploreProducts(){
    document.getElementById('menu').click();
} 

    return (
        <div className="home_main">
            <div className="home_content1">
                <p>Welcome to ANA | Yoga Essentials!!!We specialize in sustainable eco-friendly yoga accessories.</p>
                <p>
                    Yoga is more than just a physical practice. 
                    It's a lifestyle that emphasizes mindfulness, compassion and sustainability. 
                    Many yogis are now recognizing the importance of sustainability and seeking ways to make their practice more eco-friendly. 
                    One key way to do this is by choosing sustainable yoga products.
                </p>
                <button className="home_content1_button"  onClick={handleExploreProducts}>
                    Explore our eco-friendly products!!!
                </button>
            </div>
        </div>
    )
}

export default Banner;