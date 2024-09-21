const virtualRepresentation = [
  {
    type: 'h1',
    props: {},
    children: [],
  },
  {
    type: 'ul',
    props: {
      'class': 'list'
    },
    children: [
      {
        type: 'li',
        props: {},
        children: [
          'hello'
        ]
      },
      {
        type: 'li',
        props: {},
        children: [
          'world'
        ]
      }
    ]
  }
]

function createElement(type, props, children) {
  return;
}