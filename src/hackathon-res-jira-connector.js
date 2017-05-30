// With ES6
import JiraApi from 'jira-client';
import babel_polyfill from "babel-polyfill";
import request from 'supertest'

const hackathonResJiraConnector = {
  jira: async function() {
    var jira = new JiraApi({
      protocol: 'https',
      host: 'jira.actano.de',
      username: process.env.JIRA_USER,
      password: process.env.JIRA_PASSWORD,
      apiVersion: '2',
      strictSSL: true
    });
    return await jira.searchJira('assignee=mtolkiehn') // jira.searchJira('issue=RX-9853') jira.searchJira('Created>2017-05-30')
  },
  resources: async function() {
    const app = `https://resources-staging.rplan.com`
    const payload = {
      "name": "AMT AG",
      "avatarLogic": null,
      "accountType": "t",
      "active": true,
      "legacyId": 319,
      "deleted": false,
      "snapshot": false,
      "owner": "6687",
      "labels": [
        {
          "id": "58f65f0a574cbc54621c9645",
          "text": "Elektriker",
          "abbrev": null,
          "deleted": false,
          "snapshot": false,
          "color": "1",
          "account": "58f65f0a574cbc54621c9627",
          "__type": "label"
        },
        {
          "id": "58f65f0a574cbc54621c9646",
          "text": "Engineering",
          "abbrev": null,
          "deleted": false,
          "snapshot": false,
          "color": "4",
          "account": "58f65f0a574cbc54621c9627",
          "__type": "label"
        },
        {
          "id": "58f65f0a574cbc54621c9647",
          "text": "Mechaniker",
          "abbrev": null,
          "deleted": false,
          "snapshot": false,
          "color": "3",
          "account": "58f65f0a574cbc54621c9627",
          "__type": "label"
        },
        {
          "text": "Me",
          "abbrev": null,
          "deleted": false,
          "snapshot": false,
          "color": "6",
          "account": "58f65f0a574cbc54621c9627",
          "__type": "label",
          "id": "tmp$3"
        },
        {
          "text": "Me1",
          "abbrev": null,
          "deleted": false,
          "snapshot": false,
          "color": "7",
          "account": "58f65f0a574cbc54621c9627",
          "__type": "label",
          "id": "tmp$4"
        }
      ],
      "memberType": "58f65f0a574cbc54621c9637",
      "members": [
        "58f65f0a574cbc54621c9648",
        "58f65f0a574cbc54621c964c",
        "58f65f0a574cbc54621c9650",
        "58f65f0a574cbc54621c9654",
        "58f65f0a574cbc54621c9658",
        "58f65f0a574cbc54621c965c",
        "58f65f0a574cbc54621c9660",
        "58f65f0a574cbc54621c9664",
        "58f65f0a574cbc54621c9668",
        "58f65f0a574cbc54621c966c",
        "58f65f0a574cbc54621c9670",
        "58f65f0a574cbc54621c9674",
        "58f65f0a574cbc54621c9678",
        "58f65f0a574cbc54621c967c",
        "58f65f0a574cbc54621c9680",
        "58f65f0a574cbc54621c9684",
        "58f65f0a574cbc54621c9688",
        "58f65f0a574cbc54621c968c",
        "58f65f0a574cbc54621c9690",
        "58f65f0a574cbc54621c9694"
      ],
      "entityTypes": [
        "58f65f0a574cbc54621c9637",
        "58f65f0a574cbc54621c9640",
        "586fbfb9e4b08b38b6c20f12"
      ],
      "absencePlanningObjectType": "58f65f0a574cbc54621c9628",
      "defaultWorkingScheme": "58f65f0a574cbc54621c9636",
      "workingSchemes": [
        "58f65f0a574cbc54621c9636"
      ],
      "defaultHolidayScheme": "58f65f0a574cbc54621c9635",
      "holidaySchemes": [
        "58f65f0a574cbc54621c9635"
      ],
      "__type": "account",
      "id": "58f65f0a574cbc54621c9627"
    }
    return await request(app)
      .post(`/v2/model/boards/5728c30ee4b02f1ed5cbf211/changes/0`)
      .set('Authorization', 'bearer d23c2185-a49b-4a91-ba23-3caa74abd8e3')
      .set('Content-Type', 'application/json')
      .send(payload)
  }
};

export default hackathonResJiraConnector;
