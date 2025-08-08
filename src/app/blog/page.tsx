import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { format } from 'date-fns';

export const metadata = {
  title: "Blog | Kingsley's AI Portfolio",
  description: "Read articles about AI, web development, and more.",
};

export default function BlogIndex() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="font-headline text-5xl md:text-6xl font-bold">Blog</h1>
        <p className="mt-4 text-xl text-muted-foreground">Thoughts on technology, AI, and development.</p>
      </header>
        {allPostsData.length > 0 ? (
          <div className="grid gap-8">
            {allPostsData.map(({ slug, date, title }) => (
              <Link href={`/blog/${slug}`} key={slug} className="block group">
                <Card className="transition-all duration-300 ease-in-out group-hover:border-primary group-hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="font-headline text-3xl text-primary">{title}</CardTitle>
                    <CardDescription>
                      <time dateTime={date}>{format(new Date(date), 'LLLL d, yyyy')}</time>
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
             <div className="text-center text-muted-foreground py-16">
                <p>There are no blog posts yet.</p>
                <p className="text-sm mt-2">Add Markdown files to the `posts` directory to display them here.</p>
            </div>
        )}
    </div>
  );
}
