import imageProduct1 from "../assets/images/image-product-1.jpg";
import iconNext from "../assets/images/icon-next.svg";
import iconPrevious from "../assets/images/icon-previous.svg";

export default function Gallery() {
    return (
        <div className="gallery">
            <img
                className="gallery-image"
                src={imageProduct1}    
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