export default function onError(error) {

    const message = !(error instanceof Error) && error.message ?
        error.message : error.toString();

    alert(message);

}