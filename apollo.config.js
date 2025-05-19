module.exports = {
  client: {
    service: {
      localSchemaFile: __dirname + "/.introspection.json",
    },
    includes: ["./src/**/*.graphql"],
    excludes: ["./src/**/*.ts"],
  },
};
