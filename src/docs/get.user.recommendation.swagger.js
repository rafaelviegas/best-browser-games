
module.exports = {
    tags: ['Users'],
    description: "Consulta recomendações por ID de Usuário",
    operationId: 'getUserRecommendationsByUserId',
    security: [
        {
            bearerAuth: []
        }
    ],
    parameters: [
        {
            "name": "userId",
            "in": "path",
            "description": "ID do Usuário que deseja receber as recomendações",
            "required": true
        }
    ],
    responses: {
        "200": {          
            description: "Listagem de recomendações de jogos.",
            "content": {
                "application/json": {
                    schema: {
                        type: "array",
                        items: {
                        type: "object",
                        properties: {
                            _id: {
                                type: "string"
                            },
                            name: {
                                type: "string"
                            },
                            category: {
                                type: "object",
                                properties: {
                                    _id: {
                                        type: "string"
                                    },
                                    name: {
                                        type: "string"
                                    },
                                }
                            },
                            description:{
                                type: "string"
                            },
                            url:{
                                type: "string"
                            },
                            imageURL:{
                                type: "string"
                            },
                            videoURL:{
                                type: "string"
                            }
                        }
                    }
                }
                }
            }
        }
    }
} 