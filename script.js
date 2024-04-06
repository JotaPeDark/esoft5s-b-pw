const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams);
console.log(window.location.search)

const nomeParam = urlparam.get("nome");
console;log(nomeParam);

const undefinedParam = urlParams.get(testeNull);
console.log(undefinedParam);