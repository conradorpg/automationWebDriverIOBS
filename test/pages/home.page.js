class HomePage {

// Mapeando os elementos

  get #clickOpenMenu() {
    return $('~Open navigation drawer')
  }

  get #clickMyConversions() {
    return $('id:target_value_placeholder')
  }

  get #clickNewConversion() {
    return $('id:btn_new_custom_conversion')
  }

  get #ClickNewUnit() {
    return $('id:btn_new_custom_unit')
  }

  get #setNameUnit() {
    return $('id:edit_custom_conversion_unit_dtls_name')
  }


  get #setSymbolUnit() {
    return $('id:edit_custom_conversion_unit_dtls_symbol')
  }


  get #setValueUnit() {
    return $('id:edit_custom_conversion_unit_dtls_value')
  }

  get #clickButtonOK() {
    return $('id:btn_unit_dtls_ok')
  }

  //Criando métodos com os elementos mapeados
  
  async openMenu() {
    await this.#clickOpenMenu.click()
  }

  async myConversions() {
    await this.#clickMyConversions.click()
  }

  async newConversion() {
    await this.#clickNewConversion.click()
  }

  async newUnit() {
    await this.#ClickNewUnit.click()
  }

  async nameUnit() {
    await this.#setNameUnit.setValue('Teste')
  }

  async symbolUnit() {
    await this.#setSymbolUnit.setValue('T')
  }

  async valueUnit() {
    await this.#setValueUnit.setValue('0.05')
  }

  async buttonOK() {
    await this.#clickButtonOK.click()
  }
}

module.exports = new HomePage()