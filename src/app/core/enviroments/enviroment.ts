export const environment = {
    production: false,
    apiKey: process.env['NG_APP_API_KEY'] || '',
    urlGif: process.env['NG_APP_URL_GIF'] || 'https://api.giphy.com/v1/gifs'
  };