import iconNext from "../assets/images/icon-next.svg";
import iconPrevious from "../assets/images/icon-previous.svg";
import imageProduct1 from "../assets/images/image-product-1.jpg";


export default function MainImage({ image, activeIndex, setActiveIndex, productImages }) {
    
    const handlePrevious = () => {
        setActiveIndex((activeIndex) => 
            activeIndex === 0 ? productImages.length - 1 : activeIndex - 1
        );
    };

    const handleNext = () => {
        setActiveIndex((activeIndex) =>
            activeIndex === productImages.length - 1 ? 0 : activeIndex + 1
        );
    };
    

    return (
        <div className="main-image">
            <img
                className="current-image"
                src={image.image}
                />
                        <div className="gallery-buttons">
                            <img
                                className="arrow previous-button"
                                src={iconPrevious}
                                onClick={handlePrevious}
                            />
                            <img
                                className="arrow next-button"
                                src={iconNext}
                                onClick={handleNext}
                            />
                        </div>
        </div>
    )
}