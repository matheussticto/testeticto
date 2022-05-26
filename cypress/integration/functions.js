/// <reference types = "cypress" />


//Acesso Página
Cypress.Commands.add('Acesso', () => {
    cy.visit(Cypress.env('baseUrl'));
   
});


Cypress.Commands.add('verify', () => {
    cy.visit(Cypress.env('baseUrl'));
    cy.contains('Cadastrar').click();
    cy.contains('Nome').click();
    cy.contains('O campo Nome é obrigatório.').should('be.visible');
    cy.contains('O campo Email é obrigatório.').should('be.visible');
    cy.contains('O campo Password é obrigatório.').should('be.visible');

});


Cypress.Commands.add("CriarUser", () => {
    //Acesso Tela Cadastro


    //Dados inválidos 
    cy.get('#name').type(Cypress.env('CadastroNOK'));
    cy.get('#email').type(Cypress.env('emailnok'));
    cy.get('#password').type(Cypress.env('passwordnok'));
    cy.contains('Cadastrar').click();
    cy.contains('Insira um Nome e Sobrenome válido.').should('be.visible');
    cy.contains('O campo Password deve ter no minimo 8 caracteres.').should('be.visible');

    //Dados Válidos
    cy.get('#name').clear().type(Cypress.env('name'));
    cy.get('#email').clear().type(Cypress.env('email'));
    cy.get('#password').clear().type(Cypress.env('password'));
    cy.contains('Cadastrar').click();
    cy.contains('Usuário cadastrado com sucesso.').should('be.visible');
  
});

Cypress.Commands.add("EditUser", () => {
   
    //Editar Dados do usuário inválidos
    cy.get(':nth-child(1) > .mt-5').contains('matheus@ticto.com.br') 
    .siblings()
    .children()         
    .filter(':contains("Ações")')         
    .click()    
    .contains('Editar')        
    .click({ force: true });
    cy.get("[value='Matheus Santos']")    
    .click({multiple:true,force:true})     
    .should('have.value', 'Matheus Santos')         
    .clear({force:true})   
    cy.get('.form-control')    
    .type('TESTE TESTE')
    // cy.get(':nth-child(1) > .mt-5').clear().type(Cypress.env('CadastroNOK'));
    // cy.get('input[id*=email]').clear().type(Cypress.env('emailnok'));
    // cy.contains('Insira um Nome e Sobrenome válido.').should('be.visible');
    // cy.contains('Fechar').click;

    // //Editar Dados Válidos
    // cy.get(':nth-child(1) > :nth-child(4) > .btn-group > .btn').click({force:true});
    // cy.get('div.show:nth-child(2) > a:nth-child(1)').click({force: true});
    // cy.get('#modalEdit482 > .modal-dialog > .modal-content > .modal-body > :nth-child(4)').focus().type(Cypress.env('nome'));
    // cy.get('#modalEdit482 > .modal-dialog > .modal-content > .modal-body > :nth-child(5)').focus().type(Cypress.env('email'));
    // cy.contains('Usuário salvo com sucesso.').should('be.visible');
    
});

Cypress.Commands.add("DeleteUser", () => {
   
    //Delete User 
    cy.reload();
    cy.get(':nth-child(1) > :nth-child(4) > .btn-group > .btn').click({force:true});
    cy.contains('Excluir').click({force:true});
    cy.contains('Usuário removido com sucesso.').should('be.visible');

    
  
});


