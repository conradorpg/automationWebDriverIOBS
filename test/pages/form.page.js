class FormPage {

  // Mapeando os elementos

  get #clickMyConversions() {
    return $('id:target_value_placeholder')
  }

  get #clickNewConversion() {
    return $('id:btn_new_custom_conversion')
  }

  get #setConversionName() {
    return $('id:edit_custom_conversion_category_name')
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

  get #expectNameUnit() {
    return $('id:custom_conversion_manager_single_unit_name')
  }

  get #expectValueUnit() {
    return $('id:custom_conversion_manager_single_unit_value')
  }

  //Criando métodos com os elementos mapeados

  async myConversions() {
    await this.#clickMyConversions.click()
  }

  async newConversion() {
    await this.#clickNewConversion.click()
  }

  async conversionName() {
    await this.#setConversionName.setValue('Medida de Teste')
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

  async expectName() {
    await this.#expectNameUnit.getText()
  }

  async expectValue() {
    await this.#expectValueUnit.getText()
  }
}

module.exports = new FormPage()