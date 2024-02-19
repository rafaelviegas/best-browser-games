
module.exports = {
    tags: ['Users'],
    description: "Consulta um usuário por ID",
    operationId: 'getUserById',
    parameters: [
        {
            "name": "userId",
            "in": "path",
            "description": "Obter um usuário por ID",
            "required": true
        }
    ],
    responses: {
        "200": {          
            description: "Detalhes do usuário.",
            "content": {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            _id: {
                                type: "string"
                            },
                            name: {
                                type: "string"
                            },
                            email:{
                                type: "string"
                            },
                            birthDate: {
                                type: "string"
                            },
                            country: {
                                type: "string"
                            },
                            state: {
                                type: "string"
                            },
                            roles: {
                                type: "string"
                            },                                                        
                        }
                    }
                }
            }
        }
    }
} 