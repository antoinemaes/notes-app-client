export default {
    s3: {
        region: "eu-west-3",
        bucket: "antoine-notes"
    },
    apiGateway: {
        region: "eu-west-3",
        endpoint: "https://eb9yxapp1e.execute-api.eu-west-3.amazonaws.com/prod"
    },
    cognito: {
        region: "eu-west-2",
        userPoolId: "eu-west-2_DVxSROkiV",
        userPoolWebClientId: "7rfulsb6a4ebk45lv6jhtun8un",
        identityPoolId: "eu-west-2:40484364-f1af-48cf-a615-14f921ce7ca0"
    }
};