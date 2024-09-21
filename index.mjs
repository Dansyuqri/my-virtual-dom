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

export function vdomify(type, props, ...children) {
  return {
    type,
    props,
    children
  };
}
