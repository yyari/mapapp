import App from '../imports/ui/App.jsx';
import Submission from '../imports/ui/SubmitPage.jsx';
//import Error404 from '../imports/ui/404Page.jsx';

FlowRouter.route('/', {
  action() {
    ReactLayout.render(App);
  }
});

FlowRouter.route('/submit', {
  action(params) {
    ReactLayout.render(Submission);
  }
});

//FlowRouter.notFound = {
//  action() {
//    ReactLayout.render(Error404);
//  }
//};
