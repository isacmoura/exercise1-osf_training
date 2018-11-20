$("form").submit(function (event) {
    let $customForm = $(this);

    let arrayForm = $customForm.serializeArray();

    alert(`E-mail: ${arrayForm[0].value} logado com sucesso`);

})	