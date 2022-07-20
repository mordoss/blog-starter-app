import cn from 'classnames';
import Link from 'next/link';

type Props = {
    title: string;
    src: string;
    slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
    const image = (
        <img
            src={src}
            alt={`Cover Image for ${title}`}
            style={{ margin: 'auto' }}
            className={cn(
                'shadow-sm hover:scale-105 transition:scale duration-500',
                {
                    'hover:shadow-lg transition-all duration-500': slug,
                }
            )}
        />
    );
    return (
        <div className="sm:mx-0">
            {slug ? (
                <Link as={`/posts/${slug}`} href="/posts/[slug]">
                    <a aria-label={title}>{image}</a>
                </Link>
            ) : (
                image
            )}
        </div>
    );
};

export default CoverImage;
