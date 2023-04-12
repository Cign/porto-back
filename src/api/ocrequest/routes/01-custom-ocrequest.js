module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/ocrequests/text', 
        handler: 'ocrequest.OCRImage',
      }
    ]
  }