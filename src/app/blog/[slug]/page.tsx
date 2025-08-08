import { getPostData, getAllPostSlugs } from '@/lib/posts';
import { format } from 'date-fns';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type PageProps = {
    params: {
        slug: string;
    }
}

export async function generateMetadata({ params }: PageProps) {
  try {
    const postData = await getPostData(params.slug);
    return {
      title: `${postData.title} | Kingsley's AI Portfolio`,
    };
  } catch {
    return {
      title: "Post Not Found | Kingsley's AI Portfolio",
    }
  }
}

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths.map((path: { slug: string }) => ({ slug: path.slug }));
}


export default async function Post({ params }: PageProps) {
  try {
    const postData = await getPostData(params.slug);

    return (
      <article className="container max-w-3xl mx-auto px-4 py-12">
          <div className="mb-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:underline">
              <ArrowLeft className="w-4 h-4" />
              Back to blog
            </Link>
          </div>

        <header className="mb-8">
          <h1 className="font-headline text-4xl md:text-5xl font-bold mb-2">{postData.title}</h1>
          <p className="text-muted-foreground">
            <time dateTime={postData.date}>{format(new Date(postData.date), 'LLLL d, yyyy')}</time>
          </p>
        </header>
        
        <div 
          className="space-y-6 text-lg leading-relaxed [&_h2]:font-headline [&_h2]:text-3xl [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:text-primary [&_h3]:font-headline [&_h3]:text-2xl [&_h3]:mt-6 [&_h3]:mb-3 [&_h3]:text-primary [&_a]:text-primary hover:[&_a]:underline [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
        />
      </article>
    );
  } catch {
    notFound();
  }
}
