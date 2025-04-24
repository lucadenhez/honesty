import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function PhotoCarousel({ images }) {
    const formattedImages = images.map((image) => ({
        original: image,
        thumbnail: image,
    }));

    return (
        <div className="rounded-xl overflow-hidden w-full">
            <ReactImageGallery
                infinite={true}
                showThumbnails={false}
                items={formattedImages}
                autoPlay={false}
                showPlayButton={false}
            />
        </div>
    );
}
