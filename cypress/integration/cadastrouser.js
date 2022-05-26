/// <reference types = "cypress" />
import "./functions"

beforeEach(() => cy.Acesso());
beforeEach(() => cy.get('.bg-gradient').should('be.visible'))

describe('Verificar Campos',() => {
    it('Verify Campos',() => {
        cy.verify();

    })

    


    it('Criar Usuário',() => {
        cy.reload();
        cy.CriarUser();

    })
   
    it('Deletar Usuário',() => {
        cy.DeleteUser();

    })
   

    it('Editar Usuário',() => {
        cy.EditUser();

    })
   

})
