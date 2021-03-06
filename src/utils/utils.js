const specialCharsRegexGlobal = /[^A-Z a-z 0-9]/g
const utils = {
  name: 'utils',
  version: '1.0.0',
  isCpf: cpf => {
    if (utils.isNumero(cpf)) cpf = cpf.toString()
    cpf = utils.sanitizeCpfCnpj(cpf)
    if (cpf === '') return false
    // Elimina os CPF inválidos conhecidos
    if (
      cpf.length !== 11 ||
        cpf === '00000000000' ||
        cpf === '11111111111' ||
        cpf === '22222222222' ||
        cpf === '33333333333' ||
        cpf === '44444444444' ||
        cpf === '55555555555' ||
        cpf === '66666666666' ||
        cpf === '77777777777' ||
        cpf === '88888888888' ||
        cpf === '99999999999'
    ) {
      return false
    }
    // Valida primeiro digito
    let add = 0
    for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i)
    let rev = 11 - (add % 11)
    if (rev === 10 || rev === 11) rev = 0
    if (rev !== parseInt(cpf.charAt(9))) return false
    // Valida segundo digito
    add = 0
    for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i)
    let rest = 11 - (add % 11)
    if (rest === 10 || rest === 11) rest = 0
    if (rest !== parseInt(cpf.charAt(10))) return false
    return true
  },
  isCnpj: cnpj => {
    if (utils.isNumero(cnpj)) cnpj = cnpj.toString()

    cnpj = utils.sanitizeCpfCnpj(cnpj)

    if (cnpj === '') return false

    if (cnpj.length !== 14) return false

    // Elimina os CNPJ inválidos conhecidos
    if (
      cnpj === '00000000000000' ||
        cnpj === '11111111111111' ||
        cnpj === '22222222222222' ||
        cnpj === '33333333333333' ||
        cnpj === '44444444444444' ||
        cnpj === '55555555555555' ||
        cnpj === '66666666666666' ||
        cnpj === '77777777777777' ||
        cnpj === '88888888888888' ||
        cnpj === '99999999999999'
    ) {
      return false
    }

    // Valida DVs
    let tamanho = cnpj.length - 2
    let numeros = cnpj.substring(0, tamanho)
    let digitos = cnpj.substring(tamanho)
    let soma = 0
    let pos = tamanho - 7
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--
      if (pos < 2) pos = 9
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)

    if (resultado !== Number(digitos.charAt(0))) return false

    tamanho = tamanho + 1
    numeros = cnpj.substring(0, tamanho)
    soma = 0
    pos = tamanho - 7
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--
      if (pos < 2) pos = 9
    }
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
    if (resultado !== Number(digitos.charAt(1))) return false

    return true
  },

  isCpfCnpj: cpfCnpj => utils.isCpf(cpfCnpj) || utils.isCnpj(cpfCnpj),

  isNumero: valor => typeof valor === 'number',

  sanitizeCpfCnpj: valor => {
    if (utils.isNumero(valor)) valor = valor.toString()
    return valor.replace(/[^\d]+/g, '')
  },
  isNull: obj => obj === null || typeof (obj) === 'undefined',
  isNotNull: obj => obj !== null && typeof (obj) !== 'undefined',
  isEmptyObject: obj => utils.isNull(obj) || Object.entries(obj).length === 0,
  isNotEmptyObject: obj => utils.isNotNull(obj) && Object.entries(obj).length !== 0,
  containsText: text => utils.isNotNull(text) && text.constructor.name === 'String' && text.trim() !== '',
  sanitize: value => value.toString().replace(specialCharsRegexGlobal, ''),
  capitalize: valor => valor.toString().toUpperCase()

}

export default utils
