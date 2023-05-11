import { Log } from '@microsoft/sp-core-library';
import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
import * as strings from 'HelloWorldApplicationCustomizerStrings';
import './App.js';
import './index.css';

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
    console.log('INIT～～  ~');
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);
    const head: any =
      document.getElementsByTagName('body')[0] || document.documentElement;
    const head1: any =
      document.getElementById('spSiteHeader') || document.documentElement;

    // let articleRedirectScriptTag: HTMLScriptElement =
    //   document.createElement('script');
    // let jsurl = `${this.context.pageContext.web.serverRelativeUrl}/Shared%20Documents/App.js`;
    // articleRedirectScriptTag.src = jsurl;
    // articleRedirectScriptTag.type = 'text/javascript';
    // head.insertAdjacentElement('beforeEnd', articleRedirectScriptTag);

    const root = document.getElementById('root');

    const innerHTML = `
    <div class="t-head-menu t-menu--dark">
      <div class="t-head-menu__inner">
        <ul class="t-menu">
          <li class="t-menu__item t-menu__item--plain">
           <a class="t-menu__link" id="Home" href="https://udtrucks.sharepoint.com/sites/ExtensionsTEST">Home</a>
          </li>
          <li class="t-menu__item t-menu__item--plain">
           <a class="t-menu__link" id="Delivery" href="https://udtrucks.sharepoint.com/sites/ExtensionsTEST/SitePages/Delivery.aspx">Delivery Practice & Framework</a>
          </li>
          <li class="t-menu__item t-menu__item--plain">
           <a class="t-menu__link" id="Integration" href="https://udtrucks.sharepoint.com/sites/ExtensionsTEST/SitePages/Integration.aspx">Integration & Architecture</a>
          </li>
          <li class="t-menu__item t-menu__item--plain">
            <a class="t-menu__link" id="UX" href="https://udtrucks.sharepoint.com/sites/ExtensionsTEST/SitePages/UX.aspx">UX</a>
          </li>
          <li class="t-menu__item t-menu__item--plain">
           <a class="t-menu__link" id="AI" href="https://udtrucks.sharepoint.com/sites/ExtensionsTEST/SitePages/AI.aspx">AI</a>
          </li>
          <li class="t-menu__item t-menu__item--plain">
           <a class="t-menu__link" id="RPA" href="https://udtrucks.sharepoint.com/sites/ExtensionsTEST/SitePages/RPA.aspx">RPA</a>
          </li>
          <li class="t-menu__item t-menu__item--plain">
           <a class="t-menu__link" id="DocumentManagement" href="https://udtrucks.sharepoint.com/sites/ExtensionsTEST/SitePages/DocumentManagement.aspx">Document Management</a>
          </li>

          <li class="t-menu__item t-menu__item--plain">
           <a class="t-menu__link" id="DocumentManagement" href="https://udtrucks.sharepoint.com/sites/ExtensionsTEST/SitePages/LowcodeandMobile.aspx">Low code and Mobile</a>
          </li> 
          <li class="t-menu__item t-menu__item--plain">
           <a class="t-menu__link" id="DocumentManagement" href="https://udtrucks.sharepoint.com/sites/ExtensionsTEST/SitePages/Community.aspx">Community</a>
          </li> 
      </ul>
      </div>
    </div>`;

    if (root) {
    } else {
      head1.insertAdjacentHTML(
        'afterend',
        `
        <div id="root">
          ${innerHTML}
        </div>
      `
      );

      const checkActive = () => {
        const pathname = window.location.href.split('?')[0];
        const links = document.querySelectorAll('.t-menu__link');
        links.forEach((link: any) => {
          const isActive = pathname === link.href;
          if (isActive) {
            link.className = 't-menu__link t-menu__content-active';
          } else {
            link.className = 't-menu__link ';
          }
        });
      };

      checkActive();

      (window as any).addHistoryListener('history', () => {
        console.log('changed');
        checkActive();
      });
      (window as any).addHistoryListener('popstate', () => {
        console.log('goback');
        checkActive();
      });
    }

    // let cssUrl = '/sites/ExtensionsTEST/Shared%20Documents/index.css';
    // let customStyle: HTMLLinkElement = document.createElement('link');
    // customStyle.href = cssUrl;
    // customStyle.rel = 'stylesheet';
    // customStyle.type = 'text/css';
    // head.insertAdjacentElement('beforeEnd', customStyle);
    return Promise.resolve();
  }
}
