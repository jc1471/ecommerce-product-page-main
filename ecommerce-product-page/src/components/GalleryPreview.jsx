import PreviewImage from "../components/PreviewImage";

export default function GalleryPreview({ productImages, activeIndex, setActiveIndex }) {

    return (
        <div className="gallery-preview">
            {productImages.map((e, i) => (
                <PreviewImage
                    key={i}
                    image={e.thumbnail}
                    isActive={activeIndex === i}
                    onClick={() => setActiveIndex(i)}
                    />
            ))}
        </div>
    )
}