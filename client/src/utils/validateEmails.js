// eslint-disable-next-line
const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default emails => {
  const invalidEmails = emails
    .replace(/^\s*,$/, '')
    .replace(/,\s*$/, '')
    .split(',')
    .map(email => email.trim())
    .filter(email => regularExpression.test(email) === false);

  if (invalidEmails.length) {
    return `Die E-Mail Adressen hat ein Fehler: ${invalidEmails}`;
  }
  return;
};
