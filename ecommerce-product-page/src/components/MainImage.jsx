import iconNext from "../assets/images/icon-next.svg";
import iconPrevious from "../assets/images/icon-previous.svg";
import imageProduct1 from "../assets/images/image-product-1.jpg";


export default function MainImage({ currentImage }) {
    return (
        <div className="main-image">
            <img
                className="current-image"
                src={currentImage.image}
                />
                        <div className="gallery-buttons">
                            <img
                                className="arrow previous-button"
                                src={iconPrevious}
                            />
                            <img
                                className="arrow next-button"
                                src={iconNext}
                            />
                        </div>
        </div>
    )
}