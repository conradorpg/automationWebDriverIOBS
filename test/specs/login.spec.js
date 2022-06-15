const homePage = require("../pages/home.page");
const loginPage = require("../pages/login.page");
const storePage = require("../pages/store.page");

let urlSite = 'http://lojaebac.ebaconline.art.br/'
let user = 'gerente'
let password = 'GD*peToHNJ1#c$sgk08EaYJQ'

describe('Realizar login', () => {
  it('Login com sucesso com dados válidos', async () => {
  await homePage.goToLogin()
  await loginPage.setStoreAddress(urlSite)
  await loginPage.continue()
  await loginPage.storeCredentials()
  await loginPage.login(user, password)
  await loginPage.goToVerifyPassword()
  await loginPage.verifyPassword(password)

  expect(await storePage.storeLogo()).toBeTruthy()
  // expect(await storePage.storeName()).toEqual('EBAC - Shop')
  });
})

// com.woocommerce.android:id/button_login_store
// 	com.woocommerce.android:id/textinput_placeholder
// com.woocommerce.android:id/bottom_button