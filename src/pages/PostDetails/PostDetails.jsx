import { useParams } from 'react-router-dom';
import getPostByIdQuery from '../../queries/getPostByIdQuery';
import { useQuery } from '@tanstack/react-query';
import PageWrapper from '../../components/PageWrapper';
import PostInfo from './PostInfo';

export const Component = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery(getPostByIdQuery(id));

  return (
    <PageWrapper isLoading={isLoading} isError={isError}>
      <PostInfo post={data} />
    </PageWrapper>
  );
};
