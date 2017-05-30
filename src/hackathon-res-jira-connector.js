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
    return await jira.searchJira('assignee=mtolkiehn') // jira.searchJira('issue=RX-9853') jira.searchJira('Created>2017-05-30')
  }
};

export default hackathonResJiraConnector;
