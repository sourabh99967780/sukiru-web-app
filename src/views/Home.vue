<template>
  <v-main>
    <v-text-field
      rounded
      v-model="protocol"
      placeholder="Enter the protocol"
    ></v-text-field>
    <v-text-field
      rounded
      v-model="host"
      placeholder="Enter the host"
    ></v-text-field>
    <v-text-field
      rounded
      v-model="port"
      placeholder="Enter the port"
    ></v-text-field>
    <v-text-field
      rounded
      v-model="username"
      placeholder="Enter the username"
    ></v-text-field>
    <v-text-field
      rounded
      v-model="password"
      placeholder="Enter the password"
    ></v-text-field>
    <v-btn ripple depressed color="primary" @click="connect()"
      >Connect to the Database</v-btn
    >
    <v-textarea
      rounded
      v-model="query"
      placeholder="Just Enter Match (n) return n;"
    ></v-textarea>
    <v-btn depressed color="primary" @click="testQuery()">Run Query</v-btn>
    <div v-for="record in dbData" :key="record.keys[0]">{{ record }}</div>
  </v-main>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      protocol: process.env.VUE_APP_NEO4J_PROTOCOL,
      host: process.env.VUE_APP_NEO4J_HOST,
      port: process.env.VUE_APP_NEO4J_PORT,
      username: process.env.VUE_APP_NEO4J_USER,
      password: process.env.VUE_APP_NEO4J_PASSWORD,
      dbData: Array,
      query: ''
    }
  },
  methods: {
    connect() {
      console.log(this.protocol)
      return this.$neo4j
        .connect(
          this.protocol,
          this.host,
          this.port,
          this.username,
          this.password
        )
        .then(driver => {
          console.log(driver)
        })
    },
    driver() {
      // Get a driver instance
      return this.$neo4j.getDriver()
    },
    testQuery() {
      // Get a session from the driver
      const session = this.$neo4j.getSession()

      // Or you can just call this.$neo4j.run(cypher, params)
      session
        .run(this.query)
        .then(res => {
          this.dbData = res.records
        })
        .then(() => {
          session.close()
        })
    }
  }
}
</script>
