export function obterDataHoraAtual() {
    const dataAtual = new Date()
    let anoAtual = dataAtual.getFullYear();
    let mesAtual = dataAtual.getMonth() + 1;
    let diaAtual = dataAtual.getDate();

    const data = (diaAtual< 10 ? '0' : '') + `${diaAtual}/`+ (mesAtual < 10 ? '0' : '') + `${mesAtual}/${anoAtual}`

    const horaAtual = dataAtual.getHours();
    const minutoAtual = dataAtual.getMinutes();
    const segundoAtual = dataAtual.getSeconds();

    const horario = (horaAtual < 10 ? '0' : '') + horaAtual + ':' + (minutoAtual < 10 ? '0' : '') + minutoAtual + ':' + (segundoAtual < 10 ? '0' : '') + segundoAtual;

    const dataHora = `${data} ${horario}` 

    return dataHora;

}