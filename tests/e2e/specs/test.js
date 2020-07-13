// https://docs.cypress.io/api/introduction/api.html

describe('Requirements test', async () => {
  it('should be a Vue application', () => {
    cy.visit('/')
    cy.get('svg')
      .eq(0)
      .should('have.prop', '__vue__')
  })

  it('should show an error when "name" field is empty', () => {
    cy.visit('/')
    cy.get('.field input')
      .eq(0)
      .type(' ')

    cy.get('.field input')
      .eq(1)
      .click()

    expect(cy.contains(`O campo 'Título do Pedido' é obrigatório`)).to.exists
  })

  it('should show an error when "name" field has less than 3 characters', () => {
    cy.visit('/')
    cy.get('.field input')
      .eq(0)
      .type('fo')

    cy.get('.field input')
      .eq(1)
      .click()

    expect(
      cy.contains(
        `O campo 'Título do Pedido' deve conter pelo menos 3 caracteres`
      )
    ).to.exists
  })

  it('should show an error when "flavour" field is empty', () => {
    cy.visit('/')
    cy.get('.field input')
      .eq(1)
      .click()

    cy.get('.field input')
      .eq(0)
      .click()

    expect(cy.contains(`O campo 'Sabor' é obrigatório`)).to.exists
  })

  it('should show an error when "flavour" field has less than 3 characters', () => {
    cy.visit('/')
    cy.get('.field input')
      .eq(1)
      .type('fo')

    cy.get('.field input')
      .eq(0)
      .click()

    expect(cy.contains(`O campo 'Sabor' deve conter pelo menos 3 caracteres`))
      .to.exists
  })

  it('should show an error when "price" field is less than 0.01', () => {
    cy.visit('/')
    cy.get('.field input')
      .eq(0)
      .type(' ')

    cy.get('.field input')
      .eq(2)
      .click()

    cy.get('.field input')
      .eq(0)
      .click()

    expect(cy.contains(`O campo 'Preço' precisa ser 0.01 ou maior`)).to.exists
  })

  it('should keep values when changing order type', () => {
    cy.visit('/')
    cy.get('.field input')
      .eq(0)
      .type('Suco de Goiaba')

    cy.get('.switch__bar').click()
    cy.get('.field input')
      .eq(0)
      .then($el => expect($el.val()).to.equal('Suco de Goiaba'))
  })

  it('should clean form when clean button is pressed', () => {
    cy.contains('Limpar').click()
    cy.get('.field input').then($el => {
      expect($el.eq(0).val()).to.equal('')
      expect($el.eq(1).val()).to.equal('')
      expect($el.eq(2).val()).to.equal('R$ 0,00')
    })
  })

  it('should not let the user submit the form with invalid parameters', () => {
    cy.visit('/')
    cy.get('.field input')
      .eq(1)
      .type('fo')

    cy.get('.button:disabled').should('have.text', 'Cadastrar')
  })

  it('should generate a preview when user uploads a file', () => {
    cy.visit('/')
    cy.get('.image-upload input').attachFile(
      '../../../src/assets/img/images.png'
    )

    cy.get('.image-upload img').then($el => {
      expect($el.attr('src')).to.match(/data:image/)
    })
  })

  it('should generate a preview when user uploads a file via drag and drop', () => {
    cy.visit('/')
    cy.get('.image-upload input').attachFile(
      '../../../src/assets/img/images.png',
      {
        subjectType: 'drag-n-drop'
      }
    )

    cy.get('.image-upload img').then($el => {
      expect($el.attr('src')).to.match(/data:image/)
    })
  })

  it('should submit an order when it is valid', () => {
    cy.visit('/')
    cy.get('.field input')
      .eq(0)
      .type('Suco de Goiaba')

    cy.get('.field input')
      .eq(1)
      .type('Goiaba')

    cy.get('.field input')
      .eq(2)
      .type('500')

    cy.get('.field textarea').type(
      'Um mero suco de goiaba. Tem sachet de açúcar no balcão...'
    )

    cy.get('.image-upload input').attachFile(
      '../../../src/assets/img/images.png'
    )

    cy.get('button[type="submit"]').click()

    expect(cy.contains('"Suco de Goiaba')).to.be.ok
  })

  it('should save order with a placeholder image when not given one', () => {
    cy.get('.field input')
      .eq(0)
      .type('Suco de Goiaba')

    cy.get('.field input')
      .eq(1)
      .type('Goiaba')

    cy.get('.field input')
      .eq(2)
      .type('500')

    cy.get('button[type="submit"]').click()

    cy.get('.order-item__image > img').then($el => {
      expect($el.eq(0).attr('src')).to.not.equal($el.eq(1).attr('src'))
    })
  })
})
