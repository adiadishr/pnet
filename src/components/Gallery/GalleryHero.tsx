import './index.css'
import { galleryImages } from '../../data'

const GalleryHero = () => {
    return (
        <div className="w-full flex px-[5%] mt-[60px] min-h-screen">
            <div className="p-5 md:p-10">
                <div id="gallery" className="columns-1 gap-5 sm:columns-2 lg:columns-3 lg:gap-8 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
                    {galleryImages.map((image) => (
                        <img data-aos='fade-up' data-aos-duration='700' loading='lazy' src={image.url}></img>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GalleryHero