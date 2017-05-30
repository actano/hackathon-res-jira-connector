// With ES6
import JiraApi from 'jira-client';
import babel_polyfill from "babel-polyfill";
import request from 'supertest'

const hackathonResJiraConnector = {
  jira: async function () {
    var jira = new JiraApi({
      protocol: 'https',
      host: 'jira.actano.de',
      username: process.env.JIRA_USER,
      password: process.env.JIRA_PASSWORD,
      apiVersion: '2',
      strictSSL: true
    });
    let issues = await jira.searchJira('project=RES AND Created>2017-04-29');
    for(let i=0; i < issues.issues.length; i++) {
      const issue = issues.issues[i];
      const app = `https://resources-staging.rplan.com`;
      await request(app)
        .post(`/v2/entities?a=58f65f05574cbc54621c4d4c`)
        .set('Authorization', 'bearer d23c2185-a49b-4a91-ba23-3caa74abd8e3')
        .set('Content-Type', 'application/json; charset=UTF-8')
        .send(JSON.stringify(issue))
    }
  }
};

export default hackathonResJiraConnector;
