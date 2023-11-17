class Size {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Image {
  /**
   * @param {string} url
   * @param {Size} size
   */
  constructor(url, size) {
    this.url = url;
    this.size = size;
  }

  getUrl() {
    return this.url;
  }

  /**
   * @param {string} url
   */
  setUrl(url) {
    this.url = url;
  }

  getSize() {
    return this.size;
  }

  /**
   * @param {Size} size
   */
  setSize(width, height) {
    this.size.width = width;
    this.size.height = height;
  }

  /**
   * @returns {Size}
   */
  cloneImage() {
    return new Image(this.url, structuredClone(this.size));
  }
}
