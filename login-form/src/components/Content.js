import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboardv1 from "./TemplateDashboard/Dashboardv1";
import Dashboardv2 from "./TemplateDashboard/Dashboardv2";
import Widgets from "./Widgets";
import TopNav from "./LayoutOption/TopNav";
import Fixed from "./LayoutOption/Fixed";
import Boxed from "./LayoutOption/Boxed";
import CollapsedSidebar from './LayoutOption/CollapsedSidebar'
import Charts from "./Charts/Charts";
import FlotCharts from "./Charts/FlotCharts";
import Morris from "./Charts/Morris";
import InlineCharts from "./Charts/InlineCharts";
import generaUI from "./UIElements/generalUI";
import iconsUI from "./UIElements/iconsUI";
import buttonsUI from "./UIElements/buttonsUI";
import slidersUI from "./UIElements/slidersUI";
import timelineUI from "./UIElements/timelineUI";
import modalsUI from "./UIElements/modalsUI";
import MailBox from "./MailBox/MailBox";
import composeMail from "./MailBox/composeMail";
import readMail from "./MailBox/readMail";
import GeneralForm from './Forms/GeneralForm';
import AdvancedForm from './Forms/AdvancedForm';
import EditorsForm from './Forms/EditorsForm';
import DataTable from './Tables/dataTable';
import SimpleTable from './Tables/simpleTable';
import Calendar from './Calendar';
import page_404 from './Examples/404';
import page_500 from './Examples/500';
import Blank from './Examples/blank';
import Invoice from './Examples/invoice';
import Pace from './Examples/pace';
import Profile from './Examples/profile';
const Content = () => {
    return(
        <Switch>
            /* Template Dashboard */
            <Route exact path ="/" component = { Dashboardv1 }/>
            <Route  path ="/dashboardv1" component = { Dashboardv1 } />
            <Route  path ="/dashboardv2" component = { Dashboardv2 } />
            /* Widgets */
            <Route  path ="/widgets" component = { Widgets }/>
            /* Layout Option */
            <Route  path ="/topNav" component = { TopNav }/>
            <Route  path ="/fixed" component = { Fixed }/>
            <Route  path ="/boxed" component = { Boxed }/>
            <Route  path ="/collapsedSidebar" component = { CollapsedSidebar }/>
            /* Charts */
            <Route  path ="/charts" component = { Charts }/>
            <Route  path ="/flotCharts" component = { FlotCharts }/>
            <Route  path ="/morris" component = { Morris }/>
            <Route  path ="/inlineCharts" component = { InlineCharts }/>
            /* UI Elements */
            <Route  path ="/generalUi" component = { generaUI }/>
            <Route  path ="/iconsUi" component = { iconsUI }/>
            <Route  path ="/buttonsUi" component = { buttonsUI }/>
            <Route  path ="/slidersUi" component = { slidersUI }/>
            <Route  path ="/timelineUi" component = { timelineUI }/>
            <Route  path ="/modalsUi" component = { modalsUI }/>
            /* MailBox */
            <Route  path ="/mailbox" component = { MailBox }/>
            <Route  path ="/composeMail" component = { composeMail }/>
            <Route  path ="/readMail" component = { readMail }/>
            /* Form */
            <Route path="/generalForm" component={ GeneralForm }/>
            <Route path="/advancedForm" component={ AdvancedForm }/>
            <Route path="/editorsForm" component={ EditorsForm }/>
            /* Table */
            <Route path="/dataTable" component={ DataTable }/>
            <Route path="/simpleTable" component={ SimpleTable }/>
            /* Calendar */
            <Route path="/calendar" component={ Calendar }/>
            {/*Example*/}
            <Route path="/page_404" component={ page_404 }/>
            <Route path="/page_500" component={ page_500 }/>
            <Route path="/blank" component={ Blank }/>
            <Route path="/invoice" component={ Invoice }/>
            <Route path="/pace" component={ Pace }/>
            <Route path="/profile" component={ Profile }/>
        </Switch>
    );
}
export default Content;
