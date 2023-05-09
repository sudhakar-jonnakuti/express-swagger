const createPostBadRequest = {
  description: 'Create post bad request',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          statusCode: {
            description: "status code",
            type: "number",
            example: 400
          },
          payload: {
            type: "object",
            properties: {
              errorCode: {
                type: 'number',
                example: 400
              },
              errorName: {
                type: 'string',
                example: 'BAD_REQUEST'
              },
              errorMessage: {
                type: 'string',
                example: 'The server cannot or will not process the request due to an apparent client error.'
              },
              errorRawMessage: {
                type: 'array',
                items: {
                  type: 'string',
                  example: 'The title is required'
                }
              }
            }
          }
        }
      }
    }
  }
}

const createPostRequestBody = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      example: 'ListentoYourHeartTheLondonAdventure',
    },
    author: {
      type: 'string',
      example: 'RuskinBond',
    },
    url: {
      type: 'string',
      description: 'posts url description',
      example: 'wwwlistentoyourheartcom',
    },
    content: {
      type: 'string',
      example: 'Itisalongestablished',
    }
  },
};

const createPostSuccessResponsePayloadProperties = {
  title: {
    type: 'string',
    description: 'Post title',
    example: 'ListentoYourHeartTheLondonAdventure'
  },
  author: {
    type: 'string',
    description: 'Post author',
    example: 'RuskinBond'
  },
  url: {
    type: 'string',
    description: 'Post URL',
    example: 'wwwlistentoyourheartcom'
  },
  content: {
    type: 'string',
    description: 'Post content',
    example: "Itisalongestablished"
  },
  createdAt: {
    type: 'string',
    description: 'Post Created At',
    example: "2023-04-07T12:37:22.250Z"
  },
  updatedAt: {
    type: 'string',
    description: 'Post Updated At',
    example: "2023-04-07T12:37:22.251Z"
  },
  id: {
    type: 'string',
    description: 'Post Id',
    example: "64300e825aeb8fe1ed713524"
  }
}


const createPostSuccessResponse = {
  description: 'Create post successfully!',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          statusCode: {
            description: "status code",
            type: "number",
            example: 200
          },
          payload: {
            type: "object",
            properties: createPostSuccessResponsePayloadProperties
          }
        }
      }
    }
  }
}

const createPost = {
  tags: ['Post'],
  description: 'Create a new post in the system',
  operationId: 'createPost',
  security: [{ bearerAuth: [] }],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/createPostRequestBody',
        },
      },
    },
    required: true
  },
  responses: {
    '200': createPostSuccessResponse,
    '400': createPostBadRequest
  }
};

const getPostSuccessResponsePayloadProperties = {
  title: {
    type: 'string',
    description: 'Post title',
    example: 'ListentoYourHeartTheLondonAdventure'
  },
  author: {
    type: 'string',
    description: 'Post author',
    example: 'RuskinBond'
  },
  url: {
    type: 'string',
    description: 'Post URL',
    example: 'wwwlistentoyourheartcom'
  },
  content: {
    type: 'string',
    description: 'Post content',
    example: "Itisalongestablished"
  },
  createdAt: {
    type: 'string',
    description: 'Post Created At',
    example: "2023-04-07T12:37:22.250Z"
  },
  updatedAt: {
    type: 'string',
    description: 'Post Updated At',
    example: "2023-04-07T12:37:22.251Z"
  },
  id: {
    type: 'string',
    description: 'Post Id',
    example: "64300e825aeb8fe1ed713524"
  }
}

const getPostSuccessResponse = {
  description: 'Get post successfully!',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          statusCode: {
            description: "status code",
            type: "number",
            example: 200
          },
          payload: {
            type: "array",
            items: {
              type: 'object',
              properties: getPostSuccessResponsePayloadProperties
            }
          }
        }
      }
    }
  }
}

const getPost = {
  tags: ['Post'],
  description: 'Retrieve all post',
  operationId: 'getPost',
  security: [{ bearerAuth: [] }],
  responses: {
    '200': getPostSuccessResponse
  },
};

const getPostBtIdSuccessResponsePayloadProperties = {
  title: {
    type: 'string',
    description: 'Post title',
    example: 'ListentoYourHeartTheLondonAdventure'
  },
  author: {
    type: 'string',
    description: 'Post author',
    example: 'RuskinBond'
  },
  url: {
    type: 'string',
    description: 'Post URL',
    example: 'wwwlistentoyourheartcom'
  },
  content: {
    type: 'string',
    description: 'Post content',
    example: "Itisalongestablished"
  },
  createdAt: {
    type: 'string',
    description: 'Post Created At',
    example: "2023-04-07T12:37:22.250Z"
  },
  updatedAt: {
    type: 'string',
    description: 'Post Updated At',
    example: "2023-04-07T12:37:22.251Z"
  },
  id: {
    type: 'string',
    description: 'Post Id',
    example: "64300e825aeb8fe1ed713524"
  }
}

