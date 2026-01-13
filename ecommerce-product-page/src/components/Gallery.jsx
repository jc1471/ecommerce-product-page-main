import imageProduct1 from "../assets/images/image-product-1.jpg";
import productImages from "../assets/productImages";
import iconNext from "../assets/images/icon-next.svg";
import iconPrevious from "../assets/images/icon-previous.svg";
import MainImage from "../components/MainImage";
import GalleryPreview from "./GalleryPreview";

export default function Gallery() {
 

    let currentImage = productImages[0];

    return (
        <div className="gallery">
            <MainImage currentImage={currentImage} />
            <GalleryPreview productImages={productImages}/>
        </div>
    )
}