
module.exports = {
    tags: ['Games'],
    description: "Retorna listagem de games cadastrados",
    operationId: 'getGames',
    parameters: [
        {
            "name": "categoryId",
            "in": "query",
            "description": "Obter um game pelo ID da categoria",
            "required": false
        },
        {
            "name": "name",
            "in": "query",
            "description": "Obter um game pelo nome ou parte dele",
            "required": false
        }        
    ],
    responses: {
        "200": {          
            description: "Listagem de games.",
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