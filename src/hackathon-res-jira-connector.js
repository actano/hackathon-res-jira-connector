// With ES6
import JiraApi from 'jira-client';
import babel_polyfill from "babel-polyfill";
import request from 'supertest'

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
    let issues = await jira.searchJira('project=RES AND Created>2017-05-29');
    return issues // jira.searchJira('issue=RX-9853') jira.searchJira('Created>2017-05-30')
  },
  put: async function() {
    const app = `http://localhost:4200`;
    const payload = {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "62929",
      "self": "https://jira.actano.de/rest/api/2/issue/62929",
      "key": "RES-351",
      "fields": {
        "issuetype": {
          "self": "https://jira.actano.de/rest/api/2/issuetype/1",
          "id": "1",
          "description": "Ein Problem, das die Funktionen des Produkts beeinträchtigt oder verhindert.",
          "iconUrl": "https://jira.actano.de/secure/viewavatar?size=xsmall&avatarId=11753&avatarType=issuetype",
          "name": "Bug",
          "subtask": false,
          "avatarId": 11753
        },
        "customfield_10070": null,
        "customfield_10071": null,
        "timespent": null,
        "customfield_11041": null,
        "customfield_11042": null,
        "customfield_11240": [
          "com.atlassian.greenhopper.service.sprint.Sprint@48942394[id=450,rapidViewId=77,state=ACTIVE,name=RES Sprint 61,startDate=2017-05-23T20:33:12.299+02:00,endDate=2017-06-06T01:49:00.000+02:00,completeDate=<null>,sequence=450]"
        ],
        "customfield_11241": null,
        "customfield_11043": null,
        "project": {
          "self": "https://jira.actano.de/rest/api/2/project/13340",
          "id": "13340",
          "key": "RES",
          "name": "Ressourcenplaner",
          "avatarUrls": {
            "48x48": "https://jira.actano.de/secure/projectavatar?avatarId=11853",
            "24x24": "https://jira.actano.de/secure/projectavatar?size=small&avatarId=11853",
            "16x16": "https://jira.actano.de/secure/projectavatar?size=xsmall&avatarId=11853",
            "32x32": "https://jira.actano.de/secure/projectavatar?size=medium&avatarId=11853"
          }
        },
        "customfield_11242": "9223372036854775807",
        "fixVersions": [],
        "customfield_10231": null,
        "customfield_10111": null,
        "customfield_11641": "0|i06iy7:",
        "aggregatetimespent": null,
        "resolution": null,
        "customfield_10750": null,
        "customfield_10156": null,
        "customfield_11640": "0|i06bp8:",
        "customfield_10751": null,
        "customfield_10157": null,
        "customfield_11246": "9223372036854775807",
        "customfield_11642": "0|i06iqv:",
        "resolutiondate": null,
        "workratio": -1,
        "lastViewed": null,
        "watches": {
          "self": "https://jira.actano.de/rest/api/2/issue/RES-351/watchers",
          "watchCount": 1,
          "isWatching": false
        },
        "customfield_10180": null,
        "customfield_10060": null,
        "customfield_10181": null,
        "created": "2017-05-29T08:29:40.000+0200",
        "customfield_10340": null,
        "customfield_10143": null,
        "priority": {
          "self": "https://jira.actano.de/rest/api/2/priority/6",
          "iconUrl": "https://jira.actano.de/images/icons/ico_ellipses.png",
          "name": " ",
          "id": "6"
        },
        "customfield_10222": null,
        "customfield_10145": null,
        "customfield_10146": null,
        "labels": [],
        "customfield_10018": null,
        "customfield_10019": null,
        "timeestimate": null,
        "aggregatetimeoriginalestimate": null,
        "versions": [],
        "issuelinks": [],
        "assignee": null,
        "updated": "2017-05-29T08:30:01.000+0200",
        "status": {
          "self": "https://jira.actano.de/rest/api/2/status/10026",
          "description": "",
          "iconUrl": "https://jira.actano.de/images/icons/subtask.gif",
          "name": "Aufgaben",
          "id": "10026",
          "statusCategory": {
            "self": "https://jira.actano.de/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "Aufgaben"
          }
        },
        "components": [],
        "customfield_10091": null,
        "customfield_10092": null,
        "customfield_10170": null,
        "customfield_10050": null,
        "customfield_11140": null,
        "timeoriginalestimate": null,
        "description": null,
        "customfield_10130": null,
        "customfield_10132": null,
        "customfield_10210": null,
        "customfield_10013": null,
        "customfield_10014": null,
        "customfield_10212": null,
        "customfield_10005": null,
        "customfield_10006": null,
        "customfield_10009": null,
        "aggregatetimeestimate": null,
        "summary": "Live: Konfigurator - Footer Felder: Werden doppelt angezeigt (jedoch nicht direkt, wird nachgeladen)",
        "creator": {
          "self": "https://jira.actano.de/rest/api/2/user?username=pirmler",
          "name": "pirmler",
          "key": "pirmler",
          "emailAddress": "Peter.Irmler@actano.de",
          "avatarUrls": {
            "48x48": "https://secure.gravatar.com/avatar/a11137267deb5e9ed5ca8c663cb63fb3?d=mm&s=48",
            "24x24": "https://secure.gravatar.com/avatar/a11137267deb5e9ed5ca8c663cb63fb3?d=mm&s=24",
            "16x16": "https://secure.gravatar.com/avatar/a11137267deb5e9ed5ca8c663cb63fb3?d=mm&s=16",
            "32x32": "https://secure.gravatar.com/avatar/a11137267deb5e9ed5ca8c663cb63fb3?d=mm&s=32"
          },
          "displayName": "Peter Irmler",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [],
        "customfield_10160": null,
        "customfield_10240": "9223372036854775807",
        "reporter": {
          "self": "https://jira.actano.de/rest/api/2/user?username=pirmler",
          "name": "pirmler",
          "key": "pirmler",
          "emailAddress": "Peter.Irmler@actano.de",
          "avatarUrls": {
            "48x48": "https://secure.gravatar.com/avatar/a11137267deb5e9ed5ca8c663cb63fb3?d=mm&s=48",
            "24x24": "https://secure.gravatar.com/avatar/a11137267deb5e9ed5ca8c663cb63fb3?d=mm&s=24",
            "16x16": "https://secure.gravatar.com/avatar/a11137267deb5e9ed5ca8c663cb63fb3?d=mm&s=16",
            "32x32": "https://secure.gravatar.com/avatar/a11137267deb5e9ed5ca8c663cb63fb3?d=mm&s=32"
          },
          "displayName": "Peter Irmler",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "customfield_10000": null,
        "customfield_10440": null,
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_10001": null,
        "customfield_10640": null,
        "customfield_10200": null,
        "customfield_10003": null,
        "customfield_10201": null,
        "customfield_10202": null,
        "customfield_10840": null,
        "customfield_10159": null,
        "customfield_10754": null,
        "environment": null,
        "customfield_10755": null,
        "customfield_10756": null,
        "duedate": null,
        "progress": {
          "progress": 0,
          "total": 0
        }
      }
    };
    return await request(app)
      .post(`/v2/entities?a=59132b99e4b07618a2df0af2`)
      .set('Authorization', 'bearer d23c2185-a49b-4a91-ba23-3caa74abd8e3')
      .set('Content-Type', 'application/json')
      .send(JSON.stringify(payload))
  }
};

export default hackathonResJiraConnector;
