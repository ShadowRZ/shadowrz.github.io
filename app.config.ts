export default defineAppConfig({
  bitfield: {
    baseURL: 'https://shadowrz.github.io/',
    title: '@ShadowRZ\'s Bitfield',
    description: '👋 Hi there! This is @ShadowRZ\'s Bitfield.',
    copyright: (date: Date) => `© 2023-${date.getFullYear()} Yorusaka Miyabi`,
    generator: true,
  }
})
