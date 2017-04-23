'use strict'

const assetNames = require('../../../libs/asset-names')

/**
 * RAML Resource Type representing the HTTP Requests & Responses that can be
 * made to `/{type}/{id}/relationships/{relationship-name}/` endpoint when the
 * relationship is a To-One Relationship.
 * @type {Object}
 */
module.exports = {
  get: {
    description: 'Endpoint used to retrieve the To-One relationship info of ' +
      'a resource.\n' +
      'More info: http://jsonapi.org/format/#fetching-relationships',
    is: [ assetNames.traits.jsonAPIHeader ],
    responses: {
      200: {
        description: 'HTTP Response when relationship field exists.\n' +
          'More info: ' +
          'http://jsonapi.org/format/#fetching-relationships-responses-200',
        headers: {
          'Content-Type': {
            description: 'JSON-API Content Type of HTTP Request ' +
              '(application/vnd.api+json)',
            example: 'application/vnd.api+json'
          }
        },
        body: {
          type: assetNames.types.toOneRelationship
        }
      },
      404: {
        description: 'HTTP Response when relationship field does not exist.\n' +
          'More info:' +
          'http://jsonapi.org/format/#fetching-relationships-responses-404',
        headers: {
          'Content-Type': {
            description: 'JSON-API Content Type of HTTP Request ' +
              '(application/vnd.api+json)',
            example: 'application/vnd.api+json'
          }
        },
        body: {
          type: assetNames.types.errorDocument
        }
      }
    }
  },
  patch: {
    description: 'Endpoint used to update a To-One relationship of a ' +
      'resource.\nMore info: ' +
      'http://jsonapi.org/format/#crud-updating-to-one-relationships',
    is: [ assetNames.traits.jsonAPIHeader ],
    body: {
      type: assetNames.types.toOneRelationship
    },
    responses: {
      200: {
        description: 'HTTP Response when the relationship has been updated.\n' +
          'More Info:' +
          'http://jsonapi.org/format/#crud-updating-relationship-responses-200',
        headers: {
          'Content-Type': {
            description: 'JSON-API Content Type of HTTP Request ' +
              '(application/vnd.api+json)',
            example: 'application/vnd.api+json'
          }
        },
        body: {
          type: assetNames.types.toOneRelationship
        }
      },
      202: {
        description: 'HTTP Response for when the request to update the' +
          'relationship has been accepted, but the server has not completed ' +
          'the modification by the time it responded.\n' +
          'More Info:' +
          'http://jsonapi.org/format/#crud-updating-relationship-responses-202',
        headers: {
          'Content-Type': {
            description: 'JSON-API Content Type of HTTP Request ' +
              '(application/vnd.api+json)',
            example: 'application/vnd.api+json'
          }
        }
      },
      204: {
        description: 'HTTP Response for when the relationship has been ' +
          'updated, but unlike HTTP Status 200 the server did not provide ' +
          'the updated relationship in the HTTP Response Body.\n' +
          'More Info:' +
          'http://jsonapi.org/format/#crud-updating-relationship-responses-204',
        headers: {
          'Content-Type': {
            description: 'JSON-API Content Type of HTTP Request ' +
              '(application/vnd.api+json)',
            example: 'application/vnd.api+json'
          }
        }
      },
      403: {
        description: 'HTTP Response for when the request is not allowed.\n' +
          'More Info:' +
          'http://jsonapi.org/format/#crud-updating-relationship-responses-403',
        headers: {
          'Content-Type': {
            description: 'JSON-API Content Type of HTTP Request ' +
              '(application/vnd.api+json)',
            example: 'application/vnd.api+json'
          }
        },
        body: {
          type: assetNames.types.errorDocument
        }
      }
    }
  }
}
