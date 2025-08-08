import fs from 'fs/promises';
import path from 'path';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

export const metadata = {
  title: "Photo Gallery | Kingsley's AI Portfolio",
  description: "A collection of photos.",
};

async function getGalleryImages() {
    const galleryDir = path.join(process.cwd(), 'public/gallery');
    try {
        const filenames = await fs.readdir(galleryDir);
        return filenames.filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));
    } catch (error) {
        console.warn("Could not read gallery directory. This is normal if the directory doesn't exist.", error);
        return [];
    }
}

export default async function GalleryPage() {
    let imageFiles = await getGalleryImages();
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
