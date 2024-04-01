import { useNavigate, useParams } from '@remix-run/react';
import getPostByIdQuery from '../../queries/getPostByIdQuery';
import { useQuery } from '@tanstack/react-query';
import PageWrapper from '../../components/PageWrapper';
import PostInfo from './PostInfo';
import TextButton from '../../components/TextButton.jsx';

const PostDetailsPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery(getPostByIdQuery(id));
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <PageWrapper isLoading={isLoading} isError={isError}>
      <TextButton onClick={handleBackClick} label="Back" />
      <PostInfo post={data} />
    </PageWrapper>
  );
};

export default PostDetailsPage;