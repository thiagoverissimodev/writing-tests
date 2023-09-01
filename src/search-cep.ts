export type ResponseCep = {
    cep: string,
    state: string,
    city: string,
    neighborhood: string,
    street: string,
    service: string
}
export async function searchCep(cep: number): Promise<ResponseCep> {
    return await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`)
        .then(response => response.json());
}

