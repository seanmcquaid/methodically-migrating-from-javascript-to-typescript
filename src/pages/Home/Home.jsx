import { useQuery } from '@tanstack/react-query';
import getPostsQuery from '../../queries/getPostsQuery.js';
import Posts from './Posts.jsx';
import PageWrapper from '../../components/PageWrapper.jsx';
import PageHeader from '../../components/PageHeader.jsx';
import PageContent from '../../components/PageContent.jsx';

export const Component = () => {
  const { data, isLoading, isError } = useQuery(getPostsQuery());

  return (
    <PageWrapper>
      <PageHeader title="Home" />
      <PageContent>
        <Posts posts={data} />
      </PageContent>
    </PageWrapper>
  );
};
