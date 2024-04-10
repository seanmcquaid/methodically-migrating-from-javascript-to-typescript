import { useNavigate, useParams } from '@remix-run/react';
import getPostByIdQuery from '@/services/queries/getPostByIdQuery';
import { useQuery } from '@tanstack/react-query';
import PageContent from '@/components/PageContent';
import PostInfo from './PostInfo';
import TextButton from '@/components/TextButton';

const PostDetailsPage = () => {
  const { id } = useParams();
  const { data } = useQuery(getPostByIdQuery(id));
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <PageContent>
      <TextButton onClick={handleBackClick} label="Back" />
      <PostInfo post={data} />
    </PageContent>
  );
};

export default PostDetailsPage;
