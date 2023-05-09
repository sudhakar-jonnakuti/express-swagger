import {
  createPost, createPostRequestBody,
  getPost, getPostById,
  updatePost, updatePostRequestBody,
  deletePost
} from "./module/post.openapi";

const apiOpenApi = {
  openapi: '3.0.0',
  info: {
    version: '1.3.0',
    title: 'APPLICATION - OPEN API',
    description: 'Description of my API here',
    termsOfService: 'https://mysite.com/terms',
    contact: {
      name: 'MicrosreviceName',
      email: 'application@company.com',
      url: 'https://company-portal.com',
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  "servers": [
    {
      url: 'http://localhost:5000/',
      description: 'Local Server',
    },
    {
      url: 'https://api.mysite.com',
      description: 'Production Server',
    },
  ],
  tags: [{
    name: 'Post',
  }],
  "paths": {
    "/api/v1/post": {
      post: createPost,
      get: getPost,
    },
    '/api/v1/post/{id}': {
      get: getPostById,
      put: updatePost,
      delete: deletePost,
    }
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {
      createPostRequestBody,
      updatePostRequestBody
    },
  },
};

export default apiOpenApi;