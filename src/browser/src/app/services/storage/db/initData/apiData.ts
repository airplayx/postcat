export const SampleCollection = {
  name: 'Default',
  id: 1,
  environmentList: [],
  collections: [
    {
      name: 'default',
      collectionType: 0,
      children: [
        {
          collectionType: 1,
          name: 'Update an existing pet',
          uri: '/pet',
          protocol: 0,
          apiAttrInfo: { requestMethod: 2, contentType: 2 },
          requestParams: {
            headerParams: [],
            queryParams: [],
            restParams: [],
            bodyParams: [
              { name: 'id', isRequired: 0, partType: 1, dataType: 0, description: '', paramAttr: { example: '10' } },
              { name: 'name', isRequired: 1, partType: 1, dataType: 0, description: '', paramAttr: { example: 'doggie' } },
              {
                name: 'category',
                isRequired: 0,
                partType: 1,
                dataType: 13,
                description: '',
                paramAttr: { example: '' },
                childList: [
                  { name: 'id', isRequired: 0, partType: 1, dataType: 0, description: '', paramAttr: { example: '1' } },
                  { name: 'name', isRequired: 0, partType: 1, dataType: 0, description: '', paramAttr: { example: 'Dogs' } }
                ]
              },
              { name: 'photoUrls', isRequired: 1, partType: 1, dataType: 12, description: '', paramAttr: { example: '' } },
              {
                name: 'tags',
                isRequired: 0,
                partType: 1,
                dataType: 12,
                description: '',
                paramAttr: { example: '' },
                childList: [
                  { name: 'id', isRequired: 0, partType: 1, dataType: 0, description: '', paramAttr: { example: '' } },
                  { name: 'name', isRequired: 0, partType: 1, dataType: 0, description: '', paramAttr: { example: '' } }
                ]
              },
              {
                name: 'status',
                isRequired: 0,
                partType: 1,
                dataType: 0,
                description: 'pet status in the store',
                paramAttr: { example: '' }
              }
            ]
          },
          responseList: [
            {
              isDefault: 1,
              contentType: 3,
              responseParams: {
                headerParams: [],
                bodyParams: [
                  { name: 'id', isRequired: 0, partType: 1, dataType: 0, description: '', paramAttr: { example: '10' } },
                  { name: 'name', isRequired: 1, partType: 1, dataType: 0, description: '', paramAttr: { example: 'doggie' } },
                  {
                    name: 'category',
                    isRequired: 0,
                    partType: 1,
                    dataType: 13,
                    description: '',
                    paramAttr: { example: '' },
                    childList: [
                      { name: 'id', isRequired: 0, partType: 1, dataType: 0, description: '', paramAttr: { example: '1' } },
                      { name: 'name', isRequired: 0, partType: 1, dataType: 0, description: '', paramAttr: { example: 'Dogs' } }
                    ]
                  },
                  { name: 'photoUrls', isRequired: 1, partType: 1, dataType: 12, description: '', paramAttr: { example: '' } },
                  {
                    name: 'tags',
                    isRequired: 0,
                    partType: 1,
                    dataType: 12,
                    description: '',
                    paramAttr: { example: '' },
                    childList: [
                      { name: 'id', isRequired: 0, partType: 1, dataType: 0, description: '', paramAttr: { example: '' } },
                      { name: 'name', isRequired: 0, partType: 1, dataType: 0, description: '', paramAttr: { example: '' } }
                    ]
                  },
                  {
                    name: 'status',
                    isRequired: 0,
                    partType: 1,
                    dataType: 0,
                    description: 'pet status in the store',
                    paramAttr: { example: '' }
                  }
                ]
              }
            }
          ],
          sort: 0,
          requestMethod: 2,
          contentType: 2
        },
      ],
      type: 1,
      parentId: 2,
      sort: 0,
      depth: 2,
      projectUuid: 'ec1c8f9d-619c-4db7-bba1-3f62a70a3e1b',
      workSpaceUuid: '7b37927a-9257-4045-a554-c819513a4ac4',
      createTime: 1679996809962,
      updateTime: 1679996809962,
      id: 3
    }
  ],
  postcat: '0.5.0'
};
