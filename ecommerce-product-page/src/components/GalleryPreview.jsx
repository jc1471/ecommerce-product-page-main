import PreviewImage from "../components/PreviewImage";
import { useState } from "react";

export default function GalleryPreview({ productImages }) {

    const [active, setActive] = useState(0);

    const handleClick = (i) => {
        setActive(i);
    };

    return (
        <div className="gallery-preview">
            {productImages.map((e, i) => (
                <PreviewImage
                    key={i}
                    image={e.thumbnail}
                    isActive={active === i}
                    onClick={() => handleClick(i)}
                    />
            ))}
        </div>
    )
}