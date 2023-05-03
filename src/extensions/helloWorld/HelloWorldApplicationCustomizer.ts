import { Log } from '@microsoft/sp-core-library';
import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'HelloWorldApplicationCustomizerStrings';
import { Switch } from 'tdesign-react';
//import {testinput} from './App.js'
const LOG_SOURCE: string = 'HelloWorldApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IHelloWorldApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class HelloWorldApplicationCustomizer extends BaseApplicationCustomizer<IHelloWorldApplicationCustomizerProperties> {
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);
    const head: any =
      document.getElementsByTagName('body')[0] || document.documentElement;
    //const head1: any = document.getElementById('SuiteNavWrapper') || document.documentElement;
    const head1: any =
      document.getElementById('spSiteHeader') || document.documentElement;
    // let message: string = this.properties.testMessage;
    // if (!message) {
    //   message = '(No properties were provided.)';
    // }

    // Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`).catch(() => {
    //   /* handle error */
    // });

    let articleRedirectScriptTag: HTMLScriptElement =
      document.createElement('script');
    let jsurl = `${this.context.pageContext.web.serverRelativeUrl}/Shared%20Documents/App.js`;
    articleRedirectScriptTag.src = jsurl;
    articleRedirectScriptTag.type = 'text/javascript';
    head.insertAdjacentElement('beforeEnd', articleRedirectScriptTag);

    //document.getElementById('SuiteNavWrapper').innerHTML='<div id="root" style = "display:flex"><div class="t-head-menu t-menu--dark"><div class="t-head-menu__inner"><ul class="t-menu"><li class="t-menu__item t-menu__item--plain"><span class ="spanfont" class="t-menu__content"><hr style="display: none;"><span class ="spanfont">Home</span></span></li><li class="t-menu__item t-menu__item--plain"><span class ="spanfont" class="t-menu__content"><span class ="spanfont">Delivery Practice &amp; Framework</span></span></li><li class="t-menu__item t-menu__item--plain"><span class ="spanfont" class="t-menu__content"><span class ="spanfont">Integration &amp; Architecture</span></span></li><li class="t-menu__item t-menu__item--plain"><span class ="spanfont" class="t-menu__content"><span class ="spanfont">UX</span></span></li><li class="t-menu__item t-menu__item--plain"><span class ="spanfont" class="t-menu__content"><span class ="spanfont">AI</span></span></li><li class="t-menu__item t-menu__item--plain"><span class ="spanfont" class="t-menu__content"><span class ="spanfont">RPA</span></span></li><li class="t-menu__item t-menu__item--plain"><span class ="spanfont" class="t-menu__content"><span class ="spanfont">Document Management</span></span></li><li class="t-menu__item t-menu__item--plain"><span class ="spanfont" class="t-menu__content"><span class ="spanfont">Low code and Mobile</span></span></li><li class="t-menu__item t-menu__item--plain"><span class ="spanfont" class="t-menu__content"><span class ="spanfont">Community</span></span></li></ul></div></div></div>'
    var url = window.location.href;
    var pagename = url.slice(url.lastIndexOf('/') + 1, -5);

    var selectedstyle;
    const innerHTML = `
    <div id="root">
    <div class="t-head-menu t-menu--dark">
      <div class="t-head-menu__inner">
        <ul class="t-menu">
          <li class="t-menu__item t-menu__item--plain">
            <span class="t-menu__content t-menu__content-active"><a className="t-menu__link" id="Home" href="https://udtrucks.sharepoint.com/sites/ExtensionsTEST">Home</a></span>
          </li>
          <li class="t-menu__item t-menu__item--plain">
            <span class="t-menu__content"><a className="t-menu__link" id="Delivery" href="https://udtrucks.sharepoint.com/sites/ExtensionsTEST/SitePages/Delivery.aspx">Delivery Practice & Framework</a></span>
          </li>
          <li class="t-menu__item t-menu__item--plain">
            <span class="t-menu__content"><a className="t-menu__link" id="Integration" href="https://udtrucks.sharepoint.com/sites/ExtensionsTEST/SitePages/Integration.aspx">Integration & Architecture</a></span>
          </li>
          <li class="t-menu__item t-menu__item--plain">
            <span class="t-menu__content"> <a className="t-menu__link" id="UX" href="https://udtrucks.sharepoint.com/sites/ExtensionsTEST/SitePages/UX.aspx">UX</a></span>
          </li>
          <li class="t-menu__item t-menu__item--plain">
            <span class="t-menu__content"><a className="t-menu__link" id="AI" href="https://udtrucks.sharepoint.com/sites/ExtensionsTEST/SitePages/AI.aspx">AI</a></span>
          </li>
          <li class="t-menu__item t-menu__item--plain"><span class="t-menu__content">
            <a className="t-menu__link" id="RPA" href="https://udtrucks.sharepoint.com/sites/ExtensionsTEST/SitePages/RPA.aspx">RPA</a></span>
          </li>
          <li class="t-menu__item t-menu__item--plain"><span class="t-menu__content">
            <a className="t-menu__link" id="DocumentManagement" href="https://udtrucks.sharepoint.com/sites/ExtensionsTEST/SitePages/DocumentManagement.aspx">Document Management</a></span>
          </li>

          <li class="t-menu__item t-menu__item--plain"><span class="t-menu__content">
            <a className="t-menu__link" id="DocumentManagement" href="">Low code and Mobile</a></span>
          </li> 
          <li class="t-menu__item t-menu__item--plain"><span class="t-menu__content">
            <a className="t-menu__link" id="DocumentManagement" href="">Community</a></span>
          </li> 
      </ul>
      </div>
    </div>
    </div>`;
    head1.insertAdjacentHTML('afterend', innerHTML);

    //const innerHTML ='<div id="root" style = "display:flex; background-color:black"><div class="t-head-menu t-menu--dark"><div class="t-head-menu__inner"><ul class="t-menu"><li class="t-menu__item t-menu__item--plain"><span class ="spanfont" class="t-menu__content"><hr style="display: none;"><span class ="spanfont" id="Home"><a href="https://udtrucks.sharepoint.com/sites/ExtensionsTEST">Home</a></span></span></li><li class="t-menu__item t-menu__item--plain"><span class ="spanfont" class="t-menu__content"><span class ="spanfont" id="Delivery"><a href="https://udtrucks.sharepoint.com/sites/ExtensionsTEST/SitePages/Delivery.aspx">Delivery Practice &amp; Framework</a></span></span></li><li class="t-menu__item t-menu__item--plain"><span class ="spanfont" class="t-menu__content"><span class ="spanfont" id="Integration"><a href="https://udtrucks.sharepoint.com/sites/ExtensionsTEST/SitePages/Integration.aspx">Integration &amp; Architecture</a></span></span></li><li class="t-menu__item t-menu__item--plain"><span class ="spanfont" class="t-menu__content"><span class ="spanfont"><a href="https://udtrucks.sharepoint.com/sites/ExtensionsTEST/SitePages/UX.aspx">UX</a></span></span></li><li class="t-menu__item t-menu__item--plain"><span class ="spanfont" class="t-menu__content"><span class ="spanfont"><a href="https://udtrucks.sharepoint.com/sites/ExtensionsTEST/SitePages/AI.aspx">AI</a></span></span></li><li class="t-menu__item t-menu__item--plain"><span class ="spanfont" class="t-menu__content"><span class ="spanfont"><a href="https://udtrucks.sharepoint.com/sites/ExtensionsTEST/SitePages/RPA.aspx">RPA</a></span></span></li><li class="t-menu__item t-menu__item--plain"><span class ="spanfont" class="t-menu__content"><span class ="spanfont"><a href="https://udtrucks.sharepoint.com/sites/ExtensionsTEST/SitePages/DocumentManagement.aspx">Document Management</a></span></span></li><li class="t-menu__item t-menu__item--plain"><span class ="spanfont" class="t-menu__content"><span class ="spanfont"><a href="https://udtrucks.sharepoint.com/sites/ExtensionsTEST/SitePages/LowcodeandMobile.aspx">Low code and Mobile</a></span></span></li><li class="t-menu__item t-menu__item--plain"><span class ="spanfont" class="t-menu__content"><span class ="spanfont"><a href="https://udtrucks.sharepoint.com/sites/ExtensionsTEST/SitePages/Community.aspx">Community</a></span></span></li></ul></div></div></div>'
    //ead1.insertAdjacentHTML("afterend",innerHTML)
    //require('./App.js');
    let cssUrl = '/sites/ExtensionsTEST/Shared%20Documents/index.css';
    let customStyle: HTMLLinkElement = document.createElement('link');
    customStyle.href = cssUrl;
    customStyle.rel = 'stylesheet';
    customStyle.type = 'text/css';
    head.insertAdjacentElement('beforeEnd', customStyle);
    //addEventListener( 'load' , loadstyle);
    return Promise.resolve();
  }
}

//  switch(pagename){
//       case "Delivery":
//         document.getElementById("Delivery").style.color="#1bb0d5";

//       break;
//       case "Integration":
//         document.getElementById("Integration").style.color="#1bb0d5";

//       break;
//       case "UX":
//         document.getElementById("UX").style.color="#1bb0d5";

//       break;
//       case "AI":
//         document.getElementById("AI").style.color="#1bb0d5";

//       break;
//       case "RPA":
//         document.getElementById("RPA").style.color="#1bb0d5";

//       break;
//       case "DocumentManagement":
//         document.getElementById("DocumentManagement").style.color="#1bb0d5";

//       break;
//       case "LowcodeandMobile":
//         document.getElementById("LowcodeandMobile").style.color="#1bb0d5";

//       break;
//       case "Community":
//         document.getElementById("Community").style.color="#1bb0d5";

//       break;
//     }
//     console.log("这玩意运行了吗")
