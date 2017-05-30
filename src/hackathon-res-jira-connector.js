// With ES6
import JiraApi from 'jira-client';
import babel_polyfill from "babel-polyfill";

const hackathonResJiraConnector = {
  greet: async function() {
    var jira = new JiraApi({
      protocol: 'https',
      host: 'jira.actano.de',
      username: process.env.JIRA_USER,
      password: process.env.JIRA_PASSWORD,
      apiVersion: '2',
      strictSSL: true
    });
    const result = await jira.searchJira('assignee=lmenzel AND Created>2017-05-12')  // searchJira('assignee=mtolkiehn') jira.searchJira('issue=RX-9853')
      .then(function(result) {
        console.log(result)
        console.log('Search-Result: ' + JSON.stringify(result, null, 4));
      })
      .catch(function(err) {
        console.error(err);
      });
  }
};

export default hackathonResJiraConnector;
