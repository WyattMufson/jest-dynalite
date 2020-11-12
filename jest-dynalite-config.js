// This is the simple jest-dynalite config used by most tests
// More advanced test configs can be found in .jest/configs
module.exports = {
  tables: [
    {
      TableName: "files",
      KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
      AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S" }],
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
      }
    }
  ],
  basePort: 8000
};
