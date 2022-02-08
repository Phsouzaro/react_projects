import './style.css';

import React from 'react';

import { Posts } from '../../components/posts'
import { loadPosts } from '../../util/load-posts'
import { Button } from '../../components/Button';
import { SearchImput } from '../../components/SearchImput';

export class Home extends React.Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 4,
    searchValue: ''
  };
  async componentDidMount() {
    await this.loadPosts()
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const photosAndPosts = await loadPosts()
    this.setState({
      posts: photosAndPosts.slice(page, postsPerPage),
      allPosts: photosAndPosts,
    })
  }
  loadMorePosts = () => {
    const { posts, allPosts, page, postsPerPage } = this.state
    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPosts)
    this.setState({ posts, page: nextPage })
  }
  handleSerch = (e) => {
    const { value } = e.target
    this.setState({ searchValue: value })
  }


  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length
    const filteredPosts = allPosts.filter(post => post.title.includes(searchValue.toLocaleLowerCase()))
    return (
      <section className='container'>
        {!!searchValue && (<h1>Search Value: {searchValue}</h1>)}
        <SearchImput searchValue={searchValue} handleSerch={this.handleSerch} />
        {filteredPosts.length === 0 && (<p>Não há posts com esse Titulo</p>)}
        {!searchValue ? <Posts posts={posts} /> : <Posts posts={filteredPosts} />}
        {!searchValue && (<Button text='Carregar mais Posts' click={this.loadMorePosts} disabled={noMorePosts} />)}
      </section >
    )
  }
}

