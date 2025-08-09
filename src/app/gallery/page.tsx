import fs from 'fs/promises';
import path from 'path';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { create as createExifParser } from 'exif-parser';

export const metadata = {
  title: "Photo Gallery | Kingsley's AI Portfolio",
  description: "A collection of photos.",
};

async function getGalleryImages() {
    const galleryDir = path.join(process.cwd(), 'public/gallery');
    try {
        const filenames = (await fs.readdir(galleryDir))
            .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));

        const imagesWithDates = await Promise.all(
            filenames.map(async (filename) => {
                const filePath = path.join(galleryDir, filename);
                let date: Date;

                try {
                    // For JPEG files, try to read EXIF data for the original date
                    if (/\.jpe?g$/i.test(filename)) {
                        const buffer = await fs.readFile(filePath);
                        const parser = createExifParser(buffer);
                        const result = parser.parse();
                        
                        // EXIF's DateTimeOriginal is a unix timestamp in seconds
                        if (result.tags && result.tags.DateTimeOriginal) {
                            date = new Date(result.tags.DateTimeOriginal * 1000);
                            return { filename, date };
                        }
                    }
                    // For non-JPEGs or JPEGs without EXIF date, fall back to file stats
                    const stats = await fs.stat(filePath);
                    date = stats.mtime;
                } catch (e) {
                    // Further fallback if any error occurs (e.g., reading file, parsing exif)
                    console.warn(`Could not get date for ${filename}, falling back to file stats.`, e);
                    const stats = await fs.stat(filePath);
                    date = stats.mtime;
                }

                return { filename, date };
            })
        );

        // Sort images by date, newest first
        imagesWithDates.sort((a, b) => b.date.getTime() - a.date.getTime());

        return imagesWithDates.map(image => image.filename);
    } catch (error) {
        console.warn("Could not read gallery directory. This is normal if the directory doesn't exist.", error);
        return [];
    }
}

export default async function GalleryPage() {
    const imageFiles = await getGalleryImages();
    let isPlaceholder = false;

    if (imageFiles.length === 0) {
        isPlaceholder = true;
        for (let i = 1; i <= 6; i++) {
            imageFiles.push(`placeholder-${i}`);
        }
    }

    return (
        <div className="container max-w-7xl mx-auto px-4 py-12">
            <header className="text-center mb-12">
                <h1 className="font-headline text-5xl md:text-6xl font-bold">Gallery</h1>
                <p className="mt-4 text-xl text-muted-foreground">A visual journey.</p>
            </header>

            {imageFiles.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {imageFiles.map((filename, index) => (
                        <Card key={filename} className="overflow-hidden group">
                           <div className="relative w-full" style={{paddingTop: '75%'}}> {/* 4:3 Aspect Ratio */}
                                <Image
                                    src={isPlaceholder ? `https://placehold.co/600x450.png` : `/gallery/${filename}`}
                                    alt={`Gallery image ${index + 1}`}
                                    fill
                                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    data-ai-hint="nature landscape"
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                    priority={true}
                                />
                            </div>
                        </Card>
                    ))}
                </div>
            ) : (
                 <div className="text-center text-muted-foreground py-16">
                    <p>The gallery is currently empty.</p>
                    <p className="text-sm mt-2">Add images to the `public/gallery` folder to display them here.</p>
                </div>
            )}
        </div>
    );
}
