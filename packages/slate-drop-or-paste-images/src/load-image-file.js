import dataUriToBlob from './data-uri-to-blob'
import isDataUri from 'is-data-uri'
import imageToDataUri from './image-to-data-uri'

/**
 * Load an image file from a src `url`.
 *
 * @param {String} url
 * @param {Function} callback
 */

function loadImageFile(url, callback) {
  if (isDataUri(url)) {
    const file = dataUriToBlob(url)
    setTimeout(() => {
      callback(null, file)
    })
  } else {
    imageToDataUri(url, (err, uri) => {
      if (err != null)
        callback(err)
      else {
        const file = dataUriToBlob(uri)
        callback(null, file)
      }
    })
  }
}

/**
 * Export.
 *
 * @type {Function}
 */

export default loadImageFile
