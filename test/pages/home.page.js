class HomePage {

// Mapeando os elementos

  get #clickForms() {
    return $('~Forms')
  }

  //Criando métodos com os elementos mapeados
  
  async clickForms() {
    await this.#clickForms.click()
  }
}

module.exports = new HomePage()