export default function PreviewImage({ key, image, active }) {
    return (
        <div className="preview-image">
            <img
                src={image}
                />
        </div>
    )
}