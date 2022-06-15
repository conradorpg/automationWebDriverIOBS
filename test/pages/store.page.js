class StorePage {

  get #storeLogo() {
    return $('collapsing_toolbar')
  }

  get #storeName() {
    return $('id:collapsing_toolbar')
  }

  async storeLogo() {
    await this.#storeLogo.waitForExist()
    return await this.#storeLogo.isDisplayed()
  }

  async storeName() {
    await this.#storeName.waitForExist()
    return await this.#storeName.getText()
  }
}

module.exports = new StorePage()