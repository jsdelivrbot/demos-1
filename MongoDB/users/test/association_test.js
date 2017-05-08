const mongoose = require('mongoose');
const assert = require('assert');
const User = require('../src/user');
const BlogPost = require('../src/blogPost');
const Comment = require('../src/comment');

describe('Assosiations', () => {

  let joe, blogPost, comment;

  beforeEach((done) => {
    joe = new User({ name: 'Joe' });
    blogPost = new BlogPost({ title: 'title', content: 'content' });
    comment = new Comment({ content: 'comment' });

    joe.blogPosts.push(blogPost);
    blogPost.comments.push(comment);
    comment.author = joe;

    Promise.all([joe.save(), blogPost.save(), comment.save()])
      .then(() => done());
  });

  it('saves a relation between a user and a blogPost', (done) => {
    User.findOne({ name: 'Joe' })
      .populate('blogPosts')
      .then((user) => {
        assert(user.blogPosts[0].title === 'title');
        done();
      });
  });

  it('save a full relation tree', (done) => {
    User.findOne({ name: 'Joe' })
      .populate({
        path: 'blogPosts',
        populate: {
          path: 'comments',
          model: 'comment',
          populate: {
            path: 'author',
            model: 'user'
          }
        }
      })
      .then((user) => {
        assert(user.name === 'Joe');
        assert(user.blogPosts[0].title === 'title');
        assert(user.blogPosts[0].comments[0].content = 'comment');
        assert(user.blogPosts[0].comments[0].author.name = 'Joe');
        done();
      });
  });
});
