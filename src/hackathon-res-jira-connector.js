// With ES6
import JiraApi from 'jira-client';
require("babel-polyfill");

const hackathonResJiraConnector = {
  greet: async function() {
// Initialize
    var jira = new JiraApi({
      protocol: 'https',
      host: 'jira.actano.de',
      username: 'xxx',
      password: 'xxx',
      apiVersion: '2',
      strictSSL: true
    });
    return jira.findIssue("RES-341")
      .then(function(issue) {
        console.log('Status: ' + issue.fields.status.name);
      })
      .catch(function(err) {
        console.error(err);
      });
  }
};

export default hackathonResJiraConnector;
