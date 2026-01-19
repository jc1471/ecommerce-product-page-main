export default function PreviewImage({ image, isActive, onClick }) {
    return (
        <div className={`preview-image ${isActive ? "active" : ""}`}
            onClick={onClick}
        >
            <img
                src={image}
                />
        </div>
    )
}