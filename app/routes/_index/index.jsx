import { useQuery } from '@tanstack/react-query';
import getPostsQuery from '../../queries/getPostsQuery.js';
import Posts from './Posts';
import PageWrapper from '../../components/PageWrapper.jsx';
import PageHeader from '../../components/PageHeader.jsx';
import PageContent from '../../components/PageContent.jsx';
import { useState } from 'react';
import TextInput from '../../components/TextInput.jsx';

const HomePage = () => {
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

export default HomePage;
