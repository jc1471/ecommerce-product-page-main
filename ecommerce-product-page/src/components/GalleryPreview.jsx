import PreviewImage from "../components/PreviewImage";

export default function GalleryPreview({ productImages }) {
    return (
        <div className="gallery-preview">
            {productImages.map((item) => (
                <PreviewImage
                    key={item.key}
                    image={item.thumbnail}
                    />
            ))}
        </div>
    )
}