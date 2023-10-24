interface Props {
    endpoint: string
    method: string
    body?: any
}
export const apiClient = async ({ endpoint, method, body }: Props):
    Promise<Response> => {
    return fetch(`http://localhost:3000/api/${endpoint}`, {
        method: method,
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
}