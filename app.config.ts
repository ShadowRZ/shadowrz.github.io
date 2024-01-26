export default defineAppConfig({
  bitfield: {
    baseURL: 'https://shadowrz.github.io/',
    title: '@ShadowRZ\'s Bitfield',
    description: '👋 Hi there! This is @ShadowRZ\'s Bitfield.',
    copyright: (date: Date) => `© 2023-${date.getFullYear()} Yorusaka Miyabi`,
    generator: true,
    navigation: [
      {
        icon: 'ph:house-duotone',
        name: 'Home',
        to: '/'
      },
      {
        icon: 'ph:info-duotone',
        name: 'About',
        to: '/about'
      },
      {
        icon: 'ph:swatches-duotone',
        name: 'Brands (?)',
        to: '/brands'
      }
    ]
  }
})
