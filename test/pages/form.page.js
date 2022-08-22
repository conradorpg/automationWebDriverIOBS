class FormPage {

  // Mapeando os elementos
  
  get #inputField() {
    return $('~text-input')
  }

  // get #clickSwitch() {
  //   return $('~switch')
  // }

  // get #clickDropdown() {
  //   return $('~Dropdown')
  // }

  // get #clickButtonActive() {
  //   return $('id:button-Active')
  // }

  // get #clickOkActive() {
  //   return $('id:android:id/button1')
  // }

  //Criando métodos com os elementos mapeados

  async inputField() {
    await this.#inputField.setValue('texto de teste')
  }

  // async clickSwitch() {
  //   await this.#clickSwitch.click()
  // }

  // async clickDropdown() {
  //   // await this.#storeCredentials.waitForClickable()
  //   await this.#clickDropdown.click()
  // }

  // async clickButtonActive() {
  //   await this.#clickButtonActive.click()
  // }

  // async clickOkActive() {
  //   await this.#clickOkActive.click()
  // }

}

module.exports = new FormPage()