import { acessarLoginESignup, realizarlogout, deletaUsuario, acessarContato, acessarProdutos, subscricao } from "../modules/home.module.js";
import { registraEmailExistente } from "../modules/register.module.js";
import { realizaLogin, loginInvalido, loginExistente } from "../modules/login.module.js";
import { registraUsuario } from "../modules/register.module.js";
import { realizarContato } from "../modules/contact.module.js";
import { adicionarProdutoNoCarrinhoPorIndex, procurarProduto, validaDetalhesDoProduto } from "../modules/products.module.js";
import { confirmarPedido, realizarPagamento } from "../modules/checkout.module.js";

describe("Automation Exercise - spec agrupada", () => {
  beforeEach(function () {
    cy.visit("https://automationexercise.com/");
    cy.fixture("register-user").as("f");
  });

  it("Test Case 1: Registra usuário e depois deleta", function () {
    acessarLoginESignup();
    registraUsuario(this.f);
    deletaUsuario();
  });

  it("Test Case 2: Login com usuário existente", function () {
    acessarLoginESignup();
    loginExistente(this.f);
  });

  it("Test Case 3: Login com usuário incorreto", function () {
    acessarLoginESignup();
    loginInvalido(this.f);
  });

  it("Test Case 4: Logout com usuário", function () {
    acessarLoginESignup();
    realizaLogin(this.f);
    realizarlogout();
  });

  it("Test Case 5: Cadastro com e-mail existente", function () {
    acessarLoginESignup();
    registraEmailExistente(this.f);
  });

  it("Test Case 6: Contate-nos formulário", function () {
    acessarContato();
    realizarContato(this.f);
  });

  it("Test Case 8: Verifica todos os produtos e detalhe da página", function () {
    acessarProdutos();
    validaDetalhesDoProduto();
  });

  it("Test Case 9: Procura produto", function () {
    acessarProdutos();
    procurarProduto(this.f);
  });

  it("Test Case 10: Verifica inscrição na home page", function () {
    subscricao();
  });

  it("Test Case 15: Registrar usuário antes do Checkout", function () {
    acessarLoginESignup();
    registraUsuario(this.f);
    acessarProdutos();
    adicionarProdutoNoCarrinhoPorIndex(0);
    confirmarPedido();
    realizarPagamento(this.f);
    deletaUsuario();
  });
});
