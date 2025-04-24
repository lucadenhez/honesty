import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const importAll = (requireContext) => requireContext.keys().map(requireContext);
const images = importAll(require.context("../../public/images", false, /\.(png|jpe?g|svg)$/));

export default function PhotoCarousel(props) {
    const galleryImages = images.map((image) => ({
        original: image,
        thumbnail: image
    }));

    return (
        <ReactImageGallery infinite={ true } showThumbnails={ false } items={ galleryImages } autoPlay={ false } showPlayButton={ false } {...props} />
    );
}
