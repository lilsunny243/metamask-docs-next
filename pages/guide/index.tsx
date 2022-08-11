import type { GetStaticProps } from 'next';
import { getPages } from '../../lib/getPages';

export default function Page() {
  return <div>never gonna give you up</div>;
}

export const getStaticProps: GetStaticProps<any, any> = async () => {
  const pages = await getPages();
  const indexPage = pages.find((p) => p.meta.isIndex);

  if (!indexPage) {
    throw new Error('No index page found.');
  }

  return {
    redirect: {
      statusCode: 307,
      destination: `/${indexPage.route}`,
    },
  };
};
