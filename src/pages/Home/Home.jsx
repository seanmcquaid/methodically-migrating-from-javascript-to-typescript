import { useQuery } from '@tanstack/react-query';
import getPostsQuery from '../../queries/getPostsQuery';
import Posts from './Posts';
import PageWrapper from '../../components/PageWrapper';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';

export const Component = () => {
  const { data, isLoading, isError } = useQuery(getPostsQuery());

  return (
    <PageWrapper isLoading={isLoading} isError={isError}>
      <PageHeader title="Home" />
      <PageContent>
        <Posts posts={data} />
      </PageContent>
    </PageWrapper>
  );
};
