import { ArticleView } from '@/widgets/ArticleView/ArticleView';

/**
 * Папка [slug] = динамический сегмент URL. Для /articles/hello-world
 * Next передаёт в props: { params: { slug: 'hello-world' } }.
 * В Next 15 params в асинхронном компоненте приходит как Promise (можно await).
 */
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return { title: `Статья: ${slug}` };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <ArticleView slug={slug} />;
}