const getPostBtIdSuccessResponse = {
  description: 'Get post By Id successfully!',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          statusCode: {
            description: "status code",
            type: "number",
            example: 200
          },
          payload: {
            type: "object",
            properties: getPostBtIdSuccessResponsePayloadProperties
          }
        }
      }
    }
  }
}

const getPostById = {
  tags: ['Post'],
  description: 'Retrieve one post',
  operationId: 'getPostById',
  security: [{ bearerAuth: [], }],
  parameters: [{
    name: 'id',
    in: 'path',
    description: 'Post Id',
    required: true,
    schema: {
      "type": "number"
    },
    example: '6437f977f82917942b40c43b'
  }],
  responses: {
    '200': getPostBtIdSuccessResponse
  },
};

const updatePostRequestBody = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      example: 'ListentoYourHeartTheLondonAdventure',
    },
    author: {
      type: 'string',
      example: 'RuskinBond',
    },
    url: {
      type: 'string',
      description: 'posts url description',
      example: 'wwwlistentoyourheartcom',
    },
    content: {
      type: 'string',
      example: 'Itisalongestablished',
    }
  },
};

const updatePostSuccessResponsePayloadProperties = {
  title: {
    type: 'string',
    description: 'Post title',
    example: 'ListentoYourHeartTheLondonAdventure'
  },
  author: {
    type: 'string',
    description: 'Post author',
    example: 'RuskinBond'
  },
  url: {
    type: 'string',
    description: 'Post URL',
    example: 'wwwlistentoyourheartcom'
  },
  content: {
    type: 'string',
    description: 'Post content',
    example: "Itisalongestablished"
  },
  createdAt: {
    type: 'string',
    description: 'Post Created At',
    example: "2023-04-07T12:37:22.250Z"
  },
  updatedAt: {
    type: 'string',
    description: 'Post Updated At',
    example: "2023-04-07T12:37:22.251Z"
  },
  id: {
    type: 'string',
    description: 'Post Id',
    example: "64300e825aeb8fe1ed713524"
  }
}

const updatePostSuccessResponse = {
  description: 'Update post successfully!',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          statusCode: {
            description: "status code",
            type: "number",
            example: 200
          },
          payload: {
            type: "object",
            properties: updatePostSuccessResponsePayloadProperties
          }
        }
      }
    }
  }
}

const updatePost = {
  tags: ['Post'],
  description: 'Update one post',
  operationId: 'updatePost',
  security: [{ bearerAuth: [], }],
  parameters: [{
    name: 'id',
    in: 'path',
    description: 'Post Id',
    required: true,
    schema: {
      "type": "number"
    },
    example: '6437f977f82917942b40c43b'
  }],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/updatePostRequestBody',
        },
      },
    },
    required: true
  },
  responses: {
    '200': updatePostSuccessResponse
  },
}

const deletePostSuccessResponsePayloadProperties = {
  title: {
    type: 'string',
    description: 'Post title',
    example: 'ListentoYourHeartTheLondonAdventure'
  },
  author: {
    type: 'string',
    description: 'Post author',
    example: 'RuskinBond'
  },
  url: {
    type: 'string',
    description: 'Post URL',
    example: 'wwwlistentoyourheartcom'
  },
  content: {
    type: 'string',
    description: 'Post content',
    example: "Itisalongestablished"
  },
  createdAt: {
    type: 'string',
    description: 'Post Created At',
    example: "2023-04-07T12:37:22.250Z"
  },
  updatedAt: {
    type: 'string',
    description: 'Post Updated At',
    example: "2023-04-07T12:37:22.251Z"
  },
  id: {
    type: 'string',
    description: 'Post Id',
    example: "64300e825aeb8fe1ed713524"
  }
}

const deletePostSuccessResponse = {
  description: 'delete post successfully!',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          statusCode: {
            description: "status code",
            type: "number",
            example: 200
          },
          payload: {
            type: "object",
            properties: deletePostSuccessResponsePayloadProperties
          }
        }
      }
    }
  }
}

const deletePost = {
  tags: ['Post'],
  description: 'delete one post',
  operationId: 'deletePost',
  security: [{ bearerAuth: [], }],
  parameters: [{
    name: 'id',
    in: 'path',
    description: 'Post Id',
    required: true,
    schema: {
      "type": "number"
    },
    example: '6437f977f82917942b40c43b'
  }],
  responses: {
    '200': deletePostSuccessResponse
  },
}

export {
  createPost, createPostRequestBody,
  getPost, getPostById,
  updatePost, updatePostRequestBody,
  deletePost
};