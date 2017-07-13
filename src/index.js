import Widget from './components/widget';

const VueWidgets = {
  Widget,
  WidgetHeading: Widget.Heading,
  WidgetBody: Widget.Body
}

const install = function (Vue, opts = {}) {
  Object.keys(VueWidgets).forEach((key) => {
    Vue.component(key, VueWidgets[key]);
  });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = Object.assign(VueWidgets, { install }); // eslint-disable-line no-undef
