const path = require('path')

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve = {
        ...config.resolve,
        alias: {
            ...config.resolve.alias,
            Components: path.resolve(__dirname, 'components/'),
            Styles: path.resolve(__dirname, 'styles/'),
            Mocks: path.resolve(__dirname, 'mocks/'),
            Utils: path.resolve(__dirname, 'utils/')
        }
    }

    // Important: return the modified config
    return config
  },
  
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en/home',
        permanent: true,
      },
      {
        source: '/en',
        destination: '/en/home',
        permanent: true,
      },
      {
        source: '/ru',
        destination: '/ru/home',
        permanent: true,
      },
    ]
  }
}