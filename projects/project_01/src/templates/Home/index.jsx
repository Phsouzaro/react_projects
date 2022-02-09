import './style.css';

import React, { useEffect, useState, useCallback } from 'react';

import { Posts } from '../../components/posts'
import { loadPosts } from '../../util/load-posts'
import { Button } from '../../components/Button';
import { SearchImput } from '../../components/SearchImput';


export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(4)
  const [searchValue, setSearchValue] = useState('')

  const noMorePosts = page + postsPerPage >= allPosts.length
  const filteredPosts = allPosts.filter(post => post.title.includes(searchValue.toLocaleLowerCase()))

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const photosAndPosts = await loadPosts();
    setPosts(photosAndPosts.slice(page, postsPerPage));
    setAllPosts(photosAndPosts);
  })
  useEffect(() => {
    handleLoadPosts(0, postsPerPage)
    console.log(new Date().toLocaleTimeString('pt-br'))
  }, [postsPerPage])
  const loadMorePosts = () => {
    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPosts)
    setPosts(posts);
    setPage(nextPage)
  }
  const handleSearch = (e) => {
    const { value } = e.target
    console.log(value)
    setSearchValue(value);
  }

  return (
    <section className='container'>
      {!!searchValue && (<h1>Search Value: {searchValue}</h1>)}
      <SearchImput searchValue={searchValue} handleSerch={handleSearch} />
      {filteredPosts.length === 0 && (<p>Não há posts com esse Titulo</p>)}
      {!searchValue ? <Posts posts={posts} id={posts.id} /> : <Posts posts={filteredPosts} id={filteredPosts.id} />}
      {!searchValue && (<Button text='Carregar mais Posts' click={loadMorePosts} disabled={noMorePosts} />)}
    </section >
  )
}