const homePage = require("../pages/home.page");
const formPage = require("../pages/form.page");


describe('Verificar Formulário', () => {
  it('Verificar itens do formulário', async () => {
  await homePage.clickForms()
  await formPage.inputField()
  // await formPage.clickSwitch()
  // await formPage.clickDropdown()
  // await formPage.clickButtonActive()
  // await formPage.clickOkActive()
  });
})