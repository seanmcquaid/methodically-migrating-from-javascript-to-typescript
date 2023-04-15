import { useQuery } from '@tanstack/react-query';
import getPostsQuery from '../../queries/getPostsQuery';
import Posts from './Posts';
import PageWrapper from '../../components/PageWrapper';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
import { useState } from 'react';
import TextInput from '../../components/TextInput.jsx';

export const Component = () => {
  const { data, isLoading, isError } = useQuery(getPostsQuery());
  const [searchText, setSearchText] = useState('');
  const filteredPosts = data?.filter(post =>
    post.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  const handleOnChange = event => {
    setSearchText(event.target.value);
  };

  return (
    <PageWrapper isLoading={isLoading} isError={isError}>
      <div className="flex">
        <PageHeader title="Posts" />
        <TextInput
          onChange={handleOnChange}
          name="filterText"
          label="Filter text"
          value={searchText}
        />
      </div>
      <PageContent>
        <Posts posts={filteredPosts} />
      </PageContent>
    </PageWrapper>
  );
};
