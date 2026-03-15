const { test, describe } = require('node:test')
const assert = require('node:assert')

const listHelper = require('../utils/list_helper')

describe('total likes', () => {

  const emptyList = []

  const listWithOneBlog = [
    {
      _id: '1',
      title: 'Test blog',
      author: 'Reard',
      url: 'http://example.com',
      likes: 5
    }
  ]

  const listWithManyBlogs = [
    { title: 'a', likes: 5 },
    { title: 'b', likes: 3 },
    { title: 'c', likes: 7 }
  ]

  test('of empty list is zero', () => {
    const result = listHelper.totalLikes(emptyList)
    assert.strictEqual(result, 0)
  })

  test('when list has only one blog equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    assert.strictEqual(result, 5)
  })

  test('of many blogs is calculated correctly', () => {
    const result = listHelper.totalLikes(listWithManyBlogs)
    assert.strictEqual(result, 15)
  })
});

describe('favorite blog', () => {
  const blogs = [
    {
      _id: "1",
      title: "React patterns",
      author: "Michael Chan",
      url: "https://reactpatterns.com/",
      likes: 7
    },
    {
      _id: "2",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://example.com",
      likes: 5
    },
    {
      _id: "3",
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      url: "http://example.com",
      likes: 12
    }
  ]

  test('returns the blog with most likes', () => {
    const result = listHelper.favoriteBlog(blogs)

    assert.deepStrictEqual(result, blogs[2])
  })
});

describe('most blogs', () => {

  const blogs = [
    { title: "a", author: "Robert C. Martin", likes: 5 },
    { title: "b", author: "Robert C. Martin", likes: 3 },
    { title: "c", author: "Edsger W. Dijkstra", likes: 10 },
    { title: "d", author: "Robert C. Martin", likes: 1 },
    { title: "e", author: "Michael Chan", likes: 7 }
  ]

  test('author with most blogs', () => {
    const result = listHelper.mostBlogs(blogs)

    assert.deepStrictEqual(result, {
      author: "Robert C. Martin",
      blogs: 3
    })
  })
});

describe('most likes', () => {
  const blogs = [
    { title: "a", author: "Edsger W. Dijkstra", likes: 5 },
    { title: "b", author: "Edsger W. Dijkstra", likes: 12 },
    { title: "c", author: "Robert C. Martin", likes: 10 },
    { title: "d", author: "Robert C. Martin", likes: 3 }
  ]

  test('author with most total likes', () => {
    const result = listHelper.mostLikes(blogs)

    assert.deepStrictEqual(result, {
      author: "Edsger W. Dijkstra",
      likes: 17
    })
  })
});
