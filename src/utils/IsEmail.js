export function IsEmail(email) {
  // Expressão regular para validar email
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

  // Testa se o email corresponde ao padrão e verifica comprimento máximo
  return regex.test(email) && email.length <= 254
}
