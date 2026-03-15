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

