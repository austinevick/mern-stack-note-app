interface Props {
    endpoint: string
    method: string
}
export const apiClient = async ({ endpoint, method }: Props):
    Promise<Response> => {
    return fetch(`http://localhost:3000/api/${endpoint}`, {
        method: method,
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
        },
    })
}