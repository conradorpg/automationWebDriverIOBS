class LoginPage {

  // Mapeando os elementos
  get #storeAddress() {
    return $('android.widget.EditText')
  }

  get #continue() {
    return $('id:bottom_button')
  }

  get #storeCredentials() {
    return $('id:login_site_creds')
  }

  get #username() {
    return $('android=new UiSelector().text("Username")')
  }

  get #password() {
    return $('android=new UiSelector().text("Password")')
  }

  get #verifyPassword() {
    return $('id:login_enter_password')
  }

  //Criando métodos com os elementos mapeados

  async setStoreAddress(url) {
    this.#storeAddress.setValue(url)
  }

  async continue() {
    await this.#continue.click()
  }

  async storeCredentials() {
    await this.#storeCredentials.click()
  }

  async login(username, password) {
    await this.#username.setValue(username)
    await this.#password.setValue(password)
    await this.#continue.click()
  }

  async goToVerifyPassword() {
    await this.#verifyPassword.click()
  }

  async verifyPassword(password) {
    await this.#password.setValue(password)
    await this.#continue.click()
  }

}

module.exports = new LoginPage()