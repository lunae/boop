/**
  {
    "api":1,
    "name":"Spring Boot Props to Env Vars",
    "description":"Convert Spring Boot application properties to environment variable equivalent.",
    "author":"lunae",
    "icon":"command",
    "tags":"spring-boot,convert,environment-varibles,application-properties"
  }
**/
function main(state) {
  state.text = state.fullText
        .replace(/\./g, "_")
        .replace(/-/g, "")
        .toUpperCase();
}