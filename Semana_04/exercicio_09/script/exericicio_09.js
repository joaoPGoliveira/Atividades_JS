class Formulario {
    constructor() {
      this.professorRadio = document.getElementById('professor');
      this.alunoRadio = document.getElementById('aluno');
      this.formulario = document.getElementById('formulario');
      this.inputsAdicionaisContainer = document.createElement('div');
      this.formulario.appendChild(this.inputsAdicionaisContainer);
  
      this.professorRadio.addEventListener('change', () => this.atualizarCampos());
      this.alunoRadio.addEventListener('change', () => this.atualizarCampos());
    }
  
    atualizarCampos() {
      this.removerInputsRelacionados();
  
      if (this.professorRadio.checked) {
        this.adicionarInput('Área:', 'text', 'area');
        this.adicionarInput('Lattes:', 'text', 'lattes');
      } else if (this.alunoRadio.checked) {
        this.adicionarInput('Curso:', 'text', 'curso');
      }
    }
  
    adicionarInput(labelText, inputType, inputId) {
      const inputContainer = document.createElement('div');
      inputContainer.classList.add('input-container');
  
      const label = document.createElement('label');
      label.textContent = labelText;
      inputContainer.appendChild(label);
  
      const input = document.createElement('input');
      input.type = inputType;
      input.id = inputId;
      input.name = inputId;
      inputContainer.appendChild(input);
  
      this.inputsAdicionaisContainer.appendChild(inputContainer);
    }
  
    removerInputsRelacionados() {
      while (this.inputsAdicionaisContainer.firstChild) {
        this.inputsAdicionaisContainer.removeChild(this.inputsAdicionaisContainer.firstChild);
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    new Formulario();
  });