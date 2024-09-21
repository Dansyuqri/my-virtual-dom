import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createElement } from './index.mjs';

test('create header', () => {
  const createdElement = createElement('h1', {}, 'test');
  assert.deepEqual(createdElement, {
    type: 'h1',
    props: {},
      children: ['test']
  });
});

test('create element with props', () => {
  const createdElement = createElement('ul', { 'class': 'list' });
  assert.deepEqual(createdElement, {
    type: 'ul',
    props: {
      'class': 'list'
    },
      children: []
  });
});

test('create element with props and children', () => {
  const createdElement = createElement('ul', { 'class': 'list' },
    createElement('li', {}, 'hello'),
    createElement('li', {}, 'world'),
  );
  assert.deepEqual(createdElement, {
    type: 'ul',
    props: {
      'class': 'list'
    },
      children: [
        {
          type: 'li',
          props: {},
          children: ['hello']
        },
        {
          type: 'li',
          props: {},
          children: ['world']
        }
      ]
  });
});