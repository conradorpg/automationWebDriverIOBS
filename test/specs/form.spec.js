const homePage = require("../pages/home.page");
const formPage = require("../pages/form.page");


describe('Criar uma nova Unidade de Medida', () => {
  it('Criar Unidade de Teste', async () => {
  await homePage.openMenu()
  await formPage.myConversions()
  await formPage.newConversion()
  await formPage.conversionName()
  await formPage.newUnit()
  await formPage.nameUnit()
  await formPage.symbolUnit()
  await formPage.valueUnit()
  await formPage.buttonOK()

  expect(await formPage.expectName()).toHaveValue('Teste')
  expect(await formPage.expectValue()).toHaveValue('0.05')
  });
})